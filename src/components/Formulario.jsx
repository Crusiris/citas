import React, { Fragment, useState } from 'react'


//State citas
const [ appointment, updateAppointment ] = useState({
    pet:'',
    owner:'',
    date:'',
    hour:'',
    symptom:''
})

const Formulario = () => {
//Funcion que se ejecuta cada vez que el usario escribe en un input
const handleChange = ()=>{}

    return (
        <Fragment>
        <h2>Crear cita</h2> 
        <form>

        <label>Nombre Mascota</label>
        <input
        type="text"
        name="pet"
        className="u-full-width"
        placeholder="Nombre de mascota"
        onChange = {handleChange}
        />

        <label>Nombre Dueño</label>
        <input
        type="text"
        name="owner"
        className="u-full-width"
        placeholder="Nombre del dueño de la mascota"
        onChange = {handleChange}
        />

        <label>Fecha</label>
        <input
        type="date"
        name="date"
        className="u-full-width"
        onChange = {handleChange}
        />

        <label>Hora</label>
        <input
        type="time"
        name="hour"
        className="u-full-width"
        onChange = {handleChange}
        />

        <label>Sintomas</label>
        <textarea
        name="symptom"
        className="u-full-width"
        onChange = {handleChange}
        ></textarea>

        <button
        type="submit"
        className="u-full-width button-primary"
        >Agregar cita</button>
        </form>  
        </Fragment>
        
      );
}
 
export default Formulario;