-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mindes
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `agendatable`
--

DROP TABLE IF EXISTS `agendatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendatable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tgl` datetime DEFAULT NULL,
  `tempat` varchar(255) NOT NULL,
  `jam` time DEFAULT NULL,
  `hari` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `kegiatan` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendatable`
--

LOCK TABLES `agendatable` WRITE;
/*!40000 ALTER TABLE `agendatable` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `akuntable`
--

DROP TABLE IF EXISTS `akuntable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `akuntable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode` int NOT NULL,
  `uraian` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode` (`kode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `akuntable`
--

LOCK TABLES `akuntable` WRITE;
/*!40000 ALTER TABLE `akuntable` DISABLE KEYS */;
/*!40000 ALTER TABLE `akuntable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beritatable`
--

DROP TABLE IF EXISTS `beritatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beritatable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tgl` datetime NOT NULL,
  `judul` varchar(255) NOT NULL,
  `artikel` text NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `status` enum('publish','proses','gagal') DEFAULT NULL,
  `img_berita` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `judul` (`judul`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beritatable`
--

LOCK TABLES `beritatable` WRITE;
/*!40000 ALTER TABLE `beritatable` DISABLE KEYS */;
/*!40000 ALTER TABLE `beritatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidangtable`
--

DROP TABLE IF EXISTS `bidangtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidangtable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  CONSTRAINT `bidangtable_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `bidangtable` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidangtable`
--

LOCK TABLES `bidangtable` WRITE;
/*!40000 ALTER TABLE `bidangtable` DISABLE KEYS */;
INSERT INTO `bidangtable` VALUES (1,'BIDANG PENYELENGGARAAN PEMERINTAHAN DESA',NULL),(2,'BIDANG PENANGGULANGAN BENCANA, DARURAT DAN MENDESAK DESA',NULL),(3,'BIDANG PEMBINAAN KEMASYARAKATAN',NULL),(4,'BIDANG PEMBERDAYAAN MASYARAKAT',NULL),(5,'BIDANG PELAKSANAAN PEMBANGUNAN DESA',NULL),(6,'Penyelenggaraan Belanja Siltap, Tunjangan dan Operasional Pemerintah Desa',1),(7,'Penyediaan Sarana Prasarana Pemerintah Desa',1),(8,'Pengelolaan Administrasi Kependudukan, Pencatatan Sipil, Statistik dan Kearsipan',1),(9,'Penyelenggaraan Tata Praja Pemerintahan, Perencanaan, Keuangan dan Pelaporan',1),(10,'Sub Bidang Pendidikan',5),(11,'Sub Bidang Kesehatan',5),(12,'Sub Bidang Pekerjaan Umum dan Penataan Ruang',5),(13,'Sub Bidang Kawasan Pemukiman',5),(14,'Sub Bidang Kebudayaan dan Keagamaan',3),(15,'Sub Bidang Kepemudaan dan Olahraga',3),(16,'Sub Bidang Kelembagaan Masyarakat',3),(17,'Sub Bidang Pertanian dan Peternakan',4),(18,'Sub Bidang Peningkatan Kapasitas Aparatur Desa',4),(19,'Sub Bidang Pemberdayaan Perempuan, Perlindungan Anak dan Keluarga',4),(20,'Sub Bidang Penanggulangan Bencana',2),(21,'Sub Bidang Keadaan Mendesak',2);
/*!40000 ALTER TABLE `bidangtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategoritable`
--

DROP TABLE IF EXISTS `kategoritable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kategoritable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategoritable`
--

LOCK TABLES `kategoritable` WRITE;
/*!40000 ALTER TABLE `kategoritable` DISABLE KEYS */;
/*!40000 ALTER TABLE `kategoritable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pencatatantable`
--

DROP TABLE IF EXISTS `pencatatantable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pencatatantable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no` int NOT NULL,
  `nominal` double NOT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pencatatantable`
--

LOCK TABLES `pencatatantable` WRITE;
/*!40000 ALTER TABLE `pencatatantable` DISABLE KEYS */;
/*!40000 ALTER TABLE `pencatatantable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penduduktable`
--

DROP TABLE IF EXISTS `penduduktable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `penduduktable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jumlah` int NOT NULL,
  `mutasi` enum('lahir','meninggal','datang','pindah') NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penduduktable`
--

LOCK TABLES `penduduktable` WRITE;
/*!40000 ALTER TABLE `penduduktable` DISABLE KEYS */;
/*!40000 ALTER TABLE `penduduktable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiltable`
--

DROP TABLE IF EXISTS `profiltable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiltable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img_user` varchar(255) DEFAULT NULL,
  `hp` int NOT NULL,
  `nik` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiltable`
--

LOCK TABLES `profiltable` WRITE;
/*!40000 ALTER TABLE `profiltable` DISABLE KEYS */;
/*!40000 ALTER TABLE `profiltable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `realisasitable`
--

DROP TABLE IF EXISTS `realisasitable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `realisasitable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_kegiatan` int NOT NULL,
  `kegiatan` varchar(255) NOT NULL,
  `status` enum('pengajuan','proses','selesai','gagal') NOT NULL,
  `tgl_mulai` datetime DEFAULT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `img_realisasi1` varchar(255) DEFAULT NULL,
  `img_realisasi2` varchar(255) DEFAULT NULL,
  `sumber` enum('PBP','PBK','PBH','PAD','DD','ADD') DEFAULT NULL,
  `biaya` double DEFAULT NULL,
  `tgl_selesai` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kegiatan` (`kegiatan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realisasitable`
--

LOCK TABLES `realisasitable` WRITE;
/*!40000 ALTER TABLE `realisasitable` DISABLE KEYS */;
/*!40000 ALTER TABLE `realisasitable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` enum('superadmin','admin','umum') DEFAULT 'umum',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-08 17:27:51
