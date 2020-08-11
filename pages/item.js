import SingleItem from "../components/singleItem";

const Item = (props) => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
