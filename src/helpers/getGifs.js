
export const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ruKxqzVdhxchaOgAAYOTeDgvB3MMBtVT`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => { //en la constante gif hay un arreglo de 10 objetos. cada uno contiene 3 propiedades.
        return { 
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url 
        };
    });
  
    return gifs;
}