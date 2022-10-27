import React, { Component } from 'react'
import MockComponent from './MockComponent'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { objeto } = this.props;
        return(
            <div>
                <h2>Componente de clase</h2>
                <p><MockComponent valorObjeto={objeto}/></p>
            </div>
        )
  }
}
