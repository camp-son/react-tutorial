const ProductRow = (props) => {
  const { name, price, stocked } = props.product;
  return (
    <tr>
      <td style={{ color: stocked ? "black" : "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
