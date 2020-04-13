import React, { Fragment, useState } from 'react'
//import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';





const Formulario = ({createAppointment}) => {

    //State citas
    const [ appointment, updateAppointment ] = useState({
            pet:'',
            owner:'',
            date:'',
            hour:'',
            symptom:''
    })

    //State de error
    const [ error, updateError ] = useState(false)

    //Funcion que se ejecuta cada vez que el usario escribe en un input
    const handleChange = e =>{
        updateAppointment({
            ...appointment,
            [e.target.name]:e.target.value
        })

    }

    //Extraer valos del estado con un destructrin
    // para evitar usar sintaxis largas como appointment.pet etc

    const { pet, owner, date, hour, symptom } = appointment

    //Agregar cita
    const submitAppointment = e =>{
    e.preventDefault();
        //Validar
    if( pet.trim() === '' || owner.trim() === '' || date.trim() === '' ||  hour.trim() === '' || symptom.trim() === ''){
        //llamo la funcion que actualiza el estado 
        updateError(true)
        return;
    }
    //Eliminando el mensaje de error
    updateError(false)
   
    //Generando el id, a traves de la librera uuid
    appointment.id = uuidv4();

    //Crear cita
    createAppointment(appointment);

    //Limpiando Formulario
    updateAppointment({
        pet:'',
        owner:'',
        date:'',
        hour:'',
        symptom:''
    })
    }

    return (
        <Fragment>
        <h2>Crear cita</h2> 
        
            {error 
            ? <p className="alerta-error">Todos los campos son obligatorios</p>
            : null
            }

        <form
        onSubmit = { submitAppointment }
        >

        <label>Nombre Mascota</label>
        <input
        type="text"
        name="pet"
        className="u-full-width"
        placeholder="Nombre de mascota"
        onChange = {handleChange}
        value = { pet }
        />

        <label>Nombre Dueño</label>
        <input
        type="text"
        name="owner"
        className="u-full-width"
        placeholder="Nombre del dueño de la mascota"
        onChange = {handleChange}
        value = { owner }
        />

        <label>Fecha</label>
        <input
        type="date"
        name="date"
        className="u-full-width"
        onChange = {handleChange}
        value = { date }
        />

        <label>Hora</label>
        <input
        type="time"
        name="hour"
        className="u-full-width"
        onChange = {handleChange}
        value = { hour }
        />

        <label>Sintomas</label>
        <textarea
        name="symptom"
        className="u-full-width"
        onChange = {handleChange}
        value = { symptom }
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