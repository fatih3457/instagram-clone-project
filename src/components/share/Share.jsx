import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ShortTextIcon from "@mui/icons-material/ShortText";
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
            <form className='modal-body'>

          <div className="modal-body-top">
          <Avatar
           alt="Remy Sharp" 
           src="https://www.diken.com.tr/wp-content/uploads/2023/07/20230724-elon-musk.jpg"
           sx={{ width:46, height:46  }} />

           <input className='modal-text-input' type='text' placeholder='Write a post.' />
           <Button type='submit' variant='contained' height='10px' > Paylaş </Button>

          </div>
          
          <div className="modal-buttons">

          <button>
              <AddAPhotoOutlinedIcon />
              <b>Fotoğraf</b>
            </button>

            <button>
              <VideoLibraryOutlinedIcon />
              <b>Video</b>
            </button>

            <button>
              <CalendarMonthOutlinedIcon />
              <b>Etkinlik</b>
            </button>

            <button>
              <ShortTextIcon />
              <b>Yazı Yaz</b>
            </button>

          </div>

          <div className="share-img-wrapper">
            <img className='share-img' src="/images/3chicken.jpg" alt="" />
            <CancelOutlinedIcon className='cancel-icon' color='error'/>
          </div>
        </form>
        </Box>
        </Modal>
    </>    
     );
};
