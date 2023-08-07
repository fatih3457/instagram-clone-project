import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./share.css"

export const Share = ({ open , handleClose}) => {
  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

  return (
    <>
      <Modal open={open} onClose={handleClose} className='modal'
      >
        <Box className="modal-box">
            <div className="modal-head">
                <Typography variant='span'>Create New Post</Typography>
            </div>
        </Box>
      </Modal>
    </>    
     );
};
