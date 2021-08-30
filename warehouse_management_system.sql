-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Aug 30, 2021 at 07:28 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `Stock_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Stock_Count` int(11) NOT NULL,
  `Stock_Date` date NOT NULL,
  `Item_ID` int(11) NOT NULL,
  PRIMARY KEY (`Stock_ID`),
  KEY `Item_ID` (`Item_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`Stock_ID`, `Stock_Count`, `Stock_Date`, `Item_ID`) VALUES
(1, 50, '2020-08-30', 1),
(2, 150, '2020-08-30', 2);

-- --------------------------------------------------------

--
-- Table structure for table `stock_store_store`
--

DROP TABLE IF EXISTS `stock_store_store`;
CREATE TABLE IF NOT EXISTS `stock_store_store` (
  `Stock_ID` int(11) NOT NULL,
  `Store_ID` int(11) NOT NULL,
  PRIMARY KEY (`Stock_ID`,`Store_ID`),
  KEY `Store_ID` (`Store_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock_store_store`
--

INSERT INTO `stock_store_store` (`Stock_ID`, `Store_ID`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `Store_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Store_Location` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Store_Capacity` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Store_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`Store_ID`, `Store_Location`, `Store_Capacity`) VALUES
(1, 'Colombo,Sri Lanka', '2000'),
(2, 'Galle,Sri Lanka', '1500'),
(3, 'Kandy,Sri Lanka', '1000'),
(4, 'Anuradhapura,Sri Lanka', '1500'),
(5, 'Jaffna,Sri Lanka', '1000');

-- --------------------------------------------------------

--
-- Table structure for table `storeitem_store_store`
--

DROP TABLE IF EXISTS `storeitem_store_store`;
CREATE TABLE IF NOT EXISTS `storeitem_store_store` (
  `Item_ID` int(11) NOT NULL,
  `Store_ID` int(11) NOT NULL,
  PRIMARY KEY (`Item_ID`,`Store_ID`),
  KEY `Store_ID` (`Store_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `storeitem_store_store`
--

INSERT INTO `storeitem_store_store` (`Item_ID`, `Store_ID`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `store_item`
--

DROP TABLE IF EXISTS `store_item`;
CREATE TABLE IF NOT EXISTS `store_item` (
  `Item_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Item_Name` varchar(512) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Item_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store_item`
--

INSERT INTO `store_item` (`Item_ID`, `Item_Name`) VALUES
(1, 'Cement'),
(2, 'Nuts and Bolts'),
(3, 'Paints'),
(4, 'Plastic Rope'),
(5, 'Timber');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `store_item` (`Item_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `stock_store_store`
--
ALTER TABLE `stock_store_store`
  ADD CONSTRAINT `stock_store_store_ibfk_1` FOREIGN KEY (`Stock_ID`) REFERENCES `stock` (`Stock_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `stock_store_store_ibfk_2` FOREIGN KEY (`Store_ID`) REFERENCES `store` (`Store_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `storeitem_store_store`
--
ALTER TABLE `storeitem_store_store`
  ADD CONSTRAINT `storeitem_store_store_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `store_item` (`Item_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `storeitem_store_store_ibfk_2` FOREIGN KEY (`Store_ID`) REFERENCES `store` (`Store_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
