##Chat-App
App is built using MongoDB,ExpressJS,ReactJS and Node

#### Chat-Client

Chat client contain the ReactJS Code used for development of front end Web Application.

- Used WebSocket
- Used Express API to get data from the NoSQL database
- App is Responsive
- Push Notification.
- Component for each message.
- MapBox is used to show the location when it is shared.
- RWD is done based on Routing.

#### Chat - Server

Chat - Server is Server API to request data.

- Use Express and Node
- MongoDB driver for connecting with Node and Express so that data can be response whenever there is a request.
- Express API POST ,GET method for specific Route.
- Authencication System using email and Password.
- Password is Encrypted using bycrypt
- Routes
  -- /get_messages
  -- /chat_history
  -- /auth_register
  -- /auth_login
  -- /send_message
- Socket for real time data communication.

####Features of the App

- Share Image and Document.
- Send Current Location.
- Notify the user about the message.

> Push Notification is currently in development mode
