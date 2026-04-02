const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Online Book Store</title>

    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
        background: #0f172a;
        color: white;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40px;
        background: #020617;
      }

      h1 {
        margin: 0;
        color: #38bdf8;
      }

      .cart {
        background: #38bdf8;
        padding: 10px 15px;
        border-radius: 8px;
        color: black;
        font-weight: bold;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
      }

      .card {
        background: #1e293b;
        width: 250px;
        margin: 15px;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 15px rgba(56,189,248,0.3);
        transition: 0.3s;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .title {
        font-size: 18px;
        font-weight: bold;
      }

      .desc {
        font-size: 14px;
        margin: 10px 0;
        opacity: 0.8;
      }

      button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 8px;
        background: #38bdf8;
        color: black;
        cursor: pointer;
        font-weight: bold;
      }

      button:hover {
        background: #0ea5e9;
      }

      footer {
        text-align: center;
        padding: 15px;
        opacity: 0.6;
      }
    </style>

  </head>

  <body>

    <header>
      <h1>📚 Online Book Store</h1>
      <div class="cart">🛒 Cart: <span id="cart-count">0</span></div>
    </header>

    <div class="container">

      <div class="card">
        <div class="title">Clean Code</div>
        <div class="desc">A handbook of software craftsmanship.</div>
        <button onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <div class="title">Atomic Habits</div>
        <div class="desc">Build good habits effectively.</div>
        <button onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <div class="title">The Alchemist</div>
        <div class="desc">A journey of dreams and destiny.</div>
        <button onclick="addToCart()">Add to Cart</button>
      </div>

    </div>

    <footer>
      © 2026 DevOps Kubernetes Project 🚀
    </footer>

    <script>
      let count = 0;

      function addToCart() {
        count++;
        document.getElementById('cart-count').innerText = count;
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
