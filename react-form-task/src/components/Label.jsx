import React from 'react'

const Label = ({title,htmlFor,className}) => {
    return (
        <label className={className} htmlFor={htmlFor}>{title}</label>
    )
}
export default Label
