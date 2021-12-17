const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
    "email" : { type: String, required: true },
    "identificacion" : { type: String, require: true },
    "nombreCompleto" : { type: String, required: true },
    "password" : { type: String, required: true },
    "estado" : { type: String, required: false, default: "PENDIENTE" },
    "rol" :  { type: String, required: false, default: "" },
})
module.exports = model("Usuario", UsuarioSchema);