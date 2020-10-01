const express = require('express')
const router = express.Router()
const Text = require('../model/index.model')

// router.get('/',(res, req) => {
//     Text.find({},(err, texts) => {
//         res.json(texts)
//     })
// })

//get all data
router.get('/', async (req, res) => {
        const text = await Text.find();
        try {
        res.json(text)
        // res.render('/', { text: text });
} catch (error) {
        res.send('Error ' + error);
    }
});

router.post('/', async (req, res) => {
    const text = new Text({
        text: req.body.text,
    });

    try {
        await text.save().then(res.redirect('/'));
    } catch (error) {
        res.send('Error ' + error);
    }
});

// router.post('/', (req, res) => {
//     text = new Text({
//         text:req.body.text
//     })
//     text.save(() => {
//         res.json(text)
//     })
// })

module.exports = router