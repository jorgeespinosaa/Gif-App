import GifCard from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifList({ item }) {
  const { data, loading } = useFetchGifs(item);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{item}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      <div className="card-grid">
        <ol>
          {data.map((item) => (
            <GifCard key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default GifList;
