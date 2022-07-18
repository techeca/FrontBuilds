import { Box } from '@mui/material';
import { RowForm } from './RowForm.js';

export function FormLogin({ ud, sd }){
  //Recibe userData y setUserData //no se está usando
  let rf = JSON.parse(JSON.stringify(ud));

  //Actualiza valores ingresados en form
  function handleChange(e){
    let noError = false;
    let ht = '';

      switch (e.target.id) {
        case 'email':
          noError = checkEmail(e);
          ht = noError ? 'Debe ingresar su correo' : '';
          sd({...ud, email:{...ud.email, value:e.target.value, error:noError, helpertext:ht}});
          break;
        case 'password':
          noError = checkPassword(e);
          ht = noError ? 'Debe tener mínimo 8 caracteres' : '';
          sd({...ud, password:{...ud.password, value:e.target.value, error:noError, helpertext:ht}});
          break;
      }
  }

  function checkEmail(e){
    //Validamos contenido de input
    let errorono = ud.email.error;
    if(e.target.value.length < 1){
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


  return(
    <Box component='form' autoComplete='off' sx={{display:'block', textAlign:'center'}}>
      <RowForm id='email' label='email' error={ud.email.error} onchange={handleChange} helperText={ud.email.helpertext} variant={'outlined'} required value={ud.email.value} type={'email'} />
      <RowForm id='password' label='password' error={ud.password.error} onchange={handleChange} helperText={ud.password.helpertext} variant={'outlined'} value={ud.password.value} type={'password'} />
    </Box>
  )
}
