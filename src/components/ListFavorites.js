import Favorite from "./Favorite";

function ListFavorites(props) {
  let listFavoritesRendered = props.elements.map((element) => {
    return <Favorite value={element} />;
  });

  return (
    <div>
      <h4>Lista Favoritos</h4>
      {listFavoritesRendered}
    </div>
  );
}

export default ListFavorites;
