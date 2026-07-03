CREATE TABLE IF NOT EXISTS vendors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  location VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO vendors (name, category, location)
VALUES
  ('Campus Cafe', 'Food', 'Student Center'),
  ('College Bookstore', 'Retail', 'Campus Mall'),
  ('Campus Gym', 'Wellness', 'North Building');
