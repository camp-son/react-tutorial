import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  const categories = props.products
    .filter((product) => product.name.includes(props.keyword))
    .filter((product) => (props.isOnlyStock ? product.stocked : true))
    .sort(
      (prev, next) =>
        prev.category.split("").reduce((s, c) => s + c.charCodeAt(), 0) -
        next.category.split("").reduce((s, c) => s + c.charCodeAt(), 0)
    )
    .reduce((arr, product) => {
      const category = arr.findIndex(
        ({ props }) =>
          (props.product ? props.product.category : props.category) ===
          product.category
      );

      if (category === -1) {
        arr.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }

      arr.push(<ProductRow key={product.name} product={product} />);

      return arr;
    }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{categories}</tbody>
    </table>
  );
};

export default ProductTable;
