import React from "react";
import PropTypes from "prop-types";
export default function Item(props) {
  // console.log(JSON.stringify(props, null, 4));
  const name = props.product.name;
  const price = props.product.price;
  const imgURL = props.product.imgUrl;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <img
          src={imgURL}
          className="img-responsive"
          style={{ width: "100%", height: "auto", maxWidth: "150px" }}
        />
      </td>
      <td></td>
    </tr>
  );
}
Item.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imgURL: PropTypes.string,
  }),
};
