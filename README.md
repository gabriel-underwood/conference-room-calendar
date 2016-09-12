## Conference-room-calendar
==============================


**Sample App Using MySQL, Node.js, Loopback, Angular, Loopback Angular SDK, and Bootstrap.**


Special thanks to http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx
for examples of manging login with Angular.

##Installation Instructions

**Install MySQL**
Download from: http://dev.mysql.com/downloads/mysql/
Install following the prompts,  and remember the password you choose.

**Install Node.js**
Download from: http://nodejs.org/download

**Update NPM and install everything**

Update npm
`npm –g install npm`
Install all the packages
`npm –g install strongloop`
`npm –g install loopback-connector-mysql`
`npm –g install loopback-testing`
`npm –g install mocha`
`npm -g install bower`

Finally install into the app
`npm install`
`bower install angular angular-resource angular-route angular-cookies angular-bootstrap`

##Running
Make sure MySQL is running
From the MySQL Command Line Client:
`source conference-room-calendar\mysql\crc.sql`
This creates the schema and populates seed data.

In a console:
`cd confernce-room-calendar`
`node .`

Open your browser to http://localhost:3000

## Loopback Entity Model
The backend is Loopback to do "ORMapping",  There are relationships between the entities, expressed in the [loopback models](commmon\models)
and as foriegn keys in the SQL tables.
The loopback models are in .   Use MySQLWorkbench to view the tables.

[Here is a diagram](entity_model.JPG?raw=true)
