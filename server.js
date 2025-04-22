const express = require('express');
const path = require('path');
const app = express();



// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Quotes endpoint
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Whoever is happy will make others happy too. – Anne Frank",
  "You only live once, but if you do it right, once is enough. – Mae West"
];

// API route
app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// Start server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
