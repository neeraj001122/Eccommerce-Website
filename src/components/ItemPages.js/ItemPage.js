import { useParams } from "react-router-dom";
import { useContext } from "react";
import Header from "../Header/Header";
import ProductReview from "./ProductReview";
import classes from "./ItemPage.module.css";
import Cartctx from "../../Store/creat-context";
import Footer from "../Footer/Footer";

const ItemPage = (props) => {
  const param = useParams();
  const cartctx = useContext(Cartctx);
  const cartshow = () => {
    props.onOpen();
  };
  let tottal = 0;
  cartctx.items.forEach((element) => {
    tottal = tottal + element.quantity;
  });

  const ctx = useContext(Cartctx)
  const addItemHandler = (item) => {
    ctx.addItem(item)
  };
  const output = props.itemList.map((element) => {
    if (element.key === param.productId) {  
      return (
        <div className={classes.div} key={element.key}>
          <h1 className={classes.title}>{element.title}</h1>
          <p className={classes.p}>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham. Where can I get some? There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc. 5 paragraphs words bytes lists Start with 'Lorem ipsum
            dolor sit amet...'
          </p>
          <span>
            <img
              className={classes.img}
              src={element.imageUrl}
              alt={"products"}
            />
          </span>
          <div className={classes.price}>{"$" + element.price}</div>
          <div>
          <button className={classes.button} onClick={addItemHandler.bind(this, element)}>Add to Cart</button>
            <button className={classes.button}>Buy</button>
          </div>
        </div>
      );
    }
  });
  return (
    <div>
      <Header />
      <button className={classes.button} onClick={cartshow}>
        Cart {tottal}
      </button>
      {output}
      <div>
        <ProductReview />
      </div>
      <Footer />
    </div>
  );
};

export default ItemPage;
