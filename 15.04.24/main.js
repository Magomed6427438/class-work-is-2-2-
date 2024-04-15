const saveData = () =>
{
    let song = document.querySelector("#song").value;
    let artist = document.querySelector("#artist").value;
    let album = document.querySelector("#album").value;
    let genre = document.querySelector("#genre").value;
    let duration = document.querySelector("#duration").value;

    let storeData = JSON.parse(localStorage.getItem("playlist")) || [];

    let music = 
    {
        song: song,
        artist: artist,
        album: album,
        genre: genre,
        duration: duration
    }

    storeData.push(music);

    localStorage.setItem("playlist", JSON.stringify(storeData));

    getData();
}


const getData = () => 
{
    let storeData = JSON.parse(localStorage.getItem("playlist")) || [];
    let dataList = document.querySelector("#resultList");
    dataList.innerHTML = "";

    if( storeData && storeData.length > 0)
    {
        storeData.forEach(function(music, index)
        {
            dataList.innerHTML += "<li>Название песни "+ music.song + "</li>";
            dataList.innerHTML += "<li>Исполнитель "+ music.artist + "</li>";
            dataList.innerHTML += "<li>Название альбома "+ music.album + "</li>";
            dataList.innerHTML += "<li>Жанр "+ music.genre + "</li>";
            dataList.innerHTML += "<li>Продолжительность песни "+ music.duration + "</li>";
            dataList.innerHTML += "<button onclick='deleteData(" + index + ")'>Удалить</button>";
            dataList.innerHTML += "<hr><br>";
        })
    }
    else
    {
        dataList.innerHTML += "<li>Данные не найдены</li>"
    }

    
}

const deleteData = (index) =>
{
    let storeData = JSON.parse(localStorage.getItem("playlist")) || [];
    storeData.splice(index, 1);
    localStorage.setItem("playlist", JSON.stringify(storeData));
    getData();
}

window.onload = function()
{
    getData();
}