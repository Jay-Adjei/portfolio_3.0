const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Path to the JSON file
const DATA_FILE = './blogData.json';

// Utility function to read JSON data
function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const rawData = fs.readFileSync(DATA_FILE);
  return JSON.parse(rawData);
}

// Utility function to write JSON data
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Get blog post data by slug
app.get('/api/blog/:slug', (req, res) => {
  const { slug } = req.params;
  const data = readData();
  const post = data.find((item) => item.slug === slug);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
});

// Increment view count for a blog post
app.post('/api/blog/:slug/view', (req, res) => {
  const { slug } = req.params;
  const data = readData();
  const post = data.find((item) => item.slug === slug);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  post.views = (post.views || 0) + 1;
  writeData(data);
  res.json({ message: 'View count updated', views: post.views });
});

// Increment like count for a blog post
app.post('/api/blog/:slug/like', (req, res) => {
  const { slug } = req.params;
  const data = readData();
  const post = data.find((item) => item.slug === slug);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  post.likes = (post.likes || 0) + 1;
  writeData(data);
  res.json({ message: 'Like count updated', likes: post.likes });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
