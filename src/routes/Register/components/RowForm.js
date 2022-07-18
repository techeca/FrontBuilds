import { TextField, Typography  } from '@mui/material';

function capitalize(word){
  return word[0].toUpperCase() + word.slice(1);
}

export function RowForm({ id, label, error, helperText, variant, value, onchange, type }){

  return(
    <TextField sx={{width:'80%', m:1}} id={id}
               label={<Typography sx={{color:error ? 'red' : 'gray'}}>{capitalize(label)}</Typography>}
               color='neutral'
               error={error}
               onChange={onchange}
               sx={{width:'80%', mb:1, input: { color:error ? 'red' : 'gray'}, mb:2}}
               helperText={<Typography variant='a' sx={{color:error ? ' ' : 'gray'}}>{helperText}</Typography>}
               variant={variant}
               value={value}
               type={type}
               size="small"/>
  )
}
