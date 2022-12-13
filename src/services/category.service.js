const { Category } = require('../models');

const createCategory = async (data) => {
    const addCategory = await Category.create({ data });
    return addCategory;
  };

  module.exports = {
    createCategory,
  };