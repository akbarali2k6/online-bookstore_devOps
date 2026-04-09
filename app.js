const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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
        padding: 20px 40px;
        background: #020617;
      }

      h1 {
        margin: 0;
        color: #38bdf8;
      }

      .cart {
        background: #38bdf8;
        padding: 10px;
        border-radius: 8px;
        color: black;
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
      }

      button {
        width: 100%;
        padding: 10px;
        background: #38bdf8;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>

    <header>
      <h1>📚 Online Book Store</h1>
      <div class="cart">🛒 Cart: <span id="count">0</span></div>
    </header>

    <div class="container">
      <div class="card">
        <h3>Clean Code</h3>
        <p>Software craftsmanship guide</p>
        <button onclick="add()">Add</button>
      </div>

      <div class="card">
        <h3>Atomic Habits</h3>
        <p>Build good habits</p>
        <button onclick="add()">Add</button>
      </div>
    </div>

    <script>
      let c = 0;
      function add() {
        c++;
        document.getElementById("count").innerText = c;
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
