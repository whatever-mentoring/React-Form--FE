import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const formCreate = {
  container: style({
    padding: '20px 0 200px',
    backgroundColor: theme.color.purple.primary,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  }),
  bodySectionWrap: style({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  }),
  sidebar: style({
    position: 'absolute',
    right: '-50px',
    top: '0px',
    height: '34px',
    width: '44px',
    borderRadius: '10px',
    background: theme.color.white.primary,
    display: 'flex',    
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',   
    padding: '10px 0',
  }),
  bodySectionAddButton: style({
    content: '',
    width: '32px',
    height: '32px',    
    margin: '0 auto',
    border: 'none',
    cursor: 'pointer',
    background: 'url(/src/assets/add_round.png) no-repeat right 7px center / 25px'
  }),
  buttonContainer: style({
    width: '768px',        
  }),
  submitButton: style({
    marginTop: '10px',
    padding: '2px 28px',    
    color: theme.color.white.primary,
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '4px',
    backgroundColor: theme.color.purple.secondary,
    border: 'none',
    lineHeight: '36px',
    cursor: 'pointer'
  }),
}

