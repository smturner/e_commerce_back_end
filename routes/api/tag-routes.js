const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

//get all tags
router.get('/', async(req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: {model: Product}

    });
    res.status(200).json(tagsData);
  }catch (err) {
    res.status(500).json(err);
  }
});

//get one tag by id
router.get('/:id', async(req, res) => {
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    res.status(200).json(tagsData);
  }catch (err) {
    res.status(500).json(err);
  }
});

//create a new tag
router.post('/', async(req, res) => {
  try{
    const tagsData = await Tag.create( {
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagsData)
  }catch (err) {
    res.status(400).json(err);
  }});

//update a tag by id
router.put('/:id', async(req, res) => {
  try{
    const tagsData= await Tag.update(
      req.body, {
        where: {
          id:req.params.id,
        },
    });
    res.status(200).json(tagsData)
  }catch(err) {
    res.status(400).json(err);
  }
});

//delete a tag by id
router.delete('/:id', async(req, res) => {
  try{
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!tagsData) {
      res.status(404).json ({message: "No tags found with this id!"});
      return;
    }
    res.status(200).json(tagsData);
  }catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
