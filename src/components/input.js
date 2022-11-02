import React from 'react'
import { Button, TextField } from '@mui/material';
import './input.css'
import logo from '../photo/logo2.png'


const inputer = ({ input, setInput, findWeather }) => {

    const handlechange = (event) => {
        setInput(event.target.value);
        console.log(input)
    }

    const handleClick=(event)=>{
        event.preventDefault();
        findWeather()
    }
    return (
        <div className='inputBox'>
            <div className='inputFeild'>
                <h1>Google Weather App</h1>

                <p>powered by Google</p>

                <img src={logo} />
                <form>
                    <TextField className='write' id="standard-basic"
                        label="enter the city" variant="standard"
                        onChange={handlechange} value={input} />
                    <br />
                    <Button variant="contained" color="success" type='submit' onClick={handleClick}>
                        search
                    </Button>
                </form>




            </div>

        </div>
    )
}

export default inputer
