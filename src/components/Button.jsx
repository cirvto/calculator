import React from 'react'
import './Button.css'

export default props => {
    return (
        <div>
            <button className='Button'>{ props.label }</button>
        </div>
    )
}