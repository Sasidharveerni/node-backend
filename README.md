
https://www.linkedin.com/in/sasidhar-v/

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


Lecture 3 - What is Database ? Intro to MongoDB ?

Database - It is a place or something which is used to store the data, to retrieve the data, to update the data, to delete the data.

Read / Write / Update / Delete - Database Operations

Get / Post / Put or Patch / Delete - http methods

Types of database 

1. SQL - You write some queries to deal with the data, also the data is stored in table format.
2. NoSQL - Here we don't have any queries. the data is stored in document format. (Key-value type)

MongoDB - No SQL Database

SQL - 

Select * from table_name

table_name:

id        email           username   password

1     abc@gmail.com         abc       abc@123


NOSQL

{
    "__id": 123456789949
    "email": "abc@gmail.com",
    "username": abc,
    "password": "abc@123"
}


4 steps 

1. In Mongo db website > create a cluster
2. You need to connect >Mongo DB for Vs Code >copy the url
3. Go to Database Access on left side tab > create db user
4. On Network access tab > add 0.0.0.0 ip address