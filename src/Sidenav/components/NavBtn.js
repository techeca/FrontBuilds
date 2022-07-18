import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Feed, AddCircle, Download } from '@mui/icons-material';
import { Link } from "react-router-dom";

export function NavBtn({ categoria, activePage, changePage }){
  let cat = {name:categoria, icon:``, path:`/${categoria}`, color:''};
  let selectPage = activePage === categoria ? true : false;
  switch (categoria) {
    case 'Home':
        cat.icon = <Home />;
        cat.path = '/Home';
      break;
    case 'News':
        cat.icon = <Feed />;
        cat.path = '/News';
      break;
    case 'Register':
        cat.icon = <AddCircle />;
        cat.path = '/Register';
      break;
    case 'Download':
        cat.icon = <Download />;
        cat.path = '/Download';
      break;
  }

  return (
  <Link className={'myNavLink'} to={cat.path} style={{textDecoration:'none'}}>
    <ListItem sx={{mb:-2}}>
      <ListItemButton className='myNavBtn' selected={selectPage} onClick={() => changePage(categoria)}>
        <ListItemIcon sx={{color:'white'}}>
          {cat.icon}
          <ListItemText primary={cat.name} sx={{ml:1, pr:1, color:'#bcbfc4'}} />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
 </Link>
  )
}
