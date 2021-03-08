import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      isOnlyStock: false,
    };
  }

  handleChangeKeyword({ target }) {
    this.props.onChangeKeyword(target.value);
  }

  handleToggleStock({ target }) {
    this.props.onToggleStock(target.checked);
  }

  render() {
    const { keyword, isOnlyStock } = this.props;

    return (
      <div>
        <input
          type="text"
          value={keyword}
          onChange={this.handleChangeKeyword.bind(this)}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={isOnlyStock}
            onChange={this.handleToggleStock.bind(this)}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
