-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: localhost
-- Čas generovania: St 30.Mar 2022, 17:27
-- Verzia serveru: 10.3.29-MariaDB
-- Verzia PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `ghettoAnime`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `url` varchar(256) NOT NULL,
  `title` varchar(64) NOT NULL,
  `episode` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL,
  `anime` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `list`
--

INSERT INTO `list` (`id`, `url`, `title`, `episode`, `name`, `anime`) VALUES
(1, 'https://cdn.discordapp.com/attachments/816715668421607505/947547266154131506/shaman-king-2021.png', 'Shaman king(2021)', 'Episode 1', 'Speak Slowly', 'https://animedao.to/anime/shaman-king-2021/');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `user`
--

INSERT INTO `user` (`id`, `mail`, `name`) VALUES
(1, 'afasshsghhfdhfgshf', 'afaf'),
(2, 'afhf', 'afaf');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `user_sequence`
--

CREATE TABLE `user_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `user_sequence`
--

INSERT INTO `user_sequence` (`next_val`) VALUES
(3),
(1);

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pre tabuľku `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
