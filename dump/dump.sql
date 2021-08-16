-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.35 - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for nest
CREATE DATABASE IF NOT EXISTS `nest` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nest`;

-- Dumping structure for table nest.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table nest.categories: ~0 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `title`, `created_at`, `updated_at`) VALUES
	(1, 'Sản phẩm từ sữa', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(2, 'Sữa chua', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(3, 'Phô mai', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(4, 'Sữa đặc', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(5, 'Sữa tươi', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(6, 'Bơ', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(7, 'Thực phẩm sống', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(8, 'Thịt gà', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(9, 'Thịt lợn', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(10, 'Thịt bò', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385'),
	(11, 'Thịt chó', '2021-07-29 21:04:29.388385', '2021-07-29 21:04:29.388385');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table nest.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `description` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_product_categories` (`cat_id`),
  CONSTRAINT `FK_product_categories` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table nest.product: ~0 rows (approximately)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `name`, `description`, `quantity`, `price`, `created_at`, `updated_at`, `cat_id`) VALUES
	(1, 'TH True Milk loại 1 lít', 'Sữa TH của hãng TH loại 1 lít', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 5),
	(2, 'Thịt Gà CP 500g', 'Sữa TH của hãng TH loại 1 lít', 20, 50000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 8),
	(3, 'Thịt bò CP 1kg', 'Sữa TH của hãng TH loại 1 lít', 20, 60000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 10),
	(4, 'Sữa Ông Thọ', 'Sữa TH của hãng TH loại 1 lít', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 4),
	(5, 'Sữa đặc Phương Nam', 'Loại 500ml đựng túi giấy', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 4),
	(6, 'Chân giò Vinmart', 'Chân heo trước', 20, 58000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 9),
	(7, 'Cầy tơ 7 món', 'Thịt chó phải có mắm tôm', 20, 80000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 11),
	(8, 'Bơ tươi', 'Sữa TH của hãng TH loại 1 lít', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 6),
	(9, 'Mozzarella Chéese', 'Phô mai tươi nhập khẩu Ý', 20, 65000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 3),
	(10, 'Vinamilk lốc 4 hộp', 'Vinamilk nguyên chất có đường', 20, 36000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 5),
	(11, 'Sữa chua nha đam', '4 Hộp sữa chua nha đam Vinamilk', 20, 18000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 2),
	(12, 'Cô gái Hà Lan', 'Sữa tươi cô gái Hà Lan nhưng không phải sữa tươi', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 5),
	(13, 'Ba chỉ CP 500g', 'Thịt ba chỉ CP', 20, 56000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 9),
	(14, 'Đùi gà công nghiệp', 'Đùi gà CP', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 8),
	(15, 'Bò Úc', 'Bò nhập khẩu loại 1', 20, 20000, '2021-07-29 21:11:59.900818', '2021-07-29 21:11:59.900818', 10);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- Dumping structure for table nest.relation_categories
CREATE TABLE IF NOT EXISTS `relation_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL DEFAULT '0',
  `sub_cat_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK__categories` (`cat_id`),
  KEY `FK__categories_2` (`sub_cat_id`),
  CONSTRAINT `FK__categories` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__categories_2` FOREIGN KEY (`sub_cat_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table nest.relation_categories: ~0 rows (approximately)
/*!40000 ALTER TABLE `relation_categories` DISABLE KEYS */;
INSERT INTO `relation_categories` (`id`, `cat_id`, `sub_cat_id`) VALUES
	(1, 1, 6),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4),
	(5, 1, 5),
	(6, 7, 10),
	(7, 7, 11),
	(8, 7, 9),
	(9, 7, 8);
/*!40000 ALTER TABLE `relation_categories` ENABLE KEYS */;

-- Dumping structure for table nest.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table nest.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
-- INSERT INTO `users` (`id`, `name`, `email`, `password`, `roles`, `status`, `created_at`) VALUES
-- 	(1, '', 'admin@nest.com', '$2a$10$7pl3.vjJbh4E83G4cdRT1ObEIuyppUx54ZsfaH0iLIhkciGjsEv/u', 'ADMIN', 1, '2021-07-29 12:35:10.800840');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
