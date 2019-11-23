-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2019 at 09:39 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

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
  `called` tinyint(1) NOT NULL,
  `hrCalled` tinyint(1) NOT NULL,
  `interviewDate` date NOT NULL,
  `interviewTime` time NOT NULL,
  `callDate` date NOT NULL,
  `callTime` datetime NOT NULL,
  `interviewer` varchar(88) NOT NULL,
  `status` varchar(50) NOT NULL,
  `note` varchar(1000) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `participants`
--

INSERT INTO `participants` (`id`, `name`, `email`, `university`, `faculty`, `year`, `firstChoice`, `secondChoice`, `phone`, `called`, `interviewDate`, `interviewTime`, `callDate`, `callTime`, `interviewer`, `status`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 'nice', 'nice', 'nice', 'nice', 'nice', 'nice', 'nice', 'nice', 0, '2019-10-01', '10:16:00', '2019-09-26', '0000-00-00 00:00:00', 'Maryam', 'Accepted', 'nice', '2019-10-23', '2019-10-28'),
(9, 'Louis armstrong', 'test@yahoo.com', 'auc', 'business', 'first', 'web', 'raspberry', '0123456789', 1, '2019-10-27', '20:30:00', '2019-09-26', '0000-00-00 00:00:00', 'Layla', 'Blacklisted', 'nothing', '0000-00-00', '2019-10-28'),
(10, 'Maryam', 'maryamfarrag0@gmail.com', 'Cairo', 'Commerce', 'third', 'Web', 'Android', '01157366229', 1, '2019-10-10', '09:14:00', '2019-09-26', '0000-00-00 00:00:00', 'test :D', 'Called', 'no notes', '0000-00-00', '2019-10-27');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
