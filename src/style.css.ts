import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const firstBox = style({
  height: '173px',
  borderRadius: '24px',
  backgroundColor: '#D8DAE4',
  display: 'flex',
  alignItems: 'flex-end',
  textAlign: 'center',
  position: 'relative',
  paddingBottom: '12px',
  justifyContent: 'center',
});

const secondBox = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: '#FFFFFF',
  padding: '1rem 1rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '.5rem',
  borderRadius: '24px',
  width: '100%',
});

const img = style({
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%, 0)',
  marginBottom: '-3rem',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 0',
});

export const appSt = {
  bottomBtn,
  container,
  firstBox,
  secondBox,
  img,
  row,
};
