import { Box } from '@mui/material';
import { RowForm } from './RowForm.js';

export function FormRegister({ ud, sd }){
  //Recibe userData y setUserData
  let rf = JSON.parse(JSON.stringify(ud));

  //Actualiza valores ingresados en form
  function handleChange(e){
    let noError = false;
    let ht = '';

      switch (e.target.id) {
        case 'username':
          noError = checkUsername(e);
          ht = noError ? 'Debe ingresar mínimo 6 letras' : '';
          sd({...ud, username:{...ud.username, value:e.target.value, error:noError, helpertext:ht}});
          break;
        case 'email':
          sd({...ud, email:{...ud.email, value:e.target.value}});
          break;
        case 'password':
          noError = checkPassword(e);
          ht = noError ? 'Debe tener mínimo 8 caracteres' : '';
          sd({...ud, password:{...ud.password, value:e.target.value, error:noError, helpertext:ht}});
          break;
        case 'repassword':
          noError = checkRePassword(e);
          ht = noError ? 'Las contraseñas no son iguales' : '';
          sd({...ud, repassword:{...ud.repassword, value:e.target.value, error:noError, helpertext:ht}});
          break;
      }
  }

  function checkUsername(e){
    //Validamos contenido de input
    let errorono = ud.username.error;
    if(e.target.value.length < 6){
      errorono = true
    }else {
      errorono = false
    }
    return errorono;
  }

  function checkPassword(e){
    //Validamos longitud de contraseña
    let errorono = ud.password.error;
    if(e.target.value.length > 7){
      errorono = false
    }else {
      errorono = true;
    }
    return errorono;
  }

  function checkRePassword(e){
    //Validamos contraseñas iguales
    let errorono = ud.repassword.error;
    if(e.target.value === ud.password.value){
      errorono = false;
    }else {
      errorono = true;
    }
    return errorono;
  }

  return(
    <Box component='form' autoComplete='off' sx={{display:'block', textAlign:'center'}}>
      <RowForm id='username' label='username' error={ud.username.error} onchange={handleChange} helperText={ud.username.helpertext} variant={'outlined'} required value={ud.username.value} type={'text'} />
      <RowForm id='email' label='email' error={ud.email.error} onchange={handleChange} helperText={ud.email.helpertext} variant={'outlined'} value={ud.email.value} type={'email'} />
      <RowForm id='password' label='password' error={ud.password.error} onchange={handleChange} helperText={ud.password.helpertext} variant={'outlined'} value={ud.password.value} type={'password'} />
      <RowForm id='repassword' label='re-password' error={ud.repassword.error} onchange={handleChange} helperText={ud.repassword.helpertext} variant={'outlined'} value={ud.repassword.value} type={'password'} />
    </Box>
  )
}
