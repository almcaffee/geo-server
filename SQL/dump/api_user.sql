-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 34.219.189.208    Database: api
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `middleInitial` varchar(1) DEFAULT NULL,
  `suffix` varchar(20) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `zipExt` mediumint(5) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `phoneExt` varchar(8) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lng` varchar(50) DEFAULT NULL,
  `organizationId` mediumint(9) DEFAULT NULL,
  `networkId` mediumint(9) DEFAULT NULL,
  `groupId` mediumint(8) DEFAULT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createDate` timestamp NULL DEFAULT NULL,
  `updateDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (18,'Org','User',NULL,NULL,'12200 Fairfax Towne Ctr',NULL,'Fairfax','VA','22033',NULL,'1010101010',NULL,'org@test.com','38.86630212873678','-77.36887640197756',NULL,NULL,NULL,NULL,NULL,'2018-10-31 21:19:37',NULL),(19,'Updated','Test',NULL,'Jr','4400 Univesity Drive',NULL,'Fairfax','VA','22030',NULL,'2222222222',NULL,'test@test.com','38.82997082977899','-77.30766026428222',1,NULL,2,NULL,NULL,'2018-10-31 21:48:48',NULL),(20,'John','Doe',NULL,NULL,'4400 Univesity Drive',NULL,'Fairfax','VA','22033',NULL,'1011110000',NULL,'john@test.com','38.87457502332239','-77.39911736511232',1,NULL,2,NULL,NULL,'2018-11-05 03:47:42',NULL),(21,'Test','User',NULL,NULL,'12200 West Ox Road',NULL,'Fairfax','VA','22033',NULL,'7894561230',NULL,'test@test.com','38.87464','-77.36932',1,NULL,2,NULL,NULL,'2018-11-05 03:49:04',NULL),(22,'New','User',NULL,NULL,'1600 Pennsylvania Avenue',NULL,'Washington','DC','20005',NULL,'5555555555',NULL,'new@test.com','38.89832648084025','-77.03628567198143',1,NULL,1,NULL,NULL,'2018-11-05 05:16:08',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-14 10:33:25
