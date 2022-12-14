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
  
  const allCategories = async (req, res) => {
    try {
    const users = await CategoryService.allCategories();
   return res.status(200).json(users);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  };
module.exports = {
    addCategory,
    allCategories,
};