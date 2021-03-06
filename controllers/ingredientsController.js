const express = require("express");
const router = express.Router();
const db = require("../models");


// READ ALL
router.get("/api/ingredients", (req, res) => {
        db.Ingredient.find({})
        .then((foundIngredients) => {
            res.json({
            error: false,
            data: foundIngredients,
            message: "Successfully retrieved all ingredients.",
            });
        })
        .catch((err) => {
            res.status(500).json({
            error: true,
            data: null,
            message: "Unable to retrieve all ingredients. ",
            });
        });
    });


// READ ONE


// CREATE
router.post('/api/ingredients', (req, res) => {
    db.Ingredient.create(req.body).then((createdIngredient) => {
        res.json({
            error: false,
            data: createdIngredient,
            message: 'Successfully created ingredient.',
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: 'Failed to create new ingedient.'
        })
    })
})


// EDIT


// DELETE

module.exports = router;