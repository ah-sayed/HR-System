-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2019 at 07:52 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `participants`
--

CREATE TABLE `participants` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `university` varchar(128) NOT NULL,
  `faculty` varchar(128) NOT NULL,
  `year` varchar(128) NOT NULL,
  `firstChoice` varchar(128) NOT NULL,
  `secondChoice` varchar(128) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `interviewDate` date NOT NULL,
  `interviewTime` time NOT NULL,
  `callDate` date NOT NULL,
  `callTime` time NOT NULL,
  `interviewer` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `note` varchar(1000) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `participants`
--

INSERT INTO `participants` (`id`, `name`, `email`, `university`, `faculty`, `year`, `firstChoice`, `secondChoice`, `phone`, `interviewDate`, `interviewTime`, `callDate`, `callTime`, `interviewer`, `status`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 'nice', 'nice', 'nice', 'nice', 'nice', 'nice', 'nice', 'nice', '2019-11-24', '11:23:34', '2019-09-25', '19:47:22', 5, 2, 'nice', '2019-10-23', '2019-10-26'),
(9, '', '', '', '', '', '', '', '', '0000-00-00', '00:00:00', '0000-00-00', '00:00:00', 0, 4, '', '0000-00-00', '2019-10-25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `participants`
--
ALTER TABLE `participants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `participants`
--
ALTER TABLE `participants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
