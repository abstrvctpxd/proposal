CREATE DATABASE IF NOT EXISTS unicryptopay;
USE unicryptopay;

CREATE TABLE IF NOT EXISTS vendors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT NULL,
  location VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO vendors (name, category, location)
VALUES
  ('Campus Cafe', 'Food', 'Student Center'),
  ('College Bookstore', 'Retail', 'Campus Mall'),
  ('Campus Gym', 'Wellness', 'North Building');
