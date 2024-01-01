import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login(props) {

    const navigat = useNavigate();
    // const { setIsLogin } = props;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const change = () => {
        console.log("dsdfadadsf");
        axios.get(`http://localhost:4000/user/getUserByName/${userName}`)
            .then((u) => {
                console.log(u);
                console.log("data", u.data)
                console.log("user",userName)

                if (u.data === '') {
                    // setIsLogin(true);
                    navigat(`/register/${userName}`);
                }
                else if (u.data.password === password) {
                    console.log("password" + u.data.password);
                    localStorage.setItem('user', JSON.stringify(u.data));
                    // setIsLogin(true);
                    navigat('/allProducts'); 
                }
                else 
                    navigat(`/register/${userName}`);               
            })
    }

    function f() {
        axios.get('http://localhost:4000/user/getAllUsers').then((result) => { console.log(result.data) })
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div id="body">
             <div id="login">
            <TextField onChange={(e)=>setUserName(e.target.value)}
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
                color={(userName===null||userName==="")?'error':'secondary'}
            /><br/>
            <TextField onChange={(e)=>setPassword(e.target.value)}
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
                color='secondary'
            />
            </div>
            <label htmlFor="remember-me" >
                <span>Remember me</span> 
            <span>
                <input id="remember-me" name="remember-me" type="checkbox" />
                </span>
            </label><br />                                           
            <Button variant="outlined" color='secondary' onClick={() => { change(); }}>submit</Button><br/>
           {console.log(props)}
        </div>
    )
}

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import {  IconButton, InputAdornment, TextField } from '@mui/material';
// import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
// import { useForm } from "react-hook-form";

// export default function Login(props) {

//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigat = useNavigate();
//     const { setIsLogin } = props;
//     const [user, setUser] = useState({ name: '', password: "123456" });
//     const [userName, setUserName] = useState();
//     const [password, setPassword] = useState("");

//     let flag = false;

//     const change = () => {
//         console.log("userName", userName)


//         axios.get(`http://localhost:4000/user/getUserByName/${userName}`)
//             .then((u) => {
//                 console.log(u);
//                 console.log("data", u.data)
//                 console.log("user", userName)

//                 if (u.data === '') {
//                     setIsLogin(true);
//                     navigat(`/register/${userName}`);
//                 }
//                 else if (u.data.password === password) {
//                     console.log("aaaa" + u.data.password);
//                     //   בדיקה האם הסיסמת ממנהל
//                     localStorage.setItem('user', JSON.stringify({ name: userName, password: password }));
//                     navigat('/allProduct');
//                     setIsLogin(true);
//                 }
//                 else flag = true;//אם הבא קים אך הסיסמא שגויה
//             }).catch(
//                 (err)=>console.log("er",err)
//             )
       
//     }

//     // function f() {
//     //     axios.get('http://localhost:4000/user/getAllUsers')
//     //         .then((result) => {
//     //             console.log(result.data)
//     //         })
//     // }

//     const [showPassword, setShowPassword] = React.useState(false);
//     const handleClickShowPassword = () => setShowPassword((show) => !show);
//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };

//     return (
//         <div id="body">
//             <div id="login">
//                 <form onSubmit={handleSubmit(change)} style={{ width: "50%" }} id='register'>
//                     <TextField
//                         onChange={(e) => setUserName(e.target.value)}
//                         id="input-with-icon-textfield"
//                         className='inputs'
//                         label="UserName"
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <AccountCircle aria-label="toggle password visibility"></AccountCircle>
//                                 </InputAdornment>
//                             ),
//                         }}
//                         variant="standard"
//                         color={(userName === null || userName === "") ? 'error' : 'secondary'}
//                         {...register("userName", { required: true })}
//                     /><br />
//                     {errors?.userName1?.type === "required" && <p className='requierds'>  *שדה זה הינו שדה חובה  </p>}
//                     <TextField onChange={(e) => setPassword(e.target.value)}
//                         id="standard-adornment-password"
//                         className='inputs'
//                         type={showPassword ? 'text' : 'password'}
//                         label="Password"
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <IconButton
//                                         aria-label="toggle password visibility"
//                                         onClick={handleClickShowPassword}
//                                         onMouseDown={handleMouseDownPassword}
//                                     >
//                                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                                     </IconButton>
//                                 </InputAdornment>
//                             ),
//                         }}
//                         variant="standard"
//                         color={(password === null || password === "") ? 'error' : 'secondary'}
//                         {...register("password", { required: true })}
//                     /><br />
//                     {errors?.password?.type === "required" && <p className='requierds'>  *שדה זה הינו שדה חובה  </p>}
//                     <label htmlFor="remember-me" >
//                         <span>Remember me</span>
//                         <span>
//                             <input id="remember-me" name="remember-me" type="checkbox" />
//                         </span>
//                     </label><br />
//                     <input type="submit" value='submit' variant="outlined" color='secondary' /><br />
//                 </form>
//             </div>

//             {console.log(props)}
//         </div>
//     )
// }
                    // localStorage.setItem('user', JSON.stringify({ name: userName, password: password }));
                    // {name:u.data.username,password:u.data.password,mail:u.data.mail,address:u.data.address}