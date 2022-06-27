

export const exercisesOptions = {
    method: 'GET',

    headers: {

        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '007b5918bemshca8e98d9d23a66ep1047eajsneeff4ce7dc93',
    }
};


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}