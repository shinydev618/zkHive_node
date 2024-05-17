import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

import { Box, Checkbox, FormControlLabel, Radio } from '@mui/material'

export function Modal({ setOpen, open }: any) {
  const [options, setOptions] = React.useState({ first: false, second: false })
  const handleClose = () => {
    if (options.first && options.second) {
      localStorage.setItem('terms', 'true')
      setOpen(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({ ...options, [event.target.name]: event.target.checked })
  }
  const isDisabled = !options.first || !options.second

  console.log(isDisabled)

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(3px)',
        }}
        sx={{
          borderRadius: '50px',
          background: 'red',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#1d1d03',
            border: '2px solid #fbda00',
            padding: '20px',
            borderRadius: '20px',
          }}
        >
          <div>
            <DialogContent style={{}}>
              <DialogContentText id='alert-dialog-description'>
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  <Checkbox
                    id='first'
                    name='first'
                    onChange={handleChange}
                    sx={{
                      '&.Mui-checked': {
                        color: 'green',
                      },
                    }}
                  />
                  <label htmlFor='first'>
                    I agree to the terms and conditions
                  </label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  <Checkbox
                    id='second'
                    name='second'
                    onChange={handleChange}
                    sx={{
                      '&.Mui-checked': {
                        color: 'green',
                      },
                    }}
                  />
                  <label htmlFor='second'>
                    I am not a resident of any sanctioned country according to
                    EU and / or USA law
                  </label>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={handleClose}
                style={{
                  backgroundColor: isDisabled ? '#1d1d03' : '#fbda00',
                  color: isDisabled ? '#fbda00' : '#1d1d03',
                  textTransform: 'none',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  border: isDisabled
                    ? '1px solid #fbda00'
                    : '1px solid #1d1d03',
                  borderRadius: '8px',
                }}
              >
                Agree
              </Button>
            </DialogActions>
          </div>
        </Box>
      </Dialog>
    </React.Fragment>
  )
}
