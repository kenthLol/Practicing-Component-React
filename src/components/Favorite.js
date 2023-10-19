function Favorite(props) {
  return (
    <div
      className="alert alert-info d-flex align-items-center p-2"
      role="alert"
    >
      <img
        src={props.value.image}
        alt="..."
        style={{ width: "50px", height: "80px", marginRight: "10px" }}
      />
      <div>
        <small style={{ display: "block", wordWrap: "break-word" }}>
          {props.value.title}
        </small>
      </div>
    </div>
  );
}

export default Favorite;
