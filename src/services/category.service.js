const { Category } = require('../models');

const createCategory = async (name) => {
  console.log(name);
    const addCategory = await Category.create({ name });
    return addCategory;
  };

  module.exports = {
    createCategory,
  };