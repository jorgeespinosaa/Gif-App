export const getGifs = async ( item ) => {
  const api_key = "key=wleUzsraaY40KlEPyQQTNhU4qAQvyMDe";
  const urlApi = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(item)}&limit=10&${api_key}`;

  const res = await fetch(urlApi);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      urlimg: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

