import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = (props) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
