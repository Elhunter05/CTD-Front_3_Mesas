import React from 'react'
import MockComponent from './MockComponent'

const FunctionalComponents = (props) => {
    const { objeto } = props
  return (
    <div>
        <h2>Componente funcional</h2>
        <MockComponent valorObjeto={objeto}/>
    </div>
  )
}

export default FunctionalComponents