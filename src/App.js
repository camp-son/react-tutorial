import './App.css';
import Welcome from './component/Welcome';
import Comment from './component/Comment';
import Toggle from './component/Toggle';
import LoginControl from './component/LoginControl';

function App() {
  return (
    <div>
      <Welcome name="JY" />
      <Welcome name="YJ" />
      <Welcome name="Camp son" />
      <Comment author={{name: 'camp-son', avatarUrl: 'https://avatars.githubusercontent.com/u/69656581?s=460&v=4'}} text="Hello world" date={new Date()}/>
      <Toggle />
      {/* <Greeting isLoggedIn/>
      <Greeting /> */}
      <LoginControl />
    </div>
  );
}

export default App;
