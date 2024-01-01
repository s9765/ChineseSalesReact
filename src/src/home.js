import React from 'react'


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function home() {

    return (
        <>
     {/* <Box sx={{ width: '100%' }}>
         <Tabs 
       value={value}
           onChange={handleChange}
          aria-label="wrapped label tabs example"
         > 
           <Tab
             value="one"
             label="all products"
             wrapped
           />
           <Tab value="two" label="login" />
           <Tab value="three" label="register" />
           <Tab value="three" label="log out" />

         </Tabs>
       </Box>  */}
            <nav>
                <ul>
                    <li><a >כל המתכונים </a></li>
                    <li><a >התחברות</a></li>
                    <li><a >להרשמה</a></li>
                    <li ><a>ליציאה</a></li>
                </ul>
            </nav>
            <h1> HELLO </h1>
        </>
    )
}