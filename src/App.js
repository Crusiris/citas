import React, { Fragment,useState , useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

//Citas en local storage
let initialQuotes = JSON.parse(localStorage.getItem('appointments'));
//Sino hay citas iniciales, entonces las citas iniciales 
//sera igual a un arreglo vacio
if(!initialQuotes){
  initialQuotes= []
}

//state de nuevas citas
const [appointments, saveAppointment]= useState(initialQuotes);

//Use Effect para realizar ciertas operaciones
//Cuando el state cambia
useEffect(()=>{
  if(initialQuotes){
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }else{
    localStorage.setItem('appointments', JSON.stringify([]))
  }
}, [appointments, initialQuotes ]);

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
