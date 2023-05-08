import { useState, useEffect } from "react";
import { useForm } from "../Hooks/useForm"
import { Error } from "./Error";
import { generarId } from '../helpers/generarId';

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    generarId
    const {
        nombre,
        hundleChange,
        hundleReset,
        formState,
        setFormState,
        propietario,
        email,
        alta,
        sintomas } = useForm({
            nombre: '',
            propietario: '',
            email: '',
            alta: '',
            sintomas: '',
        });

    const [error, setError] = useState(false);

    const hundleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formState).includes('')) {
            setError(true);
            return;
        }

        const objPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
        }

        if (paciente.id) {
            //Editando paciente
            objPaciente.id = paciente.id;
            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);
            setPacientes(pacienteActualizado);
            setPaciente({});
        } else {
            //Agregando nuevo registro
            objPaciente.id = generarId();
            setPacientes([...pacientes, objPaciente]);
        }


        setError(false);
        hundleReset({
            nombre: '',
            propietario: '',
            email: '',
            alta: '',
            sintomas: ''
        })


    }

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {

            const { nombre, propietario, email, alta, sintomas } = paciente;

            setFormState({
                ...formState,
                nombre,
                propietario,
                email,
                alta,
                sintomas,
            }
            )
        }

    }, [paciente])


    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">

            <h2 className="font-black text-3xl text-center">
                Seguimiento pacientes
            </h2>
            <p className="my-5 text-lg text-center font-bold">
                Añade pacientes y {''}
                <span className="text-indigo-600">administralos</span>
            </p>

            <form
                autoComplete="off"
                noValidate
                onSubmit={hundleSubmit}
                className="bg-white rounded-lg py-10 px-5 shadow-lg ">

                {(error) && <Error menssage='Todos los campos son obligatorios' />}

                <div>
                    <label htmlFor="nombre" className="block text-gray-700 uppercase mb-2 font-bold">Nombre de mascota</label>
                    <input
                        type="text"
                        placeholder="Nombre de tu mascota"
                        id="nombre"
                        className="border-2 p-2 w-full rounded-md"
                        name="nombre"
                        onChange={hundleChange}
                        value={nombre}
                    />
                </div>

                <div>
                    <label htmlFor="propietario" className="block text-gray-700 uppercase mb-2 font-bold mt-5">Nombre del propietario</label>
                    <input
                        type="text"
                        placeholder="Coloca tu nombre"
                        id="propietario"
                        className="border-2 p-2 w-full rounded-md"
                        value={propietario}
                        name="propietario"
                        onChange={hundleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 uppercase mb-2 font-bold mt-5">Email</label>
                    <input
                        type="email"
                        placeholder="Coloca tu correo"
                        id="email"
                        className="border-2 p-2 w-full rounded-md"
                        name='email'
                        onChange={hundleChange}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="date" className="block text-gray-700 uppercase mb-2 font-bold mt-5">Alta</label>
                    <input
                        type="date"
                        placeholder="Coloca tu correo"
                        id="date"
                        className="border-2 p-2 w-full rounded-md"
                        value={alta}
                        onChange={hundleChange}
                        name='alta'
                    />
                </div>

                <div>
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase mb-2 font-bold mt-5">Sintomas</label>
                    <textarea
                        placeholder="Coloque los sistomas"
                        className="border-2 p-2 w-full rounded-md"
                        value={sintomas}
                        onChange={hundleChange}
                        name='sintomas'
                    />
                </div>

                <input
                    type="submit"
                    value={paciente.id ? 'editar paciente' : 'Guardar paciente'}
                    className="mt-5 w-full bg-indigo-600 p-3 text-white uppercase rounded-md hover:bg-indigo-700 transition-colors cursor-pointer"
                />
            </form>
        </div>
    )
}
