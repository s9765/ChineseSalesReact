import { React, useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import {  IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

export default function Register(props) {

    const [user, setUser] = useState({ username: null, password: null, address: null, email: null });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigat = useNavigate();
     const params = useParams();

    function onSubmit() {
        console.log("sss");
        axios.post('http://localhost:4000/user/addUser', user).then((result) => { 
            console.log("post"); 
            console.log(result.data); 
            localStorage.setItem("user",JSON.stringify(result.data))})
        navigat('/allProducts');
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <input type='button' onClick={()=>console.log("params",params)} value={"clik me"}/>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }} id='register'>
                <TextField
                    id="input-with-icon-textfield"
                    className='inputs'
                    label="UserName"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle aria-label="toggle password visibility"></AccountCircle>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color={errors?.userName?.type === "required" ? 'error':'secondary'}
                     defaultValue={params.name}
                    {...register("userName", { required: true })}
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                /><br />
                {errors?.userName?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <TextField
                    id="standard-adornment-password"
                    className='inputs'
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color={errors?.password?.type === "required" ? 'error':'secondary'}
                    // defaultValue={"סיסמא"}
                    {...register("password", { required: true, maxLength: 20 })}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                /><br />
                {errors?.password?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <TextField
                    id="input-with-icon-textfield"
                    className='inputs'
                    label="Address"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                              <PlaceIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color={errors?.address?.type === "required" ? 'error':'secondary'}
                    // defaultValue={'כתובת'}
                    {...register("address", { required: true })}
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                /><br />
                {errors?.address?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p> }
                <TextField
                    id="input-with-icon-textfield"
                    className='inputs'
                    label="Email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    aria-invalid={errors.email ? "true" : "false"} 
                    color={errors?.email?.type === "required" ? 'error':'secondary'}
                    {...register("email", { required: true,pattern:'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' })}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                /><br />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
                {errors?.email?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                {errors?.email?.pattern&&<p className='requierds'> מייל לא תקין*</p>}
                <input type="submit" value='submit' variant="outlined" color='secondary'/><br/>
                {/* <Input type="submit" value='submit' variant="outlined" color='secondary'/> */}
                {/* <Button variant="outlined" color='secondary' onSubmit={handleSubmit(onSubmit)}>submit</Button><br/> */}
            </form>
        </>
    );
}