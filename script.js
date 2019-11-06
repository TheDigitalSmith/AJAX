
function loadSongs(searchQuery){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?limit=6&q=" + searchQuery, {
        headers: {
            "X-RapidAPI-Host":"deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "b0f442ef2fmsh48d14fda6e39b49p1ce2f7jsnf2274d03026e"
        }
    })
        .then (function(response){
            return response.json()
        })
        .then (function(songsResponse) {
            console.log(songsResponse)

            var div = `
            <h3>${searchQuery}</h3>
                <hr>
            <div class = 'row'>
                    
                `

            let songs = songsResponse.data;
            songs.forEach(song => {
                div += `
                    <div class = "col-sm-4 col-md-2 col-lg-1 song">
                        <img src = "${song.album.cover}"/>
                        <span>${song.title} </span> 
                    </div> 
                `
            });
            document.querySelector("#albums").innerHTML += div + "</div>"
        })
    }

    window.onload = function (){
        loadSongs("eminem")
        loadSongs("6lack")
        loadSongs("the weeknd")
    }