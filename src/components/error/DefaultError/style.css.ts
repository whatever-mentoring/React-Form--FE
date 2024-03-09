import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const defaultError = {
  container: style({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: style({
    fontSize: '24px',
    fontWeight: 'bold',
    color: theme.color.black.primary,
  }),
  link: style({
    marginTop: '20px',
    backgroundColor: theme.color.black.primary,
    color: theme.color.white.primary,
    padding: '8px 30px',
    borderRadius: '4px',
  }),
};

