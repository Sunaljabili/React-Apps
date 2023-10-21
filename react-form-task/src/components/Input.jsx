import React from 'react'

const Input = ({placeholder,type,inputid,  className}) => {

    return (
       <input className={className} inputid={inputid} type={type} placeholder={placeholder} />
    )
}

export default Input
