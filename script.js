$('.search-button').on("click", function(){
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=a0e6dcde&s="+$('.input-keyword').val(),
        success: result => {
            const movie = result.Search;
            let card = '';
            movie.forEach(n => {
                card +=     `<div class="col-md-4">
                                <div class="card" >
                                    <img src="${n.Poster}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${n.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">${n.Year}</h6>
                                    <a href="#" class="btn btn-primary movie-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${n.imdbID}">Tampilkan detail detail</a>
                                    </div>
                                </div>
                            </div>  `
            });
    
            $('.kumpulan-movie').html(card);
    
            $('.movie-detail').on('click', function(){
    
                $.ajax({
                    url:"http://www.omdbapi.com/?apikey=a0e6dcde&i= " + $(this).data("imdbid"),
                    success: m => {
                        const hasil = ` <div class="container-fluid">
                                            <div class="row"
                                                <div class="col-md-3">
                                                    <img src="${m.Poster}">
                                                </div>
                                                <div class="col-md">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><h4>${m.Title}</h4></li>
                                                        <li class="list-group-item"><strong>Directror : </strong>${m.Director}</li>
                                                        <li class="list-group-item"><strong>Actor : </strong>${m.Actor}</li>
                                                        <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                                                        <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                                                    </ul>
                                                </div>
                                            </div> 
                                        </div>`
    
                      $('.modal-body').html(hasil);
                    }
                })
            })
        },
        error: e =>{
            console.log(e.responseText);
        }
    })
});
