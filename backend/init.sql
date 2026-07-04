CREATE TABLE IF NOT EXISTS vendors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  location VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO vendors (name, category, location)
SELECT 'Campus Cafe', 'Food', 'Student Center'
WHERE NOT EXISTS (SELECT 1 FROM vendors WHERE name = 'Campus Cafe');

INSERT INTO vendors (name, category, location)
SELECT 'College Bookstore', 'Retail', 'Campus Mall'
WHERE NOT EXISTS (SELECT 1 FROM vendors WHERE name = 'College Bookstore');

INSERT INTO vendors (name, category, location)
SELECT 'Campus Gym', 'Wellness', 'North Building'
WHERE NOT EXISTS (SELECT 1 FROM vendors WHERE name = 'Campus Gym');
