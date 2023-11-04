import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function SingleImage() {
  const data = useContext(GlobalContext)
  console.log(data);
  const { id } = useParams();
  const url = `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_APP_ACCESS_KEY
  }`;
  const { data: image, error, isPending } = useFetch(url);

  return (
    <div>
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
      {image && (
        <>
          <div className="image_and_author">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              height={500}
            />

            <div>
              <h2 className="author">AUTHOR:</h2>

              <img
                className="profile_image"
                src={image.user.profile_image.large}
                alt=""
              />
            </div>
          </div>

          <div>
            <h4>Author instagram:</h4>
            <p>@{image.user.instagram_username || "No username"}</p>
          </div>
          <hr />

          <div>
            <h2>Description:</h2>
            <p>{image.description || "No Description"}</p>
          </div>
          <hr />

          <div>
            <h4>LOCATION:</h4>
            <p className="location">{image.location.name}</p>
          </div>
          <hr />

          {image.likes && <h3>Likes: {image.likes}❤️</h3>}

          <hr />
        </>
      )}
    </div>
  );
}

export default SingleImage;
