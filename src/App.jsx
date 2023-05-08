import { useState } from 'react';
import {
  Header, Formulario,
  ListadoClientes
} from './components';

export const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const addPacientes = (paciente) => {
    setPacientes([...pacientes, paciente])
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-10">
        <Formulario
          addPacientes={addPacientes}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoClientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  )
}