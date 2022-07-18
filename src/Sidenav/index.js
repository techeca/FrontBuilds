import react from 'react';
import { useState } from 'react'
import { MaterialUISwitch } from './components/MUISwitch.js';
import { StyledBadge } from './components/StyledBadge.js';
import { RRSSBtn } from './components/RRSSBtn.js';
import { NavBtn } from './components/NavBtn.js';
import { theme } from './components/MyColorsh.js';
import { Box, Typography, Avatar, Divider, List, FormControlLabel, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import { Link, useLocation } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

export default function Sidenav(){
  //Aqui debería ir context para cargar datos de usuario
  const sampleLocation = useLocation();
  const [activePage, setActivePage] = useState(sampleLocation ? sampleLocation.pathname.replace('/', '') : '' )
  let logged = false;
  const rrss = ['Facebook', 'Twitter', 'Instagram', 'Download'];
  const categorias = ['Home', 'Register', 'Download'];

  return (
    <Box sx={{border:'0px solid black', minHeight:'100vh', bgcolor:'#25272a'}}>
      <header>
      <Typography variant='h5' sx={{textAlign:'center', pt:3, fontWeight:'bold', color:'white'}}>Anon</Typography>
       {/*Avatar*/}
       <Box sx={{ margin:'10px', display:'flex', justifyContent:'center'  }}>
          <Stack direction="row" spacing={2}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" logged={logged ? '#44b700' : 'red'}>
              <Avatar sx={{ bgcolor: '#222222', width:128, height:128, mt:2}} />
            </StyledBadge>
          </Stack>
       </Box>
       {/*Button de login*/}
       <Box sx={{display:'flex', justifyContent:'center'}}>
        <Link  to={'/Login'} style={{textDecoration:'none'}}>
        <ThemeProvider theme={theme}>
          <Button color='neutral' variant='outlined' sx={{color:'white' , borderColor:'black', border:'1px solid black'}} endIcon={<LoginIcon />}>Login</Button>
        </ThemeProvider>
          </Link>
       </Box>
       {/*Descripcion*/}
       <Typography sx={{margin:3, mt:3, textAlign:'center', color:'white'}}>
           Wubba lubba dub dub!
           It probably has space aids.
       </Typography>
       {/*RRSS*/}
       <Box sx={{display:'flex' ,justifyContent:'space-around', mx:5, mb:3}}>
        {rrss.map((rs) => <RRSSBtn className='rrssbtn' key={rs} rs={rs} />)}
       </Box>
       <Divider variant="middle" sx={{bgcolor:'#565f6b'}} />
       {/*Navegación - categorias*/}
       <List sx={{mr:'10px'}}>
        {categorias.map((categoria) => <NavBtn key={categoria} categoria={categoria} changePage={setActivePage} activePage={activePage} />)}
       </List>
       <Divider variant="middle" sx={{bgcolor:'#565f6b', mt:2}} />
       <Box sx={{display:'flex', justifyContent:'center', ml:3}}>
        <FormControlLabel control={<MaterialUISwitch sx={{ m:2, mt:3 }} defaultChecked />} label="" />
       </Box>
      </header>
    </Box>
  )
}
