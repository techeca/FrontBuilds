import { react, useState } from 'react';
import { Box, Paper, Typography, Stack, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LoginIcon from '@mui/icons-material/Login';
import PageviewIcon from '@mui/icons-material/Pageview';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './MyColorsh.js';
import { MainContext } from '../Context/MainContext.js';
import { useContext } from 'react'

export default function Home(){
  const data = useContext(MainContext);
  //console.log(data.builds.length)

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
  createData(1, 'Test Data', 'usertest', 'Yopuka', '1 - 20', 4.0),
  createData(2, 'Test Data 2', 'usertest 2', 'Ocra', '60 - 150', 4.3),
  createData(3, 'Test Data 3', 'usertest 3', 'Osamodas', '200', 6.0),
  ];

  return (
    <Box className='contentClass'>
    <Box sx={{borderLeft:'6px solid #3a3a3a'}}>
      <Typography variant="h4" sx={{fontWeight:'bold', mt:3, ml:2, color:'#f3f3f4', textAlign:'left'}}>Home</Typography>
    </Box>
      <Box container sx={{display:'flex', m:5, justifyContent:'center'}}>
        <Paper className='' sx={{p:3, width:'80%', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'6px', border:'0px solid gray', bgcolor:'#25272a', justifyContent:'center'}}>
          <Typography sx={{color:'gray', fontSize:14, m:2}}>Welcome to your Home</Typography>
          <Typography sx={{color:'gray', fontSize:12, m:1}}>Oh, wow. That's an intense line of questioning, Snuffles, I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?!, You don't get to tell me what to look at. I've seen your Pornhub account. Also, who makes a Pornhub account?</Typography>
          <Stack spacing={2} sx={{m:1, display:'flex', justifyContent:'flex-end'}} direction="row">

          </Stack>
        </Paper>
      </Box>

      <Box container sx={{display:'flex', pt:6, justifyContent:'center', pb: 6}}>
        <TableContainer component={Paper} sx={{p:3, width:'80%', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'6px', border:'0px solid gray', bgcolor:'#25272a', justifyContent:'center'}}>
          <Typography sx={{color:'gray', fontSize:24}}>Last Builds</Typography>
          <Table sx={{ bgcolor:'#25272a' }} aria-label="build list">
            <TableHead>
              <TableRow sx={{color:'gray'}}>
                <TableCell sx={{color:'gray', borderBottom: '1px solid #595d60'}}>ID</TableCell>
                <TableCell sx={{color:'gray', borderBottom: '1px solid #595d60'}}>Created by</TableCell>
                <TableCell sx={{color:'gray', borderBottom: '1px solid #595d60'}}>Class</TableCell>
                <TableCell align="right" sx={{color:'gray', borderBottom: '1px solid #595d60'}}>Lv</TableCell>
                <TableCell align="right" sx={{color:'gray', borderBottom: '1px solid #595d60'}}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.builds.length > 0 ? data.builds.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0, color:'gray', borderBottom: '1px solid #595d60' } }}>
                  <TableCell component="th" scope="row" sx={{color:'gray', borderBottom: '1px solid #595d60'}}>{row.name}</TableCell>
                  <TableCell sx={{color:'gray', borderBottom: '1px solid #595d60'}}>{row.calories}</TableCell>
                  <TableCell sx={{color:'gray', borderBottom: '1px solid #595d60'}}>{row.fat}</TableCell>
                  <TableCell align="right" sx={{color:'gray', borderBottom: '1px solid #595d60'}}>{row.carbs}</TableCell>
                  <TableCell align="right" sx={{color:'gray', borderBottom: '1px solid #595d60'}}>
                  <ThemeProvider theme={theme}>
                    <IconButton color='neutral' aria-label="details" size="large">
                      <PageviewIcon fontSize="inherit" />
                    </IconButton>
                  </ThemeProvider>
                  </TableCell>
                </TableRow>
              )) :
              <TableRow>
                <TableCell sx={{color:'gray', borderBottom: '0px solid #595d60'}}>
                <Typography>No data</Typography>
                </TableCell>
              </TableRow>
            }
            </TableBody>
          </Table>
          </TableContainer>
      </Box>

    </Box>
  );
}
