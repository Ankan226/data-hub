const express = require('express');
const logger = require('./middleware/logger');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(logger);           

// Routes 
app.use('/posts', postsRouter);

// Mock Auth Endpoint (Phase 3)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const mockToken = Buffer.from(`${username}:${Date.now()}`).toString('base64');

  res.status(200).json({
    message: "Login successful",
    token: mockToken
  });
});

// Root route (sanity check)
app.get('/', (req, res) => {
  res.send("Data Hub API is running. Try /posts");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});