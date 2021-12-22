import { args } from "commander";
import Avance from "../models/Avance";
import Proyecto from "../models/Proyecto";
import Usuario from "../models/Usuario";
import Solicitud from "../models/Solicitud";
import Inscripcion from "../models/Inscripcion";
import bcrypt from "bcrypt";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query: {
        Usuarios(_,args,{user}) {
            //if(user.auth){
               return Usuario.find();
            //}else {
            //   throw new Error("No Autenticado");
            //}
        },
        async UnUsuario(_, {id}) {
            return await Usuario.findById(id);
        },
        async Proyectos() {
            return await Proyecto.find().populate('lider','nombreCompleto');
        },
        async UnProyecto(parents, args) {
            return await Proyecto.findById(args.id)
        },
        async AvanceProyecto(parents, args) {         
            return await Avance.find({idProyecto: args.id});
        },
       
        async Inscripciones() {
            return await Inscripcion.find()
        },
        async UnaInscripcion(parents, args) {
            return await Inscripcion.findById(args.id)
        },
        async Avances() {
            return await Avance.find();
        },
        async UnAvance(parents, args) {
            return await Avance.findById(args.id)
        },
        
        async Login(_,{email,password}){
           
           const  usuario = await Usuario.findOne({email})
            if(!usuario){
                throw new Error("Usuario o contraseña incorrectos");
            }
             const validarPassword = bcrypt.compareSync(password, usuario.password);
            
             if(!validarPassword){
              throw new Error("Usuario o contraseña incorrectos");
            }else {
                const token=await generarJwt(usuario.id, usuario.email,usuario.nombreCompleto)
                return   {
                    token,
                    usuario: `${usuario.id}`,
                    rol: `${usuario.rol}`,
                    nombreUsuario: `${usuario.nombreCompleto}`
                };
            }
        },

       async UsuariosEstudiantes(){
           return await Usuario.find({rol:'Estudiante'});
       },

       async MisProyectos(_,{idUsuario}){
        return await Proyecto.find({lider:idUsuario}).populate('lider',"nombreCompleto");;
    }
        
    },

    Mutation: {
        async AgregarUsuario(_, { usuario }) {
            const salt=bcrypt.genSaltSync();
            const nUsuario = new Usuario(usuario);
            nUsuario.password = bcrypt.hashSync(usuario.password, salt);
            return await nUsuario.save();
        },

        async ActualizarEstadoUsuario(_, { id, input }) {
            return await Usuario.findByIdAndUpdate(id, input, { new: true });
        },

        async ActualizarDatosUsuario(_, { id, input }) {
            return await Usuario.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarProyecto(_, { proyecto }) {
            const nProyecto = new Proyecto({
                nombreProyecto: proyecto.nombreProyecto,
                objetivosGenerales: proyecto.objetivosGenerales,
                objetivosEspecificos: proyecto.objetivosEspecificos,
                presupuesto: proyecto.presupuesto,
                fechaInicio: proyecto.fechaInicio,
                fechaTerminacion: proyecto.fechaTerminacion,
                lider: proyecto.lider,
                estadoProyecto: proyecto.estadoProyecto,
                faseProyecto: proyecto.faseProyecto
            });
            return await nProyecto.save();
        },

        async ActivarEstadoProyecto(_, { id } ) {
            return await Proyecto.findByIdAndUpdate(id ,{ estadoProyecto: 'ACTIVO' } ,{ new: true } );
        },
        async InactivarEstadoProyecto(_, { id } ) {
            return await Proyecto.findByIdAndUpdate(id ,{ estadoProyecto: 'INACTIVO' } ,{ new: true } );
        },
        async ActualizarFaseProyecto(_, { id, input }) {
            return await Proyecto.findByIdAndUpdate(id, input, { new: true });
        },
        async FaseIniciarProyecto(_, { id } ) {
            return await Proyecto.findByIdAndUpdate(id ,{ faseProyecto: 'INICIADO' } ,{ new: true } );
        },
        async FaseDesIniciarProyecto(_, { id } ) {
            return await Proyecto.findByIdAndUpdate(id ,{ faseProyecto: 'INACTIVADO' } ,{ new: true } );
        },
        async ActualizarDatosProyecto(_, { id, input }) {
            return await Proyecto.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarAvance(_, { avance }) {
            const nAvance = new Avance({
                idProyecto: avance.idProyecto,
                fechaAvance: avance.fechaAvance,
                descripcionAvance: avance.descripcionAvance,
                observacionAvance: avance.observacionAvance,
            });
            return await nAvance.save();
        },

        async ActualizarDatosAvance(_, { id, input }) {
            return await Avance.findByIdAndUpdate(id, input, { new: true });
        },

        async ActualizarObservacionAvance(_, { id, input }) {
            return await Avance.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarInscripcion(_, { inscripcion }) {
            const nInscripcion = new Inscripcion({
                idProyecto: inscripcion.idProyecto,
                idUsuario: inscripcion.idUsuario,
                estadoInscripcion: inscripcion.estadoInscripcion,
                fechaIngreso: inscripcion.fechaIngreso,
                fechaEgreso: inscripcion.fechaEgreso,
            });
            return await nInscripcion.save();
        },

        async ActualizarEstadoInscripcion(_, { id, input }) {
            return await Inscripcion.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarSolicitud(_,{args}) {
            const nSolicitud= new Solicitud({
                proyecto:args.proyecto.id,
                usuario:args.usuario.id
            });
            console.log("AGREGARSOLICITUD=",args)
            return await nSolicitud.save();
        }
    }
}