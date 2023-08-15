import { Conversation } from "../../../components/converstaion/Conversation";
import { Message } from "../../../components/message/Message";
import { Button } from "@mui/material";
import "./messenger.css";

export const Messenger = () => {
  return ( <div className="messenger">
    <div className="chat-menu">
         <div className="chat-menu-wrapper">
            <input
             type="text"
             className="chat-menu-input" 
             placeholder="Search for Friends" 
             />
             <div>
                <Conversation />
             </div>
         </div>
    </div>
    <div className="chat-box">
        <div className="chat-box-wrapper">
             <div className="chat-box-top">
                <div>
                    <Message /> 
                </div>
             </div>
             <div className="chat-box-bottom">
                <textarea
                  className="chat-message-input"
                  placeholder="Write something..." //KONTROL EDİLECEK NEDEN YAZMIYOR !!!
                ></textarea>
                 <Button color="success" variant="contained" className="chat-submit-button">
                    Send
                 </Button>
             </div>
        </div>
    </div>
    <div className="chat-online">asdas</div> 
  </div> 
  );
};
