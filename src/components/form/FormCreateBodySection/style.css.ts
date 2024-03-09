import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const formCreateBodySection = {
  container: style({
    width: '768px',
    borderRadius: '8px',
    backgroundColor: theme.color.white.primary,  
    padding: "24px 24px 0",      
    boxSizing: "border-box",    
  })
};


export const formCreateBodySectionHeader = {
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

export const formCreateBodySectionContent = {
  container: style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin: '20px 0 40px'    
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

export const formCreateBodySectionFooter = {
  container: style({
    width: '100%',
    height: '65px',
    borderTop: `1px solid ${theme.color.gray.tertiary}`,
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '22px',    
  }),
  deleteButton: style({
    width: '19px',
    height: '19px',
    background: 'url(/src/assets/delete.png) no-repeat center / 100%', 
    border: 'none',
    cursor: 'pointer',    
  }),
  divider: style({   
    borderLeft: `1px solid rgb(218,220,224)`,
    height: '32px', 
  }),
  requiredToggle: style({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }),
  requiredToggleText: style({
    fontSize: '14px',
    fontWeight: '400',    
  }),
  requiredToggleButton: style({    
    appearance: 'none',    
    position: 'relative',
    border: 'none',
    width: '40px',
    height: '15px',    
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: theme.color.gray.secondary,
    '::before': {
      content: '',
      position: 'absolute',      
      top: '-3px',
      right: '20px',
      width: '20px',
      height: '20px',
      backgroundColor: theme.color.white.primary,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      borderRadius: '50%',
      transition: '0.3s',
    },
    selectors: {
      '&:checked': {
        backgroundColor: theme.color.purple.primary,        
      },      
      '&:checked::before': {
        right: '0px',
        backgroundColor: theme.color.purple.secondary,        
      }      
    },
  })


}

