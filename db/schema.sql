-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

SELECT `category`.`category_id`, `category`.`category_name`, `products`.`product_id` AS `products.product_id`, `products`.`product_name` AS `products.product_name`, `products`.`price` AS `products.price`, `products`.`stock` AS `products.stock`, `products`.`category_id` AS `products.category_id`, `products`.`category_category_id` AS `products.categoryCategoryId` FROM `category` AS `category` LEFT OUTER JOIN `product` AS `products` ON `category`.`category_id` = `products`.`category_id`;