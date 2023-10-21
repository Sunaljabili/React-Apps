import React from 'react'
import Input from './Input'
import Label from './Label';
import Button from './Button';
import { FaBars } from "react-icons/fa"

const Form = ({ data }) => {
    // console.log(data)
    return (
        <div className='form-area'>
            <div className="form-header">
                <FaBars className='icon' />
                <span>Input types</span>
            </div>
            <div className="form-title">
                <p>All aviable included input types here</p>

            </div>
            <form className='form'>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id}>
                                <Label className={"label"} htmlFor={item.htmltFor} title={item.title} />
                                <Input className={"input"} inputid={item.inputid} placeholder={item.placeholder} type={item.type} />
                            </div>
                        )
                    })
                }
                <Button className={"btn btn-success"} >title={"<> Toggle"}</Button>
            </form>
        </div>

    )
}

export default Form
