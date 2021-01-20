# Social Media App
A mock social media web-app where users can create and read posts made by themselves and others respectively.

## Technologies Used
+ NodeJS
+ Express
+ SQLite3
+ Sequelize
+ Bootstrap
+ HTML, CSS, Javascript, SQL

## Usage
When the client first logs into the app a 'user' is randomly generated and stored into the browser's localstorage, this user is used for subsequent sessions of the app and persists until the client clears the browser data manually.\
Once logged-in, the client can either - 
+ Create a post.
+ View snippets all the posts posted to the app by all users.
+ Expand one particular post and view it in detail.
+ Filter posts to only see the one made by the client.
+ See other users' comments to a post.
+ Write various comments within a post.

## Running at your end
Since the DBMS used is SQLite, you don't need to set up a server. \
Simply clone the repo locally and run the following commands at the root of the project - 
```
  npm install
  node index
```
Log into the port number 3000 or whatever port number you have set as your environment variable of node.

## Dependencies
To run this app locally, you need to have [NodeJS](https://nodejs.org/en/) installed in your system.

## Todo
+ Currently, writing a comment and post does not give a visual confirmation to the client of the task being complemeted and just simply
adds the required values into the database. So, a visual cue for the above task needs to be implemented.

## Expandability
+ Currently, the users are stored in the localStorage of the browser. So, one way the app can be expanded is by having some sort of 'authentication' method, wherein users can be accessed using a password field.
+ A web framework like Angular, React etc can be implemented to make the front-end even more appealing to the eyes.