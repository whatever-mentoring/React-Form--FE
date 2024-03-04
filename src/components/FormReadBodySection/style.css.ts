import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';

export const formReadBodySection = {
  container: style({
    width: '640px',
    borderRadius: '8px',
    backgroundColor: theme.color.white.primary,  
    padding: "24px",      
    boxSizing: "border-box",    
  }),
  title: style({
    fontSize: '15px',
    fontWeight: '400',          
    height: '40px',    
  }),
  textInput: style({
    width: '100%',
    padding: '8px 0',
    fontSize: '14px',
    fontWeight: '400',
    border: 'none',
    outline: 'none',
    borderBottom: `0.5px dashed ${theme.color.gray.secondary}`,
    color: theme.color.gray.primary
  }),
  options: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }),
  option: style({
    display: 'flex',
    gap: '10px',
    fontSize: '16px'
  })
}
