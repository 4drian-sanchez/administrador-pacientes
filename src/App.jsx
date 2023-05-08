import { useState, useEffect } from 'react';
import {
  Header, Formulario,
  ListadoClientes
} from './components';

const initialState = JSON.parse(localStorage.getItem('pacientes')) || [];

export const App = () => {

  const [pacientes, setPacientes] = useState(initialState);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-10">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoClientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}