import "./App.css";
import Welcome from "./component/Welcome";
import Comment from "./component/Comment";
import Toggle from "./component/Toggle";
import LoginControl from "./component/LoginControl";
import NumberList from "./component/NumberList";
import Blog from "./component/Blog";
import NameForm from "./component/NameForm";
import EssayForm from "./component/EssayForm";
import FlavorForm from "./component/FlavorForm";
import Reservation from "./component/Reservation";

const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => <li>{number}</li>);
const posts = [
  { id: 1, title: "Hello world", content: "Welcome to learning React !" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

function App() {
  return (
    <div>
      <Welcome name="JY" />
      <Welcome name="YJ" />
      <Welcome name="Camp son" />
      <Comment
        author={{
          name: "camp-son",
          avatarUrl:
            "https://avatars.githubusercontent.com/u/69656581?s=460&v=4",
        }}
        text="Hello world"
        date={new Date()}
      />
      <Toggle />
      {/* <Greeting isLoggedIn/>
      <Greeting /> */}
      <LoginControl />
      {/* <ul>{listItems}</ul> */}
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation />
    </div>
  );
}

export default App;
