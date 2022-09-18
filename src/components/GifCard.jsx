function GifCard({ item }) {

    console.log(item)

  return (
    <li className="card animate__animated animate__fadeIn">
      <p >{item.title}</p>
      <img src={item.urlimg} />
    </li>
  );
}

export default GifCard;
