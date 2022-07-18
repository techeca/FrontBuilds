import { useState } from 'react';
import { Box, Paper, Typography, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../MyColorsh.js';
import { FormLogin } from './components/FormLogin';

export default function Login(){
  //const [userData, setUserData] = useState({username:'', password:''});
  const [userData, setUserData] = useState({email:{value:'', error:false, helpertext:''},
                                            password:{value:'', error:false, helpertext:''}})

  // function handleChangeUsername(e){
  //   //Actualización de estado
  //   setUserData({...userData, username:e.target.value});
  // }
  //
  // function handleChangePassword(e){
  //   //Actualización de estado
  //   setUserData({...userData, password:e.target.value});
  // }

  function handleSubmit(){
    //
    if(userData.username !== '' && userData.password !== ''){
      console.log('correcto')
      //try login con db, podria controlar
    }else {
      console.log('campos en blanco')
    }
  }

    return (
      <Box className='contentClass'>
      <Box sx={{borderLeft:'6px solid #3a3a3a'}}>
        <Typography variant="h4" sx={{fontWeight:'bold', mt:3, ml:2, color:'#f3f3f4', textAlign:'left'}}>Login</Typography>
      </Box>
        <Box sx={{display:'flex', m:5, justifyContent:'center'}}>
          <Paper sx={{p:3, width:'60%', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'12px', border:'0px solid gray', bgcolor:'#25272a'}}>
          <Typography sx={{mb:3, color:'gray'}} variant='h5'>Ingresa tus datos</Typography>
          <ThemeProvider theme={theme}>
            <FormLogin ud={userData} sd={setUserData}/>
          </ThemeProvider>
            <Link to={'#'} style={{ color:'gray', textAlign:'left', fontSize:14, marginTop:6}}>Recuperar contraseña</Link>
            <Stack spacing={2} sx={{mt:3}} direction="row">
              <Button onClick={handleSubmit} variant="contained">Connect</Button>
              <Link  to={'/Register'} style={{textDecoration:'none'}}>
              <Button variant="contained" color='error'>Register</Button>
              </Link>
            </Stack>
          </Paper>
        </Box>

      </Box>

    )
}
