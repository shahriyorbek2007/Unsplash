import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Gallary({ data: { results } }) {
  const { addNewImage } = useContext(GlobalContext);
  return (
    <div className="gallary">
      <ul>
        {results.map((image) => {
          return (
            <li key={image.id}>
              <Link to={`singlepage/${image.id}`}>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  width={300}
                  height={300}
                />
              </Link>
              <button onClick={() => addNewImage(image)} className="like">
               like❤️
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallary;
