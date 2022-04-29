const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get all the categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}],
      
    });
    res.status(200).json(categoryData);
  }catch (err) {
    res.status(500).json(err);
  }
});

//get one category by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a new category
router.post('/', async(req, res) => {
  try{
    const categoryData = await Category.create( {
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData)
  }catch (err) {
    res.status(400).json(err);
  }
});

//update a category by id
router.put('/:id', async(req, res) => {
  try{
    const categoryData= await Category.update(
      req.body, {
        where: {
          id:req.params.id,
        },
    });
    res.status(200).json(categoryData)
  }catch(err) {
    res.status(400).json(err);
  }
});

//delete a category by id
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
      if(!categoryData) {
        res.status(404).json ({ mesage: 'No category found with this id!'});
        return;
      }
      res.status(200).json(categoryData);
  }catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;