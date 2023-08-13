import { Conversation } from "../../../components/converstaion/Conversation";
import "./messenger.css";

export const Messenger = () => {
  return <div className="messenger">
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
    <div className="chat-box">asdas</div>
    <div className="chat-online">asdas</div>
  </div> 
}
