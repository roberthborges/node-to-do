const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea to do'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca una tarea como completado o pendiente.'
}

const argv = require("yargs")
    .command("crear", "Crear un elemento to do", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Elimina una tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}