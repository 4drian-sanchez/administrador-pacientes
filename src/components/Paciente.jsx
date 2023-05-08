export const Paciente = ({ propietario, nombre, sintomas, alta, email, paciente, setPaciente }) => {
    return (
        <div className="bg-white m-3 py-7 px-4 shadow-lg rounded-xl">

            <p className="font-bold text-gray-700 mb-3 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold text-gray-700 mb-3 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold text-gray-700 mb-3 uppercase">
                Correo: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>


            <p className="font-bold text-gray-700 mb-3 uppercase">
                Alta en: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold text-gray-700 mb-3 uppercase">
                Sistomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>


            <div className="mt-5 flex justify-between">
                <button
                    onClick={() => setPaciente(paciente)}
                    className="py-3 px-10 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md transition-colors uppercase"
                >
                    Editar
                </button>
                <button className="py-3 px-10 bg-red-600 hover:bg-red-800 text-white rounded-md transition-colors uppercase">Borrar</button>
            </div>
        </div>
    )
}
