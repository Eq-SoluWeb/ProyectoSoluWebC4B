import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Usuarios: [Usuario],
<<<<<<< HEAD
        unUsuario(id:ID!): Usuario,
=======
        UnUsuario(id:ID): Usuario,
>>>>>>> Feature_JR
        Proyectos: [Proyecto],
        UnProyecto(id:ID): Proyecto,
        AvanceProyecto(id:ID):Avance,
        Inscripciones: [Inscripcion],
        UnaInscripcion(id:ID): Inscripcion,
        Avances: [Avance],
        UnAvance(id:ID): Avance,
        Login(email:String!,password:String!):Auth,
        UsuariosEstudiantes: [Usuario],
        SolicitudesPendientes:[Solicitud],
        MisProyectos(idUsuario:ID):[Proyecto],
        Solicitud:[Solicitud], 

    }

    type Mutation {
        AgregarUsuario(usuario : UsuarioInput): Usuario
<<<<<<< HEAD
        ActualizarEstadoUsuario(id : ID!, input : UsuarioInputEstado): Usuario
        ActualizarDatosUsuario(id : ID!, input : UsuarioInputDatos): Usuario
=======
        ActualizarEstadoUsuario(id : ID, input : UsuarioInputEstado): Usuario
        ActualizarDatosUsuario(id : ID, input : UsuarioInputDatos): Usuario
>>>>>>> Feature_JR
        AgregarProyecto(proyecto : ProyectoInput): Proyecto
        ActivarEstadoProyecto(id : ID): Proyecto
        InactivarEstadoProyecto(id : ID): Proyecto
        ActualizarFaseProyecto(id : ID!, input : ProyectoInputFase): Proyecto
        ActualizarDatosProyecto(id : ID!, input : ProyectoInputDatos): Proyecto
        AgregarInscripcion(inscripcion : InscripcionInput): Inscripcion
        ActualizarEstadoInscripcion(id : ID!, input : InscripcionInputEstado): Inscripcion
        AgregarAvance(avance : AvanceInput): Avance
        ActualizarDatosAvance(id : ID!, input : AvanceInputDatos): Avance
        ActualizarObservacionAvance(id : ID!, input : AvanceInputObservacion): Avance
        AgregarSolicitud(solicitud:SolicitudInput):Solicitud,
        FaseIniciarProyecto(id : ID): Proyecto,
        FaseDesIniciarProyecto(id : ID): Proyecto
        
    } 
    
    type Auth {
        token: String,
        usuario: String,
        rol: String,
        nombreUsuario:String,
        estado:String
    }

    type Usuario {
        id: ID,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        estado: String,
        rol: String,
    }

    type UnUsuario {
        id: ID,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        estado: String,
        rol: String,
    }

    input UsuarioInput {
        id: String,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        estado: String,
        password: String,
        rol: String,
    } 

    input UsuarioInputEstado {
        estado: String,
    }

<<<<<<< HEAD
    input UsuarioInputDatos { 
        nombreCompleto: String, 
        identificacion: String,   
        email: String,                 
=======
    input UsuarioInputDatos {
        nombreCompleto: String,
        identificacion: String,
        email: String,
         
>>>>>>> Feature_JR
    }

    type Avance {
        id: ID,
        idProyecto: String,
        fechaAvance: String, 
        descripcionAvance: String, 
        observacionAvance: String, 
    }

    type Proyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : String,
        objetivosEspecificos : String,
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider:Usuario,
        estadoProyecto : String,
        faseProyecto: String,
        avance:[Avance]
    }

    type unProyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : String,
        objetivosEspecificos : String,
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }


    type AvanceProyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : String,
        objetivosEspecificos : String,
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
        avance:[Avance]
    }


    input ProyectoInput {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : String,
        objetivosEspecificos : String,
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }
    
   

    input ProyectoInputEstado {
        estadoProyecto : String,
    }

    input ProyectoInputFase {
        faseProyecto: String,
    }

    input ProyectoInputDatos {
        nombreProyecto : String,
        objetivosGenerales : String,
        objetivosEspecificos : String,
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }

    type Inscripcion {
        id: ID,
        idProyecto: String,
        idUsuario: String,
        estadoInscripcion: String,
        fechaIngreso: String,
        fechaEgreso: String,
    }
   
    type unaInscripcion {
        id: ID,
        idProyecto: String,
        idUsuario: String,
        estadoInscripcion: String,
        fechaIngreso: String,
        fechaEgreso: String,
    }

    input InscripcionInput {
        id: ID,
        idProyecto: String,
        idUsuario: String,
        estadoInscripcion: String,
        fechaIngreso: String,
        fechaEgreso: String,
    }

    input InscripcionInputEstado {
        estado: String,
    }

   
    type UnAvance {
        id: ID,
        idProyecto: String,
        fechaAvance: String,
        descripcionAvance: String,
        observacionAvance: String,
    }

    input AvanceInput {
        id: ID,
        idProyecto: String,
        fechaAvance: String,
        descripcionAvance: String,
        observacionAvance: String,
    }

    input AvanceInputDatos {
        fechaAvance : String,
        descripcionAvance: String,
    }

    input AvanceInputObservacion {
        observacionAvance : String,
    }

    type Solicitud{
        id :ID,
        proyecto:Proyecto,
        usuario:Usuario,
        estadoSolicitud:String,
    }
    input SolicitudInput{
        
        proyecto :String,
        usuario:String,
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})