const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/laptops", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Dell Inspiron 15",
      cpu: "Intel Core i5",
      ram: "16GB",
      storage: "512GB SSD",
      price: 18500000
    },
    {
      id: 2,
      name: "Asus Vivobook",
      cpu: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      price: 24500000
    },
    {
      id: 3,
      name: "HP Pavilion",
      cpu: "Ryzen 5",
      ram: "8GB",
      storage: "512GB SSD",
      price: 16500000
    }
  ]);
});

/**
 * ⚠️ QUAN TRỌNG:
 * - Docker / Render sẽ inject PORT
 * - Local thì fallback 10000
 */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Laptop backend running on port", PORT);
});
