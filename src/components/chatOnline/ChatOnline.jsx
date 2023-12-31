import { Avatar } from "@mui/material";
import "./chatOnline.css"

export const ChatOnline = () => {
  return (
    <div className="chat-online">
        <div className="chat-online-friend">
            <div className="chat-online-img-container">
            <Avatar src="/images/1beef.jpg" />
            <span className="chat-online-badge"></span>
            </div>
            <div className="chat-online-name">rasitozcan</div>
        </div>
    </div>
  )
}
