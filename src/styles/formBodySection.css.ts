import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from './theme';

export const formBodySection = {
  container: style({
    width: '768px',
    borderRadius: '8px',
    backgroundColor: theme.color.white.primary,  
    padding: "24px",      
    boxSizing: "border-box",    
  })
};


export const formBodySectionHeader = {
  container: style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',    
  }),
  title: style({
    fontSize: '12pt',
    fontWeight: '400',          
    height: '56px',
    padding: "16px",
    outline: 'none',
    border: 'none',
    borderBottom: `1px solid ${theme.color.black.primary}`,
    backgroundColor: `${theme.color.gray.brightest}`,
    boxSizing: "border-box",    
    flex: '1',
    selectors: {
      '&:focus': {
        borderBottom: `2px solid ${theme.color.purple.secondary}`
      },      
      '&::placeholder': {
        color: theme.color.black.primary
      }
    }
  })
}

export const formBodySectionContent = {
  container: style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin: '20px 0'    
  }),
  textInput: style({
    width: '370px',
    padding: '8px 0',
    fontSize: '14px',
    fontWeight: '400',
    border: 'none',
    outline: 'none',
    borderBottom: `0.5px dashed ${theme.color.gray.secondary}`,
    color: theme.color.gray.primary
  }),
  optionInput: style({
    width: '370px',
    padding: '8px 0',
    fontSize: '11pt',
    fontWeight: '400',
    border: 'none',
    outline: 'none',
    borderBottom: `1px solid ${theme.color.gray.secondary}`,    
    marginLeft: '10px',
    selectors: {
      '&:focus': {
        borderBottom: `2px solid ${theme.color.purple.secondary}`
      },      
      '&::placeholder': {
        color: theme.color.gray.primary
      }
    }
  }),
  optionAddButton: style({    
    backgroundColor: theme.color.white.primary,  
    border: 'none',
    outline: 'none',
    color: theme.color.gray.primary,
    padding: '8px 0',
    fontSize: '11pt',    
    fontWeight: '400', 
    marginLeft: '10px',    
    cursor: 'pointer'
  })
}

