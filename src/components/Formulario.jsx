import { useState } from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes}) => {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([mascota, propietario, email, fechaAlta, sintomas].includes('')) {
      setError(true)
      return;
    }

    setError(false)

    const objetoPaciente = {
      mascota,
      propietario,
      email, 
      fechaAlta,
      sintomas,
      id: generarId()
    }

    setPacientes([...pacientes, objetoPaciente])

    setMascota('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-5 mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            onSubmit={handleSubmit}>
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
                 htmlFor="mascota">Nombre Mascota
          </label>
          <input type="text"
                 id="mascota"
                 placeholder="Nombre de la Mascota"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={mascota}
                 onChange={(e) => setMascota(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
                 htmlFor="propietario">Nombre Propietario
          </label>
          <input type="text"
                 id="propietario"
                 placeholder="Nombre del Propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={propietario}
                 onChange={(e) => setPropietario(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
                 htmlFor="email">Email
          </label>
          <input type="email"
                 id="email"
                 placeholder="correo@correo.com"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
                 htmlFor="alta">Alta
          </label>
          <input type="date"
                 id="alta"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={fechaAlta}
                 onChange={(e) => setFechaAlta(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
                 htmlFor="sintomas">Sintomas
          </label>
          <textarea id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}/>
        </div>

        <input type="submit"
               className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all"
               value="Agregar Paciente"/>

      </form>

    </div>
  )
}

export default Formulario