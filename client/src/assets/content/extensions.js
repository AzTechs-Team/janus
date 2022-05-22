export const info = {
  Todos: {
    title: "Todos Manager",
    description: `A Cli-application for managing notes and todos`,
    overview: `
    Todos Manager is a cli-application to simplify the process to maintaining a list of tasks to complete. 
      It also has commands to help store random todos and retrive them for later use
    `,
    about: `
    This extension helps you create multiple todo. Not only you can create one todo, you can group multiple todos and group it in one.
    <br>Todo-groups can be eaily prioritized by just dragging and dropping.
    <br><br>
    There are two ways to add a todo in a todo-group:
    <p>1) By uploading a handwritten photo. This extension uses computer vision to convert handwritten text to digital text. This helps users to easily add their todo by not having to write it themselves.
    <p>2) By simply typing in a todo.
    <p>3) Click add to todo to add todo-group to the colection.
    <p>4) CRUD functionalities can be performed on todo-group and todos.
    <br><br>
    Required todo-group can be also be searched through search bar.
    `,
    settings: `
    Overview of things a user can do with installing this extension: <br>
    1) You can drag and drop respective todo-group.<br>
    2) You can search through your todo-group.<br>
    3) All todo-groups can be deleted and updated whenever required.<br>
    4) Todos can also be deleted and updated whenever required.<br>
    5) Todos can be ticked off by simply checking the box.
    `,
  },
  Notes: {
    title: "Notes Manager",
    description: `Virtual Sticky notes`,
    overview: `
     Notes is a cli-application to simplify the process to maintaining a list of notes. 
      It also has commands to help store random notes and retrive them for later use.
    `,
    about: `
    This extension helps you create multiple notes.
    <br>Notes can be eaily prioritized by just dragging and dropping.
    <br><br>
    To add a note:
    <p>1) Click add todo.
    <p>2) Type in notes in the textbox.
    <p>3) Click add to add notes to the colection.
    <p>4) CRUD functionalities can be performed on notes.
    <br><br>
    Required notes can be also be searched through search bar.
    `,
    settings: `
    Overview of things a user can do with installing this extension: <br>
    1) You can drag and drop respective notes. <br>
    2) You can search through your notes list. <br>
    3) Notes can be updated and deleted whenever required.
    `,
  },
  Notifications: {
    title: "Github Notification Manager",
    description: `Handle all your github notifications in one place`,
    overview: `
    Github Notification manager helps user to interact with all the notification they recieve from the github.<br><br>
    As this extension works on webhook feature, user has to add the webhook they receive after installing to all rhe repositories they need notification from.<br><br>
    A very handy tool for developers to keep up with all important notifications.
    `,
    about: `
     This extension helps you manage your github notifications at one place. From issues to comments and every notification is directly displayed on the extension screen. <br><br>
     Interaction with the notification:<br>
     1) Can access the repository of respective notification by simply clicking on the name of the repository.<br>
     2) Can read the notification which is being sent.<br>
     3) Can ignore the notification by clicking "Remind Me Later"
    `,
    settings: `
    Installing this extension:<br>
    1) After clicking "install", a dialog box appears with a webhook link.<br>
    2) Add this webhook to your repository to recieve notifications.<br>
    3) Select Application/json as content type on "Add wwebhook" page.<br>
    4) Extension is installed after adding the webhook to the repo.<br>
<br>
    Overview of things a user can do with installing this extension: <br>
    1) You can drag and drop respective notifications.<br>
    2) You can search through your notification list.
    `,
  },
};
