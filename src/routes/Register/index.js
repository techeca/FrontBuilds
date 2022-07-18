import { useState } from 'react';
import { Box, Paper, Typography, FormControl, InputLabel, Input, FormHelperText, Button, Stack, TextField  } from '@mui/material';
import { Link } from "react-router-dom";
import { FormRegister } from './components/FormRegister.js';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../MyColorsh.js';

export default function Register(){
  const [userData, setUserData] = useState({username:{value:'', error:false, helpertext:'Nombre a mostrar'},
                                            email:{value:'', error:false, helpertext:'Correo para iniciar cuenta'},
                                            password:{value:'', error:false, helpertext:'Crea una contraseña'},
                                            repassword:{value:'', error:false, helpertext:'Repite la contraseña'}})

  function handleSubmit(){
    //Los inputs ya vienen validados individualmente pero creo que no está demás otra validación :P
    if(userData.username.value !== '' && userData.password.value !== ''){
      console.log('Campos correctos')
      if(userData.password.value === userData.repassword.value){
        console.log('contraseñas correctas')
        //Aqui enviar datos de formulario
      }else {
        console.log('contraseñas incorrectas')
        //sistema de notis? 1313
      }
      console.log(`Password: ${userData.password.value}`)
      console.log(`Repassword: ${userData.repassword.value}`)
    }else {
      console.log('campos en blanco')
    }
  }

    return (
      <Box className='contentClass'>
        <Box sx={{borderLeft:'6px solid #3a3a3a'}}>
          <Typography variant="h4" sx={{fontWeight:'bold', mt:3, ml:2, color:'#f3f3f4', textAlign:'left'}}>Register</Typography>
        </Box>
        <Box container sx={{display:'flex', m:5, justifyContent:'center'}}>
          <Paper sx={{p:3, width:'75%', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'12px', border:'0px solid gray', bgcolor:'#25272a'}}>
            <Typography sx={{mb:3, color:'gray'}} variant='h5'>Completa el formulario</Typography>
              <ThemeProvider theme={theme}>
               <FormRegister ud={userData} sd={setUserData} />
              </ThemeProvider>
              <Stack spacing={2} sx={{mt:3}} direction="row">
                <Button onClick={handleSubmit} variant="contained">Registro</Button>
              </Stack>
           </Paper>
        </Box>
      </Box>
    )
}
