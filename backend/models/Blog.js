const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  job: { type: String, required: true },
  name: { type: String, required: true },
  profileImageURL: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  content: { type: String, required: true }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
