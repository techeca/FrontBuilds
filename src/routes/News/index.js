import react from 'react';
import NewCard from './components/NewCard.js'
import { Box, Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';

export default function News(){
  const colorsh = {bgColor:'#151e29', color:'#f3f3f4'}

  return (
    <Box className='contentClass' sx={{p:5, textAlign:'center'}}>
    <Box sx={{borderLeft:'6px solid #3a3a3a'}}>
      <Typography variant="h4" sx={{fontWeight:'bold', mt:3, ml:2, color:colorsh.color, textAlign:'left'}}>News</Typography>
    </Box>
      <Grid container sx={{display:'flex'}}>

      <NewCard title={'Other News'} summary={`Rick, is this a Saw thing? Are you seriously Sawing the Vindicators?`} pathNew={'#'} image={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} />
      <NewCard title={'A new'} summary={`We're gonna nine eleven this bitch unless Morty gets better math grades!`} pathNew={'#'} image={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} />
      <NewCard title={'A new'} summary={`We're gonna nine eleven this bitch unless Morty gets better math grades!`} pathNew={'#'} image={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} />
      <NewCard title={'A new'} summary={`We're gonna nine eleven this bitch unless Morty gets better math grades!`} pathNew={'#'} image={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} />

      </Grid>

    </Box>
  )
}
