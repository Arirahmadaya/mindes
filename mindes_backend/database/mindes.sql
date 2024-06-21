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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendatable`
--

LOCK TABLES `agendatable` WRITE;
/*!40000 ALTER TABLE `agendatable` DISABLE KEYS */;
INSERT INTO `agendatable` VALUES (1,'2024-06-12','11:00:00','Aula','Senin','Rapat Koordinasi','Pertemuan mingguan','publish'),(2,'2024-06-12','11:00:00','Aula','Senin','Rapat Koordinasi','Pertemuan mingguan','publish'),(4,'2024-07-20','10:00:00','Pendopo Kelurahan Kalinyamat Kulon','Minggu','Posyandu Remaja','Posyandu dilaksanakan di ','publish'),(5,'2024-06-20','10:00:00','Test','Selasa','Test','Test','gagal'),(6,'2024-06-20','10:00:00','Test','Selasa','Test','Test','publish');
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
  `tgl` date DEFAULT NULL,
  `judul` varchar(255) NOT NULL,
  `artikel` text NOT NULL,
  `status` enum('publish','proses','gagal') DEFAULT NULL,
  `img_berita` varchar(255) DEFAULT NULL,
  `id_kategori` int NOT NULL,
  PRIMARY KEY (`id_berita`),
  UNIQUE KEY `judul` (`judul`),
  KEY `id_kategori` (`id_kategori`),
  CONSTRAINT `beritatable_ibfk_2` FOREIGN KEY (`id_kategori`) REFERENCES `kategoritable` (`id_kategori`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beritatable`
--

LOCK TABLES `beritatable` WRITE;
/*!40000 ALTER TABLE `beritatable` DISABLE KEYS */;
INSERT INTO `beritatable` VALUES (1,'2024-06-26','Idul Adha','','publish','',4),(2,'2024-06-19','Orang warna pink','','proses','',4),(3,'2024-06-19','Anime kuning','Kompas.com - Berita Indonesia terkini terpercaya, dan terpopuler, politik, ekonomi, tekno, otomotif, dan olahraga ditulis lengkap dan akurat.','publish','',4),(7,'2024-06-19','Testing berita with image','<p>&nbsp; &nbsp; &nbsp; console.log(\"Data yang dikirim:\", formData);</p><p>&nbsp; &nbsp; &nbsp; navigate(\"/admin/agenda\"); &nbsp; &nbsp; &nbsp;console.log(\"Data yang dikirim:\", formData);</p><p>&nbsp; &nbsp; &nbsp; navigate(\"/admin/agenda\"); &nbsp; &nbsp; &nbsp;console.log(\"Data yang dikirim:\", formData);</p><p>&nbsp; &nbsp; &nbsp; navigate(\"/admin/agenda\"); &nbsp; &nbsp; &nbsp;console.log(\"Data yang dikirim:\", formData);</p><p>&nbsp; &nbsp; &nbsp; navigate(\"/admin/agenda\"); &nbsp; &nbsp; &nbsp;console.log(\"Data yang dikirim:\", formData);</p><p>&nbsp; &nbsp; &nbsp; navigate(\"/admin/agenda\");</p>','proses',NULL,4),(8,'2024-06-19','Testing 2','<p>Berapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.6 hours agoBerapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.6 hours agoBerapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.6 hours agoBerapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.6 hours ago</p>','proses',NULL,4),(9,'2024-06-20','Testing 3','<p>Berapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.6 hours ago</p>','proses',NULL,4),(10,'2024-06-19','AKu anak sehat mentalku rusak','<p>&nbsp; const handleSubmit = async (<i>e</i>) =&gt; {</p><p>&nbsp; &nbsp;&nbsp;<i>e</i>.preventDefault();</p><p>&nbsp; &nbsp; try {</p><p>&nbsp; &nbsp; &nbsp; await axios.post(\"http://localhost:3000/berita/create\", formData);</p><p>&nbsp; &nbsp; &nbsp; console.log(\"Data yang dikirim:\", formData);</p><p>&nbsp; &nbsp; &nbsp; navigate(\"/admin/berita\");</p><p>&nbsp; &nbsp; } catch (error) {</p><p>&nbsp; &nbsp; &nbsp; console.log(error);</p><p>&nbsp; &nbsp; }</p><p>&nbsp; };</p>','proses',NULL,4),(11,'2024-06-19','Testing 4','<p>Berapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.</p>','proses','/img_berita/img_berita-1718705251199-110615449.jpg',4),(12,'2024-06-19','Meme Patrick','<p>Berapa hari Idul Adha 2024?</p><p>&nbsp;</p><p>Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal <strong>17 Juni 2024</strong>. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.</p>','proses','/img_berita/img_berita-1718705974483-420686791.jpg',4),(13,'2024-06-19','Meme Patrick 2','<ol><li>Object<ol><li><strong>artikel</strong>: \"&lt;p&gt;Berapa hari Idul Adha 2024?&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p&gt;Idul Adha 2024 diperingati pada 10 Zulhijah 1445 Ha atau tepatnya tanggal &lt;strong&gt;17 Juni 2024&lt;/strong&gt;. Dengan demikian, Hari Tasyrik Idul Adha 1445 H/2024 M atau tiga hari setelah Idul Adha 2024 jatuh pada: Selasa, 18 Juni 2024 atau 11 Zulhijah 1445 H.&lt;/p&gt;\"</li></ol></li></ol>','gagal','/img_berita/img_berita-1718706049566-641199926.jpg',4),(14,'2024-06-20','Testing 5','<p>Testing 5</p>','proses','/img_berita/img_berita-1718763467078-990509018.jpg',4),(15,'2024-06-27','TEsting 22','<p>Foto News · Musim Panas Bikin Warga India Antre Ambil Air dari Keran Umum · Pria di Matraman Dibacok Saat Bubarkan Bentrokan, Pelaku Ditangkap · Yuk Kenalan&nbsp;...</p>','publish','/img_berita/img_berita-1718812911209-180956068.jpg',4),(16,'2024-06-20','Test 1','<p>Test 1</p>','proses','/img_berita/img_berita-1718813236124-371913052.jpg',4);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategoritable`
--

LOCK TABLES `kategoritable` WRITE;
/*!40000 ALTER TABLE `kategoritable` DISABLE KEYS */;
INSERT INTO `kategoritable` VALUES (4,'Hiburan');
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
  `id_realisasi` int NOT NULL,
  `id_akun` int NOT NULL,
  `no` int NOT NULL,
  `nominal` double NOT NULL,
  `subtotal` double NOT NULL DEFAULT '0',
  `uraian` varchar(255) DEFAULT NULL,
  `kuantitas` int NOT NULL,
  PRIMARY KEY (`id_pencatatan`),
  KEY `id_realisasi` (`id_realisasi`),
  KEY `id_akun` (`id_akun`),
  CONSTRAINT `pencatatantable_ibfk_1` FOREIGN KEY (`id_realisasi`) REFERENCES `realisasitable` (`id_realisasi`),
  CONSTRAINT `pencatatantable_ibfk_2` FOREIGN KEY (`id_akun`) REFERENCES `akuntable` (`id_akun`)
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
  `id_penduduk` int NOT NULL AUTO_INCREMENT,
  `jumlah` int NOT NULL,
  `mutasi` enum('lahir','meninggal','datang','pindah') NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `tgl` date DEFAULT NULL,
  PRIMARY KEY (`id_penduduk`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penduduktable`
--

LOCK TABLES `penduduktable` WRITE;
/*!40000 ALTER TABLE `penduduktable` DISABLE KEYS */;
INSERT INTO `penduduktable` VALUES (2,2,'meninggal','A.n Rajawali meninggal dunia',NULL),(3,1,'meninggal','Longsor','2024-05-26');
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
  `img_realisasi1` blob,
  `img_realisasi2` blob,
  `sumber` enum('PBP','PBK','PBH','PAD','DD','ADD') DEFAULT NULL,
  `pembiayaan` double DEFAULT NULL,
  `tgl_mulai` date DEFAULT NULL,
  `tgl_selesai` date DEFAULT NULL,
  PRIMARY KEY (`id_realisasi`),
  UNIQUE KEY `kode_kegiatan` (`kode_kegiatan`),
  KEY `id_bidang` (`id_bidang`),
  CONSTRAINT `realisasitable_ibfk_1` FOREIGN KEY (`id_bidang`) REFERENCES `bidangtable` (`id_bidang`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realisasitable`
--

LOCK TABLES `realisasitable` WRITE;
/*!40000 ALTER TABLE `realisasitable` DISABLE KEYS */;
INSERT INTO `realisasitable` VALUES (2,1,1001,'Contoh Kegiatan','Contoh Output','pengajuan','Contoh Lokasi',_binary 'path/to/image1.jpg',_binary 'path/to/image2.jpg','PAD',1000000,'2024-06-12','2024-06-20'),(3,8,1234,'Test','Test','pengajuan','Test',_binary '/img_realisasi/img_realisasi1-1718882971285-440725879.jpg',NULL,'PBP',10000000,'2024-06-21','2024-06-23'),(7,6,1234567,'Test','Test','pengajuan','Test',_binary '/img_realisasi/img_realisasi1-1718899994000-316217499.jpg',NULL,'PBP',10000000,'2024-06-21','2024-06-25'),(8,9,564739,'drtyuiojp','sdxtyui','selesai','fghjbk',_binary '/img_realisasi/img_realisasi1-1718901680343-477218487.jpg',NULL,'PBH',234567,'2024-06-20','2024-06-26'),(9,13,9654,'Ooiuygbnmkiop','oiuyt','selesai','Kelurahan Kalinyamat Kulon',_binary '/img_realisasi/img_realisasi1-1718902018231-436470422.jpg',_binary '/img_realisasi/img_realisasi2-1718902018245-587392389.jpg','PBH',9545678,'2024-06-13','2024-06-25'),(10,9,456789,'Test Juamt','Tets','gagal','Jalan Ki Hajar Dewantoro Rt01 Rw02 Gang 14, Kalinyamat Kulon',_binary '/img_realisasi/img_realisasi1-1718902480939-718853266.png',_binary '/img_realisasi/img_realisasi2-1718902480944-798994289.png','ADD',98765,'2024-06-21','2024-06-24');
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
  `roles` enum('superadmin','admin','umum') NOT NULL DEFAULT 'umum',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (1,'massayu@gmail.com','massayu','P@55word','superadmin'),(2,'ari.updated@gmail.com','Ari updated','NewP@55word','admin'),(3,'raja@gmail.com','Raja','P@55word','umum'),(4,'halo@halo','halo','halo','admin'),(6,'massayu18@gmail.com','Test1','P@55word','umum'),(7,'testuser@example.com','testuser','$2b$12$j.CSLxPTy6lD8Cn7U2YBcOYcaM7u1HmtlIlX4aZ.1GxFBssDZoiLa','umum'),(9,'testuser2@example.com','testuser2','$2b$10$oDtH9nkzeVhaJezzGjmToOM/8wLf5wESlAQFLwgIRYXplIpvrzl2W','umum'),(10,'testuser3@example.com','testuser3','$2b$10$ZDyXL5dai/Ij83mdBVVizeyD8BirZHE8LupBsOpNaDtlhVYkJzFDm','umum'),(11,'admin@gmail.com','n_sarijati','P@55word','admin'),(12,'admin@gmail.com ','massayu','P@55word','admin'),(13,'jacob@gmail.com','jacob','P@55word','umum'),(14,'marina@gmail.com','marina','P@55word','umum'),(15,'papaw@gmail.com','papaw','P@55word','umum'),(16,'orange@gmail.com','orange','P@55word','umum'),(17,'manggo@gmail.com','manggo','P@55word','umum'),(18,'apple@gmail.com','apple','P@55word','umum'),(19,'starfruit@gmail.com','starfruit','$2b$12$OgGu4WVzoKtygxu4Rx63W.elyggx.L5duaGiDgT2Qtz5t83ly14GC','umum'),(20,'strawberry@gmail.com','strawberry','$2b$12$rV/F6X6HWtXW3t8v7CITUuTE8ED3x/idjqReqFwrlxIn3gNp6BGGG','umum'),(21,'banana@gmail.com','banana','$2b$12$xNEJ2de3XbN/TbVSrwrrjuGQLiBBGlLEq3MgwabhrQvqgdQ0XzTn2','umum'),(26,'blue@gmail.com','blue','$2b$12$HPAUTb5XtvMp8BKgrOtnH.k1fQAkY0GAHINKNIkXvYQ/xvyguU6yO','umum');
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

-- Dump completed on 2024-06-21  1:50:47
