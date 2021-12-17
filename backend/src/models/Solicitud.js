const { Schema, model } = require("mongoose");
const SolicitudSchema = Schema({
    proyecto:{type:Schema.Types.ObjectId,ref:'Proyecto', required:true },
    usuario:{type:Schema.Types.ObjectId,ref:'Usuario', required:true },
    estadoSolicitud: { type: String, required: false,default:"PENDIENTE"}
     
})
module.exports = model("Solicitud", SolicitudSchema);