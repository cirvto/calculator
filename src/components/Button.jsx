import React from 'react'
import './Button.css'

export default props => 
    <button 
    onClick={e => props.click && props.click(props.label)}
    className={`
        Button
        ${props.Operation ? 'Operation' : ''}
        ${props.Double ? 'Double' : ''}
        ${props.Triple ? 'Triple' : ''}
    `}>
        { props.label }
    </button>