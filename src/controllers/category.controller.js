const CategoryService = require('../services/category.service');

  const addCategory = async (req, res) => {
    try {
    const { name } = req.body;
    console.log(name);
    const category = await CategoryService.createCategory(name);
    return res.status(201).json(category);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
  
module.exports = {
    addCategory,
};