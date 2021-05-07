import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <ListItem data={products} />
    </div>
  );
}

const products = [
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "CHECK PRINT SHIRT",
    price: 110,
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "GLORIA HIGH LOGO SNEAKER",
    price: 91,
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "CATE RIGID BAG",
    price: 94.5,
  },
];

export default App;
