import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import ExtensionsTitleBar from "../components/ExtensionsTitleBar";
import NotificationGrid from "../components/NotificationGrid";
import { notification } from "../assets/content/notification";

const NotificationScreen = () => {
  const [notificationCollection, setNotificationCollection] =
    useState(notification);
  const [search, setSearch] = useState("");

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
      <NotificationGrid notificationCollection={notificationCollection} />
    </Container>
  );
};

export default NotificationScreen;
