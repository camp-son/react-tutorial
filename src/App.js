import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => <li>{number}</li>);
// const posts = [
//   { id: 1, title: "Hello world", content: "Welcome to learning React !" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ];

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  return (
    <div>
      <FilterableProductTable products={products} />
      {/* <Welcome name="JY" /> */}
      {/* <Welcome name="YJ" /> */}
      {/* <Welcome name="Camp son" /> */}
      {/* <Comment
        author={{
          name: "camp-son",
          avatarUrl:
            "https://avatars.githubusercontent.com/u/69656581?s=460&v=4",
        }}
        text="Hello world"
        date={new Date()}
      /> */}
      {/* <Toggle /> */}
      {/* <Greeting isLoggedIn/>
      <Greeting /> */}
      {/* <LoginControl /> */}
      {/* <ul>{listItems}</ul> */}
      {/* <NumberList numbers={numbers} /> */}
      {/* <Blog posts={posts} /> */}
      {/* <NameForm /> */}
      {/* <EssayForm /> */}
      {/* <FlavorForm /> */}
      {/* <Reservation /> */}
      {/* <Calculator /> */}
      {/* <WelcomeDialog /> */}
    </div>
  );
}

export default App;
