import React, { Fragment,useState } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

//state de nuevas citas
const [appointments, saveAppointment]= useState([]);

//Funcion que tome las citas actuales y agregue la nueva
const createAppointment = appointment => {
  saveAppointment([
    ...appointments,
    appointment
  ])
}

//Funcion eliminarcita
const deleteAppointments = id =>{
  const newAppointments = appointments.filter(appointment=>appointment.id !== id);
  saveAppointment(newAppointments)
}

//Condicionando el titulo: administrar citas
const title = appointments.length === 0
?'No hay citas' :'Administra tus citas'

  return (
  
  <Fragment>
    <h1>Administrador de pacientes</h1>
    
    <div className="container">

    <div className="row">
      <div className="one-half column">
       <Formulario
       createAppointment={createAppointment}
       />
      </div>

      <div className="one-half column">
        <h2>{title}</h2>
        {appointments.map(appointment=>(
          <Cita
          key={appointment.id}
          appointment={appointment}
          deleteAppointments={deleteAppointments}
          />
        ))}
        
      </div>
    </div>

    </div>
  </Fragment>
  );
}

export default App;
