import { TextField, Typography  } from '@mui/material';

function capitalize(word){
  return word[0].toUpperCase() + word.slice(1);
}

export function RowForm({ id, label, error, helperText, variant, value, onchange, type }){

  return(
    <TextField id={id}
               label={<Typography sx={{color:error ? 'red' : 'gray'}}>{capitalize(label)}</Typography>}
               color='neutral'
               variant={variant}
               sx={{width:'80%', mb:1, input: { color:error ? 'red' : 'gray'}, mb:2}}
               helperText={<Typography variant='a' sx={{color:error ? ' ' : 'gray'}}>{helperText}</Typography>}
               error={error}
               size="small"
               value={value}
               onChange={onchange}
               type={type}/>
  )
}
