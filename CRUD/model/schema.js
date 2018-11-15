const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema(
    {
        nombre: String,
        descripcion: String,
        ingredientes: Array,
        tipomasa: String,
        tamano: String,
        cantidadporciones: Number,
        tieneextraqueso: Boolean
    }
);
module.exports = mongoose.model('pizzas', pizzaSchema);