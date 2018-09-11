const fs = require("fs");

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);
    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw new Error('No se pudo grabar', error);
    })
}

const cargarDB = () => {
    try {
        listadoToDo = require("../db/data.json");
    } catch (error) {
        listadoToDo = [];
    }
    console.log(listadoToDo);
}


const crear = (descripcion) => {
    cargarDB();
    let toDo = {
        descripcion,
        completado: false
    }
    listadoToDo.push(toDo);
    guardarDB();
    return toDo;
}

const getListado = () => {
    cargarDB();
    return listadoToDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    const filteredItems = listadoToDo.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoToDo.length === filteredItems.length) {
        return false;
    } else {
        listadoToDo = filteredItems;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}