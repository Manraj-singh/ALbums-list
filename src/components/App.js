import { useAlbums } from "../hooks";
import Album from "./Album";
import Loader from "./Loader";
import Navbar from "./Navbar";

function App() {
  const albums = useAlbums();
  if (albums.loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      {console.log("app rendered")}
      <ul className="tilesWrap">
        {albums.data.map((alb) => {
          return <Album data={alb} key={alb.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
