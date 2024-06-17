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
  `id_agenda` int NOT NULL AUTO_INCREMENT,
  `tgl` date DEFAULT NULL,
  `jam` time DEFAULT NULL,
  `tempat` varchar(255) NOT NULL,
  `hari` enum('Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu') DEFAULT NULL,
  `kegiatan` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `status` enum('publish','proses','gagal') DEFAULT NULL,
  PRIMARY KEY (`id_agenda`)
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
  `id_akun` int NOT NULL AUTO_INCREMENT,
  `kode` int NOT NULL,
  `uraian` varchar(255) NOT NULL,
  PRIMARY KEY (`id_akun`),
  UNIQUE KEY `kode` (`kode`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `akuntable`
--

LOCK TABLES `akuntable` WRITE;
/*!40000 ALTER TABLE `akuntable` DISABLE KEYS */;
INSERT INTO `akuntable` VALUES (2,534,'Belanja Modal Gedung, Bangunan dan Taman'),(3,533,'Belanja Modal Kendaraan'),(6,535,'Test');
/*!40000 ALTER TABLE `akuntable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beritatable`
--

DROP TABLE IF EXISTS `beritatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beritatable` (
  `id_berita` int NOT NULL AUTO_INCREMENT,
  `tgl` datetime NOT NULL,
  `judul` varchar(255) NOT NULL,
  `artikel` text NOT NULL,
  `status` enum('publish','proses','gagal') DEFAULT NULL,
  `img_berita` varchar(255) DEFAULT NULL,
  `id_kategori` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_berita`),
  UNIQUE KEY `judul` (`judul`),
  KEY `id_user` (`id_user`),
  KEY `id_kategori` (`id_kategori`),
  CONSTRAINT `beritatable_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usertable` (`id_user`),
  CONSTRAINT `beritatable_ibfk_2` FOREIGN KEY (`id_kategori`) REFERENCES `kategoritable` (`id_kategori`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beritatable`
--

LOCK TABLES `beritatable` WRITE;
/*!40000 ALTER TABLE `beritatable` DISABLE KEYS */;
INSERT INTO `beritatable` VALUES (2,'2024-06-12 00:00:00','Berita Baru','Ini adalah isi dari berita baru.','publish','path/to/image.jpg',2,1),(11,'2024-06-12 00:00:00','Berita Baru update','Ini adalah isi dari berita baru yang diupdate.','publish','path/to/image.jpg',2,1);
/*!40000 ALTER TABLE `beritatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidangtable`
--

DROP TABLE IF EXISTS `bidangtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidangtable` (
  `id_bidang` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`id_bidang`),
  KEY `parent_id` (`parent_id`),
  CONSTRAINT `bidangtable_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `bidangtable` (`id_bidang`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidangtable`
--

LOCK TABLES `bidangtable` WRITE;
/*!40000 ALTER TABLE `bidangtable` DISABLE KEYS */;
INSERT INTO `bidangtable` VALUES (1,'BIDANG PENYELENGGARAAN PEMERINTAHAN DESA',NULL),(2,'BIDANG PENANGGULANGAN BENCANA, DARURAT DAN MENDESAK DESA',NULL),(3,'BIDANG PEMBINAAN KEMASYARAKATAN',NULL),(4,'BIDANG PEMBERDAYAAN MASYARAKAT',NULL),(5,'BIDANG PELAKSANAAN PEMBANGUNAN DESA',NULL),(6,'Penyelenggaraan Belanja Siltap, Tunjangan dan Operasional Pemerintah Desa',1),(7,'Penyediaan Sarana Prasarana Pemerintah Desa',1),(8,'Pengelolaan Administrasi Kependudukan, Pencatatan Sipil, Statistik dan Kearsipan',1),(9,'Penyelenggaraan Tata Praja Pemerintahan, Perencanaan, Keuangan dan Pelaporan',1),(10,'Sub Bidang Pendidikan',5),(11,'Sub Bidang Kesehatan',5),(13,'Sub Bidang Kawasan Pemukiman',5),(14,'Sub Bidang Kebudayaan dan Keagamaan',3),(15,'Sub Bidang Kepemudaan dan Olahraga',3),(16,'Sub Bidang Kelembagaan Masyarakat',3),(17,'Sub Bidang Pertanian dan Peternakan',4),(18,'Sub Bidang Peningkatan Kapasitas Aparatur Desa',4),(19,'Sub Bidang Pemberdayaan Perempuan, Perlindungan Anak dan Keluarga',4),(20,'Sub Bidang Penanggulangan Bencana',2),(21,'Sub Bidang Keadaan Mendesak',2),(22,'Sub Bidang Pekerjaan Umum dan Penataan Ruang',5),(23,'Test',1);
/*!40000 ALTER TABLE `bidangtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategoritable`
--

DROP TABLE IF EXISTS `kategoritable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kategoritable` (
  `id_kategori` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kategori`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategoritable`
--

LOCK TABLES `kategoritable` WRITE;
/*!40000 ALTER TABLE `kategoritable` DISABLE KEYS */;
INSERT INTO `kategoritable` VALUES (2,'kesehatan'),(4,'Hiburan'),(5,'test');
/*!40000 ALTER TABLE `kategoritable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pencatatantable`
--

DROP TABLE IF EXISTS `pencatatantable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pencatatantable` (
  `id_pencatatan` int NOT NULL AUTO_INCREMENT,
  `no` int NOT NULL,
  `kode` int NOT NULL,
  `nominal` double NOT NULL,
  `total` double NOT NULL DEFAULT '0',
  `id_realisasi` int NOT NULL,
  PRIMARY KEY (`id_pencatatan`),
  KEY `id_realisasi` (`id_realisasi`),
  KEY `kode` (`kode`),
  CONSTRAINT `pencatatantable_ibfk_1` FOREIGN KEY (`id_realisasi`) REFERENCES `realisasitable` (`id_realisasi`),
  CONSTRAINT `pencatatantable_ibfk_2` FOREIGN KEY (`kode`) REFERENCES `akuntable` (`id_akun`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pencatatantable`
--

LOCK TABLES `pencatatantable` WRITE;
/*!40000 ALTER TABLE `pencatatantable` DISABLE KEYS */;
INSERT INTO `pencatatantable` VALUES (12,2,2,25000,25000,2);
/*!40000 ALTER TABLE `pencatatantable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penduduktable`
--

DROP TABLE IF EXISTS `penduduktable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `penduduktable` (
  `id_penduduk` int NOT NULL AUTO_INCREMENT,
  `jumlah` int NOT NULL,
  `mutasi` enum('lahir','meninggal','datang','pindah') NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `tgl` date DEFAULT NULL,
  PRIMARY KEY (`id_penduduk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penduduktable`
--

LOCK TABLES `penduduktable` WRITE;
/*!40000 ALTER TABLE `penduduktable` DISABLE KEYS */;
INSERT INTO `penduduktable` VALUES (2,2,'meninggal','A.n Rajawali meninggal dunia',NULL);
/*!40000 ALTER TABLE `penduduktable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiltable`
--

DROP TABLE IF EXISTS `profiltable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiltable` (
  `id_profil` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `img_user` varchar(255) DEFAULT NULL,
  `hp` varchar(20) NOT NULL,
  `nik` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_profil`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `profiltable_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usertable` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiltable`
--

LOCK TABLES `profiltable` WRITE;
/*!40000 ALTER TABLE `profiltable` DISABLE KEYS */;
INSERT INTO `profiltable` VALUES (1,1,'link_gambar','08123456789','1234567890123456');
/*!40000 ALTER TABLE `profiltable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `realisasitable`
--

DROP TABLE IF EXISTS `realisasitable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `realisasitable` (
  `id_realisasi` int NOT NULL AUTO_INCREMENT,
  `id_bidang` int NOT NULL,
  `kode_kegiatan` int NOT NULL,
  `kegiatan` varchar(255) NOT NULL,
  `output` varchar(255) DEFAULT NULL,
  `status` enum('pengajuan','proses','selesai','gagal') NOT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `img_realisasi1` varchar(255) DEFAULT NULL,
  `img_realisasi2` varchar(255) DEFAULT NULL,
  `sumber` enum('PBP','PBK','PBH','PAD','DD','ADD') DEFAULT NULL,
  `pembiayaan` double DEFAULT NULL,
  `tgl_mulai` date DEFAULT NULL,
  `tgl_selesai` date DEFAULT NULL,
  PRIMARY KEY (`id_realisasi`),
  UNIQUE KEY `kode_kegiatan` (`kode_kegiatan`),
  KEY `id_bidang` (`id_bidang`),
  CONSTRAINT `realisasitable_ibfk_1` FOREIGN KEY (`id_bidang`) REFERENCES `bidangtable` (`id_bidang`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realisasitable`
--

LOCK TABLES `realisasitable` WRITE;
/*!40000 ALTER TABLE `realisasitable` DISABLE KEYS */;
INSERT INTO `realisasitable` VALUES (2,1,1001,'Contoh Kegiatan','Contoh Output','pengajuan','Contoh Lokasi','path/to/image1.jpg','path/to/image2.jpg','PAD',1000000,'2024-06-12','2024-06-20');
/*!40000 ALTER TABLE `realisasitable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` enum('superadmin','admin','umum') DEFAULT 'umum',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (1,'massayu@gmail.com','massayu','P@55word','superadmin'),(2,'ari.updated@gmail.com','Ari updated','NewP@55word','admin'),(3,'raja@gmail.com','Raja','P@55word','umum'),(4,'halo@halo','halo','halo','admin'),(6,'massayu18@gmail.com','Test1','P@55word','umum'),(7,'testuser@example.com','testuser','$2b$12$j.CSLxPTy6lD8Cn7U2YBcOYcaM7u1HmtlIlX4aZ.1GxFBssDZoiLa','umum'),(9,'testuser2@example.com','testuser2','$2b$10$oDtH9nkzeVhaJezzGjmToOM/8wLf5wESlAQFLwgIRYXplIpvrzl2W','umum'),(10,'testuser3@example.com','testuser3','$2b$10$ZDyXL5dai/Ij83mdBVVizeyD8BirZHE8LupBsOpNaDtlhVYkJzFDm','umum'),(11,'admin@gmail.com','n_sarijati','P@55word','admin'),(12,'admin@gmail.com ','massayu','P@55word','admin'),(13,'jacob@gmail.com','jacob','P@55word','umum'),(14,'marina@gmail.com','marina','P@55word','umum'),(15,'papaw@gmail.com','papaw','P@55word','umum'),(16,'orange@gmail.com','orange','P@55word','umum'),(17,'manggo@gmail.com','manggo','P@55word','umum'),(18,'apple@gmail.com','apple','P@55word','umum'),(19,'starfruit@gmail.com','starfruit','$2b$12$OgGu4WVzoKtygxu4Rx63W.elyggx.L5duaGiDgT2Qtz5t83ly14GC','umum'),(20,'strawberry@gmail.com','strawberry','$2b$12$rV/F6X6HWtXW3t8v7CITUuTE8ED3x/idjqReqFwrlxIn3gNp6BGGG','umum'),(21,'banana@gmail.com','banana','$2b$12$xNEJ2de3XbN/TbVSrwrrjuGQLiBBGlLEq3MgwabhrQvqgdQ0XzTn2','umum');
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

-- Dump completed on 2024-06-17 14:16:57
