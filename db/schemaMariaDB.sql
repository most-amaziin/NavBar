CREATE DATABASE [IF NOT EXISTS] SDC;

USE SDC;

CREATE TABLE `Desc` (
  productID INT PRIMARY KEY,
  name CHAR(35),
  price CHAR(6),
  bulletOne CHAR(70),
  bulletTwo CHAR(70),
  bulletThree CHAR(70),
  sellerName CHAR(35),
  description CHAR(255)
);