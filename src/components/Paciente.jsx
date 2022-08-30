import React from 'react'

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">Oscar</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">oscar@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de alta: {''}
          <span className="font-normal normal-case">10 de Septiembre de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsam pariatur recusandae earum eligendi at optio provident non delectus omnis dicta, ut magni quam perferendis ex corrupti harum. Cumque, omnis.</span>
        </p>
      </div>
  )
}

export default Paciente