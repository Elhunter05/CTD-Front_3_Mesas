import React from 'react'
import arrDogs from './DogList'

const Veterinaria = () => {
  return (
    <main>
        <h1>Clientes caninos de Veterinaria</h1>
        <section>
            {arrDogs.map((dog, i) => (
                <div key={dog.id + i}>
                    <h2>{dog.nombre}</h2>
                    <ul>
                        <li>Edad: {dog.edad}</li>
                        <li>Sexo: {dog.sexo}</li>
                        <li>Raza: {dog.raza}</li>
                        <li>Tamaño: {dog.tamano}cm</li>
                    </ul>
                </div>
            ))}
        </section>
    </main>
  )
}

export default Veterinaria