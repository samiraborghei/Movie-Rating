var string = " JA CASA Movie Reviews"

var submitButton = document.querySelector("#get-data");

submitButton.addEventListener('click', function (event) {

    event.preventDefault();

    var movieTitle = document.querySelector('input[name="movie-title"]').value;

    var omdbUrl = 'http://www.omdbapi.com/?apikey=31b4d588&t=' + movieTitle;

    fetch(omdbUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var title = data.Title;
            var year = data.Year;
            var plot = data.Plot;
            var genre = data.Genre;
            var posterUrl = data.Poster;
            var ratings = data.Ratings;

            var movieDetailsDiv = document.querySelector("#movie-details");

            html = '<h2> ' + title + '  (' + year + ')</h2>' +
                "<p>" + plot + "</p>" +
                "<p> <strong> Genre: </strong>" + genre + "</p>" +
                "<ul> <strong> Ratings: </strong>";

            for (i = 0; i < ratings.length; i++) {
                console.log(ratings[i].Source);
                html += '<li>' + ratings[i].Source + ": " + ratings[i].Value + "</li>";
            }

            html += "</ul>"

            html += "<img src=" + posterUrl + "alt= " + title + " />"

            movieDetailsDiv.innerHTML = html;

        })
        .catch(function (error) {
            console.error("Error fetching movie details: " + error)
        })

})



// var options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
// 	}
// };

fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(response)
        
    })
    .catch(function (errror) {
        console.error(err)
    });