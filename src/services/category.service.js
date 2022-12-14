const { Category } = require('../models');

const createCategory = async (name) => {
  console.log(name);
    const addCategory = await Category.create({ name });
    return addCategory;
  };

  const allCategories = async () => {
    const users = await Category.findAll();
  
    return users;
  };

  module.exports = {
    createCategory,
    allCategories,
  };