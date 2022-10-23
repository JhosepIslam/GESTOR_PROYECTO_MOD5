const { Schema, model } = require('mongoose');

const CRSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El Codigo es obligatorio']
    },
    nombre_proyecto: {
        type: String,
        required: [true, 'El NombreProyecto es obligatorio'],

    },
    pais_ejecuta: {
        type: String,
        required: [true, 'La PaisQueEjecuta es obligatoria'],
    },
    FechaCierre: {
        type: Date,
        required: [true, 'La FechaCierre es obligatoria'],
    },

});



module.exports = model( 'CostaRica', CRSchema );