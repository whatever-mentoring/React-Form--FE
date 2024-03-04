import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const formRead = {
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
  buttonContainer: style({
    width: '640px'    
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

