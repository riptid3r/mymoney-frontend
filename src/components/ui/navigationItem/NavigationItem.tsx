import { Button, ButtonProps, styled } from '@mui/material'

export const NavigationItem = styled(Button)<ButtonProps>(({ theme }) => ({
  ...theme.mixins.toolbar,
  textTransform: 'none',
  backgroundColor: 'none',
  borderRadius: 0,
  position: 'relative',
  opacity: 0.5,
  transition: 'opacity .3s',
  color: theme.palette.text.primary,
  padding: '2px 10px 0 10px',

  ['&::before']: {
    content: '""',
    width: '0%',
    height: 1,
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    opacity: 0,
    transition: 'width .3s, opacity .3s'
  },

  ['&:hover, &.active']: {
    opacity: 1,
    backgroundColor: 'transparent'
  },

  ['&.active']: {
    ['&::before']: {
      opacity: 1,
      width: '100%'
    }
  }
}))
