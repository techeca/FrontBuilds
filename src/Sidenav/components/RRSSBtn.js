import react from 'react';
import { IconButton } from '@mui/material';
import { Facebook, Twitter, Download, Instagram } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function RRSSBtn({ rs }){

  //Cambia la paleta según el color que se entrega
  function generateColor(color){
    const theme = createTheme({
      palette: { neutral: { main: `${color}` },},});
    return theme;
  }

  //Según nombre de boton retorna icono, color, bgcolor y nombre
  //bgcolor creo que no se utiliza
  function getIcon(rrss){
    let rrssData = {name:rrss, icon:'', bgColor:'', color:''}

    switch (rrss) {
      case 'Facebook':
          rrssData.icon = <Facebook />
          rrssData.bgColor = 'white'
          rrssData.color = '#2d64f1'
        break;
      case 'Twitter':
          rrssData.icon = <Twitter />
          rrssData.color = '#88a1df'
        break;
      case 'Instagram':
          rrssData.icon = <Instagram />
          rrssData.color = '#a988df'
        break;
      case 'Download':
          rrssData.icon = <Download />
          rrssData.color = '#cbcd65'
        break;
      default:
          rrssData.icon = <Download />
          rrssData.color = 'black'
          rrssData.bgColor = 'white'
    }
    return rrssData
  }

  //ThemeProvider para que podamos cambiar los colores
  return (
  <ThemeProvider theme={generateColor(getIcon(rs).color)}>
  <IconButton className='mybtnrrss' size='small' sx={{ color:getIcon(rs).color, border:'2px solid', mr:1}}>
       {getIcon(rs).icon}
  </IconButton>
  </ThemeProvider>
  )
}
