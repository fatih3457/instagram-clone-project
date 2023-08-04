import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
        <div className="post-image">
            <img src="/images/1beef.jpg" alt="Post Img" />
        </div>
        <div className="post-bottom">
            <div className="post-like">
                <button>
                    <FavoriteIcon className="post-like-icon active"/>
                </button>
            </div>
            <span className="post-like-count">0 like</span>
            <div className="post-content">
                <a href="/" className="profile-username">
                    fatihozcan
                </a> {" "}
                <span className="post-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates a nostrum sunt aut soluta quos voluptas quis dignissimos porro doloremque!
                </span>
            </div>
            
            <div className="post-time">1 dakika önce</div>
        </div>
    </div>
  )
}
