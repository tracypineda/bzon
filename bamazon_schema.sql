DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    primary key(item_id) 
)
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jenga", "games", 10.98, 25),
("monopoly", "games",11.95,25),
("candy land", "games", 9.99, 20),
("gone with the wind", "movie", 20.00, 15),
("frozen", "movie", 15.99, 25),
("scarf", "outerwear", 10.00, 35),
("mittens", "outerwear", 11.00, 36),
("jacket", "outerwear", 25.00, 100),
("SPF 30 Natural Sunscreen", "Skin Care", 12.33, 10),
("Aloe Vera Gel", "Skin Care", 12.95, 65);
("Scientific Calculator", "Office Supplies", 17.98, 100 ) ,
("Brother P-touch Label Maker", "Office Supplies", 34.00, 43);

SELECT *FROM products;