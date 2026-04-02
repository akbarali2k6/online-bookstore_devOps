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
        font-family: Arial, sans-serif;
        background: linear-gradient(to right, #1e3c72, #2a5298);
        color: white;
      }

      header {
        text-align: center;
        padding: 30px;
        background: rgba(0,0,0,0.3);
      }

      h1 {
        margin: 0;
        font-size: 40px;
      }

      p {
        margin-top: 10px;
        font-size: 18px;
        opacity: 0.9;
      }

      .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
      }

      .card {
        background: white;
        color: black;
        width: 250px;
        margin: 15px;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        transition: transform 0.3s;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .book-title {
        font-size: 20px;
        font-weight: bold;
      }

      .book-desc {
        font-size: 14px;
        margin: 10px 0;
      }

      button {
        background: #2a5298;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
      }

      button:hover {
        background: #1e3c72;
      }

      footer {
        text-align: center;
        padding: 15px;
        margin-top: 20px;
        font-size: 14px;
        opacity: 0.8;
      }
    </style>
  </head>

  <body>

    <header>
      <h1>📚 Online Book Store</h1>
      <p>Your one-stop destination for amazing books across all genres.</p>
    </header>

    <div class="container">

      <div class="card">
        <div class="book-title">Clean Code</div>
        <div class="book-desc">A handbook of agile software craftsmanship.</div>
        <button>Buy Now</button>
      </div>

      <div class="card">
        <div class="book-title">Atomic Habits</div>
        <div class="book-desc">Build good habits and break bad ones effectively.</div>
        <button>Buy Now</button>
      </div>

      <div class="card">
        <div class="book-title">The Alchemist</div>
        <div class="book-desc">A journey of self-discovery and dreams.</div>
        <button>Buy Now</button>
      </div>

    </div>

    <footer>
      © 2026 Online Book Store | DevOps Project 🚀
    </footer>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
