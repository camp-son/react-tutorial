import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Comment from './component/Comment';

function App() {
  return (
    <div>
      <Welcome name="JY" />
      <Welcome name="YJ" />
      <Welcome name="Camp son" />
      <Comment author={{name: 'camp-son', avatarUrl: 'https://avatars.githubusercontent.com/u/69656581?s=460&v=4'}} text="Hello world" date={new Date()}/>
    </div>
  );
}

export default App;
