import react from 'react';
import NewCard from './components/NewCard.js'
import { Box, Paper, Typography, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function Download(){

  return (
    <Box className='contentClass'>
    <Box sx={{borderLeft:'6px solid #3a3a3a'}}>
      <Typography variant="h4" sx={{fontWeight:'bold', mt:3, ml:2, color:'#f3f3f4', textAlign:'left'}}>Download</Typography>
    </Box>
      <Box component='form' container sx={{display:'flex', m:5, justifyContent:'center'}}>
        <Paper sx={{p:3, width:'200px', height:'200px', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'0px', border:'1px solid gray', bgcolor:'#25272a', justifyContent:'center'}}>
          <DownloadIcon sx={{color:'white', fontSize:90}} />
          <Stack spacing={2} sx={{mt:3}} direction="row">
            <Button color='success' variant="contained">Download</Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}
