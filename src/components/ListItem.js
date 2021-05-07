import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
export default function ListItem(props) {
  // const product = [];
  const data = props.data;
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((product) => {
            return <Item key={product.name} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
ListItem.defaultProps = {
  name: "Undefied",
  price: "0.000 BHD",
  imgUrl: "https://google.com",
};

ListItem.protoTypes = {
  data: PropTypes.object,
};
