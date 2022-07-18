import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';

export default function NewCard({ title, summary, pathNew, image }){

  //const newData = {title:title, summary:summary, pathNew:pathNew, image:image}

  function checkSummary(sum){
    let data = sum;
      data = data.substring(0,117);
      data = data+'...';

    return data
  }

  return(
    <Grid item xs={12} md={6} lg={6} sx={{mt:1, p:3}}>
      <Card sx={{ width: '100%', border:'1px solid #686868', borderRadius:0}}>
          <CardActionArea sx={{display:'flex'}}>
            <Grid container>
              <Grid item xs={12} md={12} lg={12} xl={6}>
                <CardMedia component="img" height="200" image={image} alt="green iguana" />
              </Grid>
              <Grid item xs={12} md={12} lg={12} xl={6} sx={{bgcolor:'#25272a'}}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{color:'white'}}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{color:'#b9bcbf'}}>
                    {checkSummary(summary)}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
      </Card>
    </Grid>
  )
}
