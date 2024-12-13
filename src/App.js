import Comments from './Comments';
import './App.css';

function App() {
  const postComments = [
    {id:1, text:"Wow, that is amazing! Good luck!", author: "Logan Sobrilsky"},
    {id:2, text:"Yay! New Person!", author: "Dolce Andromeda"},
    {id:3, text:"I am a bot, this is a comment.", author: "BOT"},
    {id:4, text:"Go away bot, we don't want you here.", author: "John Bloodborne"},
    {id:5, text:"This program teaches you so much! Good luck in the future!", author: "TheOneWhoWatches"}
];
  return (
    <div className="App">
      <h1>Social Media Site</h1><hr/>
      <h3>Hello World!</h3>
      <p>This is my first post on this site! Wish me luck!</p>
      <p>I wonder what I will learn in this program next!</p><hr/>
      <Comments comList = {postComments}/>
    </div>
  );
}

export default App;
