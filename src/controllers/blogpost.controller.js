const BlogPostService = require('../services/blogpost.services');

const getPost = async (req, res) => {
    try {
    const post = await BlogPostService.getPost();
    return res.status(200).json(post);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  module.exports = {
    getPost,
  };