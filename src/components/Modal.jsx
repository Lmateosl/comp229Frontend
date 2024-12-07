import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthContainer from '../container/AuthContainer';
import { display, height } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #007bff',
  boxShadow: 24,
  p: 4,
  height: '60%'
};

export default function ModalAuth({open, auth, handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AuthContainer auth={auth}/>
          <Button variant="contained" onClick={() => handleClose()} sx={{display: 'block', margin: '40px auto'}}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}