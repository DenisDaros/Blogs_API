const CategoryService = require('../services/category.service');

  const addCategory = async (req, res) => {
    const { name } = req.body;
    const category = await CategoryService.createCategory(name);
    return res.status(201).json(category);
  };
  
module.exports = {
    addCategory,
};