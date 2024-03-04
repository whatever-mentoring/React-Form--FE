import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';

export const formReadHeaderSection = {
  container: style({
    width: '640px',
    borderTop: `10px solid ${theme.color.purple.secondary}`,    
    borderRadius: '8px',
    backgroundColor: theme.color.white.primary,    
    display: "flex",    
    flexDirection: "column",    
    padding: "0px 24px",
    boxSizing: "border-box",    
  }),
  title: style({    
    fontSize: '24pt',
    fontWeight: '400',          
    height: '48px',
    marginBottom: '8px',
    outline: 'none',
    border: 'none',    
  }),
  description: style({    
    fontSize: '11pt',    
    lineHeight: '15px',    
    height: '21px',
    outline: 'none',
    border: 'none'    
  }),
};

