import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

//Tambien me lo robé //documentació mui - badges example
//Al insertarlo en la web el centro se movió un poco a la izquierda, asi que lo centré
//top: 0,
//left: 0,
//hay que controlar el color, actualmente solo está en rojo
export const StyledBadge = styled(Badge)(({ theme, logged }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: logged,
    color: logged,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.5s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
