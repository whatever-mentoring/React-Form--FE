import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const formHeader = {
  container: style({        
    width: '100%',
    height: '98px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',    
    zIndex: '100',
    backgroundColor: theme.color.white.primary,    
    borderBottom: '1px solid rgb(218, 220, 224)'
  }),
  buttons: style({    
    marginTop: '15px',
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'end',
    gap: '20px',
    marginRight: '20px',
  }),
  button: style({    
    color: '#fff',
    fontSize: '13px',
    fontWeight: '400',
    borderRadius: '4px',
    backgroundColor: 'rgb(103, 58, 183)',
    border: 'none',
    padding: '10px 20px',                
    cursor: 'pointer',
  }),
  tabs: style({        
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'center',        
    listStyle: 'none'
    
  }),
  tab: style({        
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '6px 12px',    
  }),
  active: style({    
    fontWeight: '600',
    color: theme.color.purple.secondary,
    borderBottom: `3px solid ${theme.color.purple.secondary}`, 
  }),
};

