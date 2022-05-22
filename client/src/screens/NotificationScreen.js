import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import ExtensionsTitleBar from "../components/ExtensionsTitleBar";
import NotificationGrid from "../components/NotificationGrid";
import { notification } from "../assets/content/notification";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/details";

const NotificationScreen = () => {
  const [notificationCollection, setNotificationCollection] = useState([]);
  const [search, setSearch] = useState("");
  const userDetails = useRecoilValue(userState);
  const [payloadUrl, setPayloadUrl] = useState();

  useEffect(() => {
    const socket = new WebSocket("ws://17d0-49-36-91-41.ngrok.io/ws");
    socket.onopen = () => {
      console.log("Connected");
      socket.send(
        JSON.stringify({
          clientId: userDetails._id,
        })
      );
    };
    socket.onmessage = (e) => {
      console.log("Get message from server: " + e.data);
      if (e.data.startsWith("http")) setPayloadUrl(e.data);
      else {
        const res = JSON.parse(e.data);
        console.log("loginnn", res.organization, res.user);
        const notification = !res.hook
          ? {
              id: res.comment.created_at,
              action: res.action,
              body: res.comment.body,
              repoUrl: res.comment.html_url,
              creator: res.comment.user.login,
              repo: {
                url: res.repository.html_url,
                imageUrl: res.repository.owner.avatar_url,
                name: res.repository.name,
                org: res.hasOwnProperty("organization")
                  ? res.organization.login
                  : res.comment.user.login,
              },
              issue: {
                assignees: res.issue.assignees,
                body: res.issue.body,
              },
            }
          : null;
        console.log(notification);
        let temp = notificationCollection;
        temp.push(notification);
        setNotificationCollection([...temp]);
      }
    };
    // return () => {
    //   socket.close();
    // };
  }, []);

  const onRemindMeLater = (id) => {
    let temp = notificationCollection;
    temp = temp.filter((t) => t.id !== id);
    setNotificationCollection([...temp]);
  };

  const onSearch = (text) => {
    if (text) {
      const newData = notification.filter(function (item) {
        const userData = item.descriptive.repoName
          ? item.descriptive.repoName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return userData.indexOf(textData) > -1;
      });

      console.log("aaaa", newData);
      setNotificationCollection(newData);
      setSearch(text);
    } else {
      setNotificationCollection(notification);
      setSearch(text);
    }
  };

  const reset = () => {
    setNotificationCollection(notification);
  };

  return (
    <Container
      bgColor="primary.800"
      py={7}
      px={14}
      m={6}
      borderRadius="xl"
      maxH="100%"
      maxW="92%"
      color="white"
    >
      <ExtensionsTitleBar
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        reset={reset}
        title="Notifications"
      />
      <NotificationGrid
        notificationCollection={notificationCollection}
        payloadUrl={payloadUrl}
        onRemindMeLater={onRemindMeLater}
      />
    </Container>
  );
};

export default NotificationScreen;
