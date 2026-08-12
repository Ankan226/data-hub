const express = require('express');
const router = express.Router();

let blogPosts = [
  { id: 1, title: "Welcome to The Data Hub", content: "This is the first seeded post." }
];

const generateId = () => {
  return blogPosts.length > 0 ? blogPosts[blogPosts.length - 1].id + 1 : 1;
};

// GET /posts -> return everything
router.get('/', (req, res) => {
  res.status(200).json(blogPosts);
});

// GET /posts/:id -> return one post by id
router.get('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(post);
});

// POST /posts -> create a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = {
    id: generateId(),
    title,
    content
  };

  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id -> update an existing post
router.put('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.status(200).json(post);
});

// DELETE /posts/:id -> remove a post
router.delete('/:id', (req, res) => {
  const exists = blogPosts.some(p => p.id === parseInt(req.params.id));
  if (!exists) {
    return res.status(404).json({ message: "Post not found" });
  }

  blogPosts = blogPosts.filter(p => p.id !== parseInt(req.params.id));
  res.status(200).json({ message: "Post deleted successfully" });
});

module.exports = router;