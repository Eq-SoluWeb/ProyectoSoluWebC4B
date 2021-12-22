import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';

function AlertaSweet() {
   
        return (
          <div>
            <button onClick={() => this.setState({ show: true })}>Alert</button>
            <SweetAlert
              show={this.state.show}
              title=""
              text="Los Datos han sido procesados exitosamente"
              onConfirm={() => this.setState({ show: true })}
            />
          </div>
        );
      }
  
export default AlertaSweet
