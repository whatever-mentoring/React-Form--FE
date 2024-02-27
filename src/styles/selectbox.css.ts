import { style } from '@vanilla-extract/css';
import { theme } from './theme';

export const selectbox = {
  container: style({
    position: 'relative',
    width: '210px',    
  }),
  label: style({
    padding: '8px 30px',
    borderRadius: '4px',
    height: '48px',
    boxSizing: 'border-box',
    width: '100%',
    border: `1px solid ${theme.color.gray.secondary}`,
    outline: 'none',
    appearance: 'none',
    background: 'url(/src/assets/arrow_down.png) no-repeat right 16px center / 18px', 
    cursor: 'pointer',
    textAlign: 'start'
  }),
  options: style({
    position: 'absolute',
    top: '33px',
    right: '0',
    width: '99%',
    listStyle: 'none',
    cursor: 'pointer',
    zIndex: '1',
    border: `1px solid ${theme.color.gray.secondary}`,
    // boxSizing: 'border-box',
    padding: '0'
  }),
  option: style({
    height: '48px',
    // width: '100%',
    background: theme.color.white.primary,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '30px',
    boxSizing: 'border-box',
    zIndex: '1',
  }),
  selectedOption: style({
    background: theme.color.blue.secondary,    
  }),
};

