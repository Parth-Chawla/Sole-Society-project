-- Sneakers database schema

CREATE TABLE IF NOT EXISTS brands (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS sneakers (
  id INTEGER PRIMARY KEY,
  brand_id INTEGER NOT NULL,
  name VARCHAR(150) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(500),
  description TEXT,
  stock INTEGER NOT NULL DEFAULT 6,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_sneakers_brand FOREIGN KEY (brand_id) REFERENCES brands(id)
);


