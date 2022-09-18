import PropTypes from "prop-types";
import { useState } from "react";

function AddCategory({ setCategory }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory((cat) => [input, ...cat]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Agrega una categoria"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategory;
