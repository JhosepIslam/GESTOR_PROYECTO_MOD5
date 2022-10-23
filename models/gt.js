const {Schema, model} = require('mongoose')

const GTSchema = Schema(
    {
        codigo : {
            type : String,
            require : [true, 'Codigo Requerido']
        },
        nombre_proyecto : {
            type : String,
            require : [true, 'Nombre del proyecto Requerido']
        },
        monto : {
            type : Number,
            require : [true, 'Monto Requerido']
        },
        fecha : {
            type : Date,
            require : [true, 'Fecha Requerido']
        }
    }
)

module.exports = model("Guatemala", GTSchema )