const ListItem = (props) => {
  return <li>{props.value}</li>;
};

const NumberList = (props) => {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem value={number} key={number} />
      ))}
    </ul>
  );
};

export default NumberList;
