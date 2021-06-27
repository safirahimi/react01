import "./styles.css";
import { useState, useEffect } from "react";
import ImageCards from "./components/ImageCards";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const myKey = "15726134-d017a2b0387bc7c4298b63506";
  const api = "https://pixabay.com/api/";

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${myKey}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl">No Images Found!</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gaps-4">
          {images.map((image) => (
            <ImageCards key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
