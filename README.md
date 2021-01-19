# Social Media App
A mock social media web-app where users can create and read posts made by themselves and others respectively.

## Technologies Used
+ NodeJS
+ Express
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

## Todo
+ A comment section to allow users to respond to different posts.
+ Replacing placeholder footer.

## Expandability
+ Currently, the users are stored in the localStorage of the browser. So, one way the app can be expanded is by having some sort of 'authentication' method, wherein users can be accessed using a password field.
+ A web framework like Angular, React etc can be implemented to make the front-end even more appealing to the eyes.
