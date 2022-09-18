import AddCategory from "./AddCategory";
import GifList from "./GifList";
import { useState } from "react";

function GifApp() {
  const [category, setCategory] = useState(["Goku"]);

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <ol>
        {category.map((item) => (
          <GifList key={item} item={item} />
        ))}
      </ol>
    </>
  );
}

export default GifApp;
