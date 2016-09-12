DROP DATABASE IF EXISTS `crc`;
CREATE DATABASE  IF NOT EXISTS `crc`;
USE `crc`;
-- Copyright Gabriel Underwood 2016
-- NO WARRANTY





--
-- Table structure for table `meetingroomuser`
--

DROP TABLE IF EXISTS `conferenceroomuser`;

CREATE TABLE `conferenceroomuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `credentials` text,
  `challenges` text,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


--
-- Seed data for table `conferenceroomuser`
--

LOCK TABLES `conferenceroomuser` WRITE;
/*!40000 ALTER TABLE `conferenceroomuser` DISABLE KEYS */;
INSERT INTO `conferenceroomuser` VALUES
(1,NULL,'user1','$2a$10$W1yZd04FRmOedwbuHs6sReU1RLW5lfPQjIB7CGVFW0g1MO2AJ4Qw2',NULL,NULL,'user1@example.com',NULL,NULL,NULL,NULL,NULL),
(2,NULL,'user2','$2a$10$ffzTcNZfVNT9f50Ic1Q8L.Bc9RvzezbS5UTRDn.iXNp1q4QP4rjDu',NULL,NULL,'user2@example.com',NULL,NULL,NULL,NULL,NULL),
(3,NULL,'user3','$2a$10$BLqZObKWIV/HFzLgIiTYQuyjCQsFLxVpRM6SiS6BDTZd6vSuoqmj2',NULL,NULL,'user3@example.com',NULL,NULL,NULL,NULL,NULL),
(4,NULL,'user4','$2a$10$d0TaIERXngmNRIzrs5BTGuS/Vsk4SysiyisvBr1iSYkXa50sLn40u',NULL,NULL,'user4@example.com',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `conferenceroomuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `capacity` int(11) DEFAULT NULL,
  `icon` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `number` (`id`)
);


--
-- Seed data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (101,'Boardroom',NULL,NULL);
INSERT INTO `room` VALUES (401,'Corner Conference',NULL,NULL);
INSERT INTO `room` VALUES (402,'AV Conference Room',NULL,NULL);
INSERT INTO `room` VALUES (501,'Multipurpose Room',NULL,NULL);
INSERT INTO `room` VALUES (599,'Wellness Room',NULL,NULL);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeslot`
--

DROP TABLE IF EXISTS `timeslot`;
CREATE TABLE `timeslot` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `starttime` datetime NOT NULL,
  `endtime` datetime NOT NULL,
  KEY `id` (`id`)

);


--
-- Seed data for table `timeslot`
--

--
-- Stored procedure to create 48 records.
-- timeslot(1, 00:00:00, 00:30:00)
-- timeslot(2, 00:30:00, 01:00:00)
-- ...
-- timeslot(47, 23:00:00, 23:30:00)
-- timeslot(48, 23:30:00, 00:00:00)
--
DELIMITER $$
DROP PROCEDURE IF EXISTS `create_half_hours`$$
CREATE PROCEDURE `create_half_hours`()
BEGIN
	DECLARE h int;

    DECLARE start_hour_str varchar(255);
    DECLARE half_str varchar(255);
    DECLARE end_hour_str varchar(255);
    SET h = 0;


    WHILE h <24 DO
		SET start_hour_str = CONCAT('1970-01-01 ',h,':00:00');
		SET half_str = CONCAT('1970-01-01 ',h,':30:00');
		SET end_hour_str = CONCAT('1970-01-01 ',h+1,':00:00');
        INSERT INTO timeslot(starttime,endtime) VALUES (start_hour_str,half_str);
        IF H < 23 THEN
          INSERT INTO timeslot(starttime,endtime) VALUES (half_str,end_hour_str);
        ELSE
          INSERT INTO timeslot(starttime,endtime) VALUES (half_str,'1970-01-02 00:00:00');
        END IF;
		SET  h = h + 1;
	END WHILE;
END$$
DELIMITER ;


--
-- Call the stored procedure to populate the timeslot table with seed data
--
LOCK TABLES `timeslot` WRITE;
CALL create_half_hours();
UNLOCK TABLES;



--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE `reservation` (
  `userId` int(11) NOT NULL,
  `roomId` int(11) NOT NULL,
  `timeslotId` int(11) NOT NULL,
  `date` date NOT NULL,
  `attendeeCount` int(11) DEFAULT NULL,
  PRIMARY KEY (`roomId`,`timeslotId`,`date`),
  KEY `userid` (`userId`),
  KEY `timeslotid` (`timeslotId`),
  KEY `date` (`date`),
  KEY `roomid` (`roomId`),
  CONSTRAINT `fkroom` FOREIGN KEY (`roomId`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fktimeslot` FOREIGN KEY (`timeslotId`) REFERENCES `timeslot` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkuser` FOREIGN KEY (`userId`) REFERENCES `conferenceroomuser` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
);
