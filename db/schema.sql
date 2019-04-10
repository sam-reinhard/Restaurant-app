CREATE DATABASE restaurants_db;
USE restaurants_db;

CREATE TABLE restaurants
(
    id INT AUTO_INCREMENT,
    restaurant_name VARCHAR(50),
    tried BOOLEAN,
    PRIMARY KEY(id)
);