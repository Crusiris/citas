import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({appointment, deleteAppointments}) => {

    const { pet, owner, date, hour, symptom , id} = appointment

    return (  
        <div className="cita">
            <p>Mascota: <span>{pet}</span></p>
            <p>Dueño: <span>{owner}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{hour}</span></p>
            <p>Sintomas: <span>{symptom}</span></p>
        
        <button
        className="button eliminar u-full-width"
        onClick={ () => deleteAppointments(id)}
        >Eliminar</button>

        </div>
    );
}
 
//Documentacion del componente usando PropTypes
Cita.propTypes = {
    appointment:PropTypes.object.isRequired,
    deleteAppointments: PropTypes.func.isRequired
}

export default Cita;