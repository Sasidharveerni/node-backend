Steps to create NodeJS backend

1. You need to create one folder
2. Open the terminal inside of your folder.
3. npm init -y
4. Create index.js file inside the project folder.
5. Copy the code
6. node index.js

To Save your changes automatically you need to install one package

nodemon

> npm i -g nodemon

.get -> GET Method

('/', (req, res) => {
})

2 parameters are there -> 1st parameter - A URL (represented by string) - '/', '/home', '/home/:id'
2nd parameter - A callback function

(req, res) - request - coming from client (A URL request, a form request)

response - something we're sending to client.


