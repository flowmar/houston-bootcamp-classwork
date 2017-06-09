-- Create syntax for 'actors'

CREATE DATABASE IF NOT EXISTS seinfeld_db;

USE seinfeld_db;

CREATE TABLE IF NOT EXISTS `actors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `coolness_points` int(11) NOT NULL,
  `attitude` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

insert into actors (name, coolness_points, attitude) 
values ("Jerry Seinfeld", 98, "chill"), 
("Tina Fey", 100, "Generally Awesome"), 
("Kimmy Schmidt", 65, "Quirky"), 
("Steve Carrell", 120, "That's What She Said");