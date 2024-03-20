import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';

export const Home = {
  container: style({        
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
  }),
  link: style({    
    borderRadius: '10px',
    padding: '15px 0',    
    textAlign: 'center',    
    width: '250px',
    fontWeight: '600',
    color: theme.color.white.primary,    
    backgroundColor: theme.color.purple.secondary,    
    
  }),
};

