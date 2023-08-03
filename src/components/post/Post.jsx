import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./post.css";

export const Post = () => {
  return (
    <div className="post-wrapper">
        <div className="post-header">
            <div className="post-header-left">
                <a href="/">
                    <Avatar 
                    src="https://www.diken.com.tr/wp-content/uploads/2023/07/20230724-elon-musk.jpg" 
                    sx={{ width:32, height: 32 }} />
                </a>
                <a href="/" className="profile-username">fatihozcan</a>
            </div>
            <div className="post-header-right">
                <button>
                <MoreHorizIcon />
                </button>
            </div>
        </div>
        <div className="post-image"></div>
        <div className="post-bottom"></div>
    </div>
  )
}
