const api_key = 'NPMd5G3ixfnxMxybGNHFY8Qx2DKNWokK';
const limit = 5;
const api = 'https://api.giphy.com/v1/gifs/search';

export const fetchGifs = async (gifToSerch) => {

    let res = await fetch(`${api}?api_key=${api_key}&q=${gifToSerch}&limit=${limit}`);

    let data = await res.json();
    
    let gifs = data.data.map(d => ({
        id: d.id, 
        title: d.title, 
        img_ref: d.images.downsized_medium.url
    }));

    return gifs;
};