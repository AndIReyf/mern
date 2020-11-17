const router = require('express').Router()

// Item model
const Item = require('../../models/Item')

/* @route GET api/items
   @desc Get all items
   @access Public */
router.get('/', (req, res) => {
    Item
        .find()
        .sort({date: -1})
        .then(items => res.json(items))
})

/* @route POST api/items
   @desc Create an item
   @access Public */
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save()
        .then(item => res.json(item))
})

/* @route DELETE api/items/:id
   @desc Delete an item
   @access Public */
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        await item.remove()
        res.json({success: true})
    } catch (e) {
        console.log(e)
        res.status(404).json({success: false})
    }
})

module.exports = router
