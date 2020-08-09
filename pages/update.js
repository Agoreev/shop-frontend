import UpdateItem from "../components/updateItem";

const Update = (props) => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Update;
