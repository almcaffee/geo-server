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
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `organization` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `zipExt` mediumint(5) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `phoneExt` varchar(8) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lng` varchar(50) DEFAULT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createDate` timestamp NULL DEFAULT NULL,
  `updateDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'Devsthetic LLC','4400 University Drive',NULL,'Fairfax','VA','22030',NULL,'7037954750',NULL,'info@devsthetic.com',NULL,'39','-77','Devsthetic',NULL,'2018-10-31 18:19:36',NULL),(2,'Safeway Inc.','12200 West Ox Rd',NULL,'Fairfax','VA','22033',NULL,'1111111111',NULL,'test@test.com',NULL,'38.86668785677447','-77.36932000000002','Safeway',NULL,'2018-10-31 18:58:25',NULL),(3,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:43:11',NULL),(4,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:54',NULL),(5,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:56',NULL),(6,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:57',NULL),(7,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:58',NULL),(8,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:58',NULL),(9,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:59',NULL),(10,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:45:59',NULL),(11,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:00',NULL),(12,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:01',NULL),(13,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:01',NULL),(14,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:02',NULL),(15,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:02',NULL),(16,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:03',NULL),(17,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:04',NULL),(18,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:04',NULL),(19,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:05',NULL),(20,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:05',NULL),(21,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:06',NULL),(22,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:07',NULL),(23,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:07',NULL),(24,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:08',NULL),(25,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:08',NULL),(26,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:09',NULL),(27,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:09',NULL),(28,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:10',NULL),(29,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:11',NULL),(30,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:11',NULL),(31,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:12',NULL),(32,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:12',NULL),(33,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:13',NULL),(34,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:13',NULL),(35,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:14',NULL),(36,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:14',NULL),(37,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:14',NULL),(38,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:15',NULL),(39,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:16',NULL),(40,'Test Organization','5653 Stone Rd',NULL,'Centreville','VA','20120',NULL,'1234567890',NULL,'test@test.com',NULL,'38.85285','-77.45139','',NULL,'2018-11-05 05:46:17',NULL);
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-14 10:33:15
