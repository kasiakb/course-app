import React from 'react'

const Button = ({ active, children, onClick, name }) => (
    <button
        name = {name}
        onClick={onClick}
        disabled={active}
        className='btn btn-primary'
    >
        {children}
    </button>
)

export default Button