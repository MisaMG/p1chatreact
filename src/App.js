import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="1c9b1e3f-2d06-4376-bf59-bc64fbaba554"
        userName="Misael"
        userSecret="misael"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.mazooonaaaaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
