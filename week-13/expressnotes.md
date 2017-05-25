# Express.js

## The Core Parts of Express

---

1.**Middleware** - instead of calling one large request handler, several request handlers that each deal with a small chunk of the work are called.

*Examples:* **Logging middleware** - logs every request that comes into the server

**Authorization middleware** - Decides whether the user can continue going or is sent to an unauthorized user page

2.**Routing** - breaks down request handler into smaller pieces, but are executed conditionally, depending on what URL and HTTP method a client sends


3.**Subapplications** - in Express, they are called *routers*. Express lets you define routers that can be used in larger applications. Subapplications allow you to compartamentalize your application in to smaller pieces. 

4.**Conveniences** - In Express, a lot of things are wrapped up into a few lines of code that would take siginifincantly more in raw Node.


- Javascript : jQuery 

as

- Node.js : Express

---

- Express is very flexible and unopinionated.

- Middleware breaks your app down into smaller bits of behavior.

- Routing also breaks your app up into smaller function that are exeuted when a user visits a certain webpage.

- Subapplications help to modularize your code

## The Basics of Node.js

