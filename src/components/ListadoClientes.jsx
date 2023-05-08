import { Paciente } from "./Paciente"

export const ListadoClientes = ({ pacientes, setPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mx-3">

            {(pacientes && pacientes.length) ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="my-5 text-lg text-center font-bold">
                        Administra tus {''}
                        <span className="text-indigo-600">pacientes y listas</span>
                    </p>
                    {
                        pacientes.map(paciente => (
                            <Paciente
                                key={paciente.id}
                                {...paciente}
                                paciente={paciente}
                                setPaciente={setPaciente}
                            />
                        ))
                    }

                </>
            ) :
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="my-5 text-lg text-center font-bold">
                        Comienza agregando pacientes y {''}
                        <span className="text-indigo-600">aparecerán en este lugar</span>
                    </p>
                </>
            }

        </div>
    )
}
