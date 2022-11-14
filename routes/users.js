var express = require('express');
const Produit = require("../model/Produit");
var router = express.Router();

  /* GET users listing. */
            router.get('/', function(req, res, next) {
                res.send('respond with a resource');
              });

              router.post('/addProduct', async (req, res, next) => {
                try {
                  const { username, email, password } = req.body
              
              
                  const produit = new Produit({
                    libelle,
                    prix,
                    description,
                    quantite

                  });
                  await produit.save();
              
                  res.redirect("/");
              
                } catch (error) {
                    res.redirect("/");
                }
              
              
              });

module.exports = router;