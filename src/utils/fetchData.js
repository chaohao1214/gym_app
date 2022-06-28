

export const exercisesOptions = {
    method: 'GET',

    headers: {

        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '007b5918bemshca8e98d9d23a66ep1047eajsneeff4ce7dc93',
    }
};


export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
        'X-RapidAPI-Key': '007b5918bemshca8e98d9d23a66ep1047eajsneeff4ce7dc93',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}