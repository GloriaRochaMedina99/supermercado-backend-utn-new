CREATE DATABASE  IF NOT EXISTS `supermercado_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `supermercado_db`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: supermercado_db
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Almacén','Productos comestibles no perecederos'),(2,'Bebidas','Aguas, jugos, gaseosas y vinos'),(3,'Lácteos','Leches, quesos, yogures y derivados'),(4,'Limpieza','Productos para el hogar y cuidado de ropa'),(5,'Fiambrería','Fiambres, quesos en picada y embutidos'),(6,'Almacén','Productos comestibles no perecederos'),(7,'Bebidas','Aguas, jugos, gaseosas y vinos'),(8,'Lácteos','Leches, quesos, yogures y derivados'),(9,'Limpieza','Productos para el hogar y cuidado de ropa'),(10,'Fiambrería','Fiambres, quesos en picada y embutidos'),(11,'Almacén','Productos comestibles no perecederos'),(12,'Bebidas','Aguas, jugos, gaseosas y vinos'),(13,'Lácteos','Leches, quesos, yogures y derivados'),(14,'Limpieza','Productos para el hogar y cuidado de ropa'),(15,'Fiambrería','Fiambres, quesos en picada y embutidos');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Arroz 1kg',1200.50,50,1),(2,'Vino Portillo Malbec',3500.00,30,2),(3,'Leche Entera 1L',950.00,40,3),(4,'Lavandina 1L',800.00,25,4),(5,'Queso Tybo x 250g',1800.00,15,5),(6,'Arroz 1kg',1200.50,50,1),(7,'Vino Portillo Malbec',3500.00,30,2),(8,'Leche Entera 1L',950.00,40,3),(9,'Lavandina 1L',800.00,25,4),(10,'Queso Tybo x 250g',1800.00,15,5),(11,'Arroz 1kg',1200.50,50,1),(12,'Vino Portillo Malbec',3500.00,30,2),(13,'Leche Entera 1L',950.00,40,3),(14,'Lavandina 1L',800.00,25,4),(15,'Queso Tybo x 250g',1800.00,15,5);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promociones`
--

DROP TABLE IF EXISTS `promociones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promociones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `descuento` int NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promociones`
--

LOCK TABLES `promociones` WRITE;
/*!40000 ALTER TABLE `promociones` DISABLE KEYS */;
INSERT INTO `promociones` VALUES (1,'Descuento Fin de Semana',15,'2026-11-13','2026-11-15'),(2,'Especial Bebidas',20,'2026-11-10','2026-11-20'),(3,'Promo Lácteos Frescos',10,'2026-11-11','2026-11-18'),(4,'Súper Martes de Limpieza',25,'2026-11-10','2026-11-11'),(5,'Ahorro Almacén',10,'2026-11-12','2026-11-25'),(6,'Descuento Fin de Semana',15,'2026-11-13','2026-11-15'),(7,'Especial Bebidas',20,'2026-11-10','2026-11-20'),(8,'Promo Lácteos Frescos',10,'2026-11-11','2026-11-18'),(9,'Súper Martes de Limpieza',25,'2026-11-10','2026-11-11'),(10,'Ahorro Almacén',10,'2026-11-12','2026-11-25'),(11,'Descuento Fin de Semana',15,'2026-11-13','2026-11-15'),(12,'Especial Bebidas',20,'2026-11-10','2026-11-20'),(13,'Promo Lácteos Frescos',10,'2026-11-11','2026-11-18'),(14,'Súper Martes de Limpieza',25,'2026-11-10','2026-11-11'),(15,'Ahorro Almacén',10,'2026-11-12','2026-11-25');
/*!40000 ALTER TABLE `promociones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-11  0:57:05
