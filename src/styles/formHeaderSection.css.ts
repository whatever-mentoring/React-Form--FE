import { style } from '@vanilla-extract/css';
import { theme } from './theme';

export const formHeaderSection = {
  container: style({
    width: '768px',
    borderTop: `10px solid ${theme.color.purple.secondary}`,
    borderLeft: `6px solid ${theme.color.blue.primary}`,
    borderRadius: '8px',
    backgroundColor: theme.color.white.primary,    
    display: "flex",    
    flexDirection: "column",    
    padding: "24px 24px",
    boxSizing: "border-box",    
  }),
  title: style({    
    fontSize: '24pt',
    fontWeight: '400',          
    height: '48px',
    marginBottom: '8px',
    outline: 'none',
    border: 'none',
    borderBottom: `1px solid ${theme.color.gray.secondary}`,
    selectors: {
      '&:focus': {
        borderBottom: `2px solid ${theme.color.purple.secondary}`
      },      
      '&::placeholder': {
        color: theme.color.black.primary
      }
    }
  }),
  description: style({    
    fontSize: '11pt',    
    lineHeight: '15px',    
    height: '21px',
    outline: 'none',
    border: 'none',
    borderBottom: `1px solid ${theme.color.gray.secondary}`,
    selectors: {
      '&:focus': {
        borderBottom: `2px solid ${theme.color.purple.secondary}`
      },      
    }
  }),
};

