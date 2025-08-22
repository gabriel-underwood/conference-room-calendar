## Conference-room-calendar
==============================


**Sample App Using MySQL, Node.js, Loopback, Angular, Loopback Angular SDK, and Bootstrap.**


Special thanks to http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx
for examples of manging login with Angular.

##Installation Instructions

**Install MySQL**
Download from: http://dev.mysql.com/downloads/mysql/
Install following the prompts,  and remember the password you choose.
Write the password down, you'll use it in later steps.

**Install Node.js**
Download from: http://nodejs.org/download

**Update NPM and install everything**

Update npm
`npm –g install npm`
Install all the packages and tools
`npm –g install strongloop`
`npm –g install loopback-connector-mysql`
`npm –g install loopback-testing`
`npm –g install mocha`
`npm -g install bower`

Finally install into the app
`npm install`
`bower install angular angular-resource angular-route angular-cookies angular-bootstrap`

##Running
Make sure MySQL is running.
Open the MySQL Command Line Client, you'll need the password
you wrote down when you installed MySQL.
From the MySQL Command Line Client:
`mysql> source {full-path-to}\conference-room-calendar\mysql\crc.sql`
This creates the CRC user, CRC schema, and populates seed data.

In a console:
`cd confernce-room-calendar`
`node .`

Open your browser to http://localhost:3000
Log in as "user1@example.com",  password " " (single space).

## Loopback Entity Model
The backend is Loopback to do an OR-mapping from SQL to REST APIs on an entity model.
There are relationships between the models. For example, see the  [Reservation ](common\models\Reservation.json) model
and as foreign keys in the SQL tables.
You can also use MySQLWorkbench to view the tables.

[Here is a diagram](entity_model.JPG?raw=true)
