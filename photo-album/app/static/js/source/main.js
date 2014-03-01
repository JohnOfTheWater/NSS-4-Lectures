(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#deletePanel').hide();
    $('#delete').click(deletePanel);
    $('#deletePanel').on('click', '.title', deleteAlbum);
    getAlbums();
  }
//----------Global Variables-------------------/

  var actualId = '';
//----------Animation-------------------/

  function deletePanel(){
    $('#deletePanel').fadeToggle('slow');
  }

//-------delete Todo----------//

  function deleteAlbum(){
    var id = $(this).data('id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/albums/' + id;
    var type = 'DELETE';
    actualId = id;
    var success = removeAlbum;

    $.ajax({url:url, type:type, success:success});

  }

  function removeAlbum(data){
    if(data.count === 1){
      $('.title[data-id="'+actualId+'"]').remove();
      $('.album[val="'+actualId+'"]').remove();
      actualId = '';
    }
  }



//----------getAlbums-------------------/
  function getAlbums(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/albumsList';
    $.getJSON(url, displayAlbums);
  }

  function displayAlbums(data){

    for(var i = 0; i < data.albums.length; i++){
      displayAlbum(data.albums[i]);
    }
  }

  function displayAlbum(album){
    //prioritiesArray.push(priority);
    var $title = $('<div>');
    //var $del = $('<div>');
    //var $edit = $('<div>');

    $title.text('-'+album.title).attr('data-id', album._id).addClass('title');
    //$del.text('x').addClass('delete').attr('data-id', album._id);
    //$edit.text('edit').addClass('edit').attr('data-id', priority._id).css('visibility', 'hidden');

    $('#title').append($title);
    //$('#del').append($del);
    //$('#edit').append($edit);
  }
//---------------------------------------//
})();

