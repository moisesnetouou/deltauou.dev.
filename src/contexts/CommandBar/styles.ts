import { KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';
import { styled } from '@stitches/react';

export const Box = styled('div');

export const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
  zIndex: '99999',
});

export const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: 'rgba(255, 255, 255, 0.05)',
});

export const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '#f2f2f2',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },
});

export const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: 'rgba(255, 255, 255, 0.05)',
  color: '#f2f2f2',
});

export const getResultStyle = (active: boolean) => {
  return {
    padding: '12px 16px',
    background: active
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '#f2f2f2' : '#8f9ba8',
  };
};

export const Icon = styled('i', {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
});

export const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
});

export const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
});

export const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
