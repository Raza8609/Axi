import React from 'react'
import PropType from 'prop-types'


export default function Alert(props) {
   
        return (
          props.alert && <div className="alert alert-primary" role="alert">
             {props.alert.type} :  {props.alert.msg}
          </div>
        );
      
}
