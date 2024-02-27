import { style } from '@vanilla-extract/css';
import { theme } from './theme';

export const form = {
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
    height: '200px',
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
}

