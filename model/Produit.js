const mongoose = require('mongoose');
var Schema=mongoose.Schema;
var produitSchema = new Schema({
        libelle: { type: String, required: true  },
        prix: { type: Number, required: true },
        description: { type: String, required: true },
        quantite: { type: Number, required: true },
        
    }, { timestamp: true });
    
    module.exports = mongoose.model('produit', produitSchema);