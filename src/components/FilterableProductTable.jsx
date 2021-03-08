import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      isOnlyStock: false,
    };
  }

  handleChangeKeyword(value) {
    this.setState({
      keyword: value,
    });
  }

  handleToggleStock(checked) {
    this.setState({
      isOnlyStock: checked,
    });
  }

  render() {
    const { keyword, isOnlyStock } = this.state;

    return (
      <div>
        <SearchBar
          keyword={keyword}
          isOnlyStock={isOnlyStock}
          onChangeKeyword={this.handleChangeKeyword.bind(this)}
          onToggleStock={this.handleToggleStock.bind(this)}
        />
        <ProductTable
          keyword={keyword}
          isOnlyStock={isOnlyStock}
          products={this.props.products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
