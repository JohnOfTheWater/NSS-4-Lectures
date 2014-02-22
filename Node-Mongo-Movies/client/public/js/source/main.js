(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#movie').submit(submitMovie);
    $('#toggle-form').click(toggleForm);
    $('#movies').on('click', '.studio', filterStudio);
    $('#movies').on('click', '.delete', deleteMovie);
    $('#movies').on('click', '.edit', editMovie);
    $('#updateMovie').hide();
    $('#updateMovie').click(updateMovie);
    getMovies();
  }

  var movies = [];

  function editMovie(){
    debugger;
    var data = $(this).data('id');
    var array = data.split(',');
    $('#name').val(array[0]);
    $('#rating').val(array[1]);
    $('#length').val(array[2]);
    $('#year').val(array[3]);
    $('#studio').val(array[4]);
    $('#actors').val(array[5]+', '+array[6]+', '+array[7]);
    $('#director').val(array[8]);
    $('#poster').val(array[9]);
    $('#saveMovie').hide();
    $('#updateMovie').show().attr('data-id', array[10]);
    console.log(data);
  }

  function updateMovie(event){
    debugger;
    var data = $('#movie').serialize();
    var id = $('#updateMovie').data('id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' +id;
    var type = 'PUT';
    var success = changeMovie;

    $.ajax({url:url, type:type, data:data, success:success});

    event.preventDefault();
  }

  function changeMovie(data){
    if(data.updated === 1){
      _.remove(movies, function(movie){return movie._id === data.id;});
      data.movie._id = data.id;
      movies.push(data.movie);

      var $poster = $('.poster[data-movie-id="'+data.id+'"]');
      $poster.css('background-image', 'url("'+data.movie.poster+'")');
      $poster.find('.title').text(data.movie.name);
      $poster.find('.studio').text(data.movie.studio);
      $poster.find('.actors').text(data.movie.actors.join(', '));
      var footer = data.movie.director + ' : ' + data.movie.year + ' : ' + data.movie.rating + ' : ' + data.movie.length;
      $poster.find('.footer > div:nth-child(1)').text(footer);
    }
  }

  function filterStudio(){
    var studio = this.textContent;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/query?studio=' + studio;
    $.getJSON(url, displayMovies);
  }

  function getMovies(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){
    $('#movies').empty();

    for(var i = 0; i < data.movies.length; i++){
      displayMovie(data.movies[i]);
    }
  }

  function displayMovie(movie){
    movies.push(movie);

    var $poster = $('<div>');
    var $title = $('<div>');
    var $description = $('<div>');
    var $footer = $('<div>');
    var $x = $('<div>');
    var $edit = $('<div>');

    $poster.addClass('poster').attr('data-id', movie._id);
    var url = 'url("'+movie.poster+'")';
    $poster.css('background-image', url);

    $x.text('x').addClass('delete').attr('data-id', movie._id);
    $edit.text('edit').addClass('edit').attr('data-id', movie.name+','+movie.rating+','+movie.length+','+movie.year+','+movie.studio+','+movie.actors+','+movie.director+','+movie.poster+','+movie._id);
    $title.addClass('title');
    $title.text(movie.name);

    var about = 'A film by <span class="studio">'+movie.studio+'</span> staring <span class="actors">'+movie.actors.join(', ')+'</span>';
    $description.addClass('description');
    $description.append(about);

    $footer.addClass('footer');
    $footer.text(movie.director + ' ' + movie.year + ' ' + movie.rating + ' ' + movie.length);

    $poster.append($title, $description, $footer, $x, $edit);
    $('#movies').prepend($poster);
  }

  function toggleForm(){
    $('#movie').toggleClass('hide');
  }

  function submitMovie(event){
    debugger;
    var data = $(this).serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});

    event.preventDefault();
  }

  function deleteMovie(){
    debugger;
    var data = $(this).data('id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' +data;
    var type = 'DELETE';
    var success = remove;

    $.ajax({url:url, type:type, success:success});

  }

  function remove(data){
    debugger;
    if(data.deleted === 1){
      console.log(data.id);
      console.log(data);
      $('.poster[data-id='+data.id+']').remove();
    }
  }


  function newMovie(movie){
    debugger;
    $('#movie input').val('');
    displayMovie(movie);
  }

})();

