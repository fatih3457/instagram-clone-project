import { Avatar, Button } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./profile.css"

export const Profile = () => {
  return (
    <div className="container">
        <div className="profile-page">
        <div className="profile-head">
            <div className="head-left">
                <Avatar 
                    src="https://www.diken.com.tr/wp-content/uploads/2023/07/20230724-elon-musk.jpg" 
                    sx={{ width:150, height: 150 }} />
            </div>
            <div className="head-right">
                <div className="head-right-top">
                    <span className="profile-username">fatihozcan</span>
                    <div className="profile-page-buttons">
                        <Button variant="contained" size="small">Düzenle</Button>
                        <button>
                            <SettingsOutlinedIcon />
                        </button>
                        <button>
                            <LogoutOutlinedIcon color="error" />
                        </button>
                    </div>
                </div>
                <div className="head-right-center">center</div>
                <div className="head-right-bottom">bottom</div>
            </div>
        </div>
        <div className="profile-body"></div>
        </div>
        
    </div>
  );
}
