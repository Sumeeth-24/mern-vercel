import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const Logo = () => {
  const theme = useTheme();

  return (
    // <Typography fontWeight="700" fontSize="1.7rem">
    //   Film<span style={{ color: theme.palette.primary.main }}>Flix</span>
    // </Typography>

     <Link to="/"  style={{ display: 'flex', justifyContent: 'center',padding: '10% 0'}}>
        <img
          style={{ width:'70%', fontSize:"1.7rem" }}
          src={theme.palette.primary.main === 'light' ? redLogo : blueLogo}
          alt="Filmpire logo"
        />
      </Link>
  );
};

export default Logo;