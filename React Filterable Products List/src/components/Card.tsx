interface Props {
  name: string;
  category: string;
  price: number;
  image?: string;
}
const Card = ({ name, category, price }: Props) => {
  return (
    <div className="d-flex align-items-stretch my-3">
      <div className="card" style={{ width: " 18rem" }}>
        <img src="src/assets/react.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            Product Name: <span className="fw-bold">{name}</span>
          </h5>
          <p className="card-text">
            Product Category : <span className="fw-bold">{category}</span>
          </p>
          <p className="card-text">
            Product Price: <span className="fw-bold">{price} $</span>
          </p>
          <a href="#" className="btn btn-primary">
            More Details
          </a>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Card;
