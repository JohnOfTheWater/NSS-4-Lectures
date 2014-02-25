(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#reg-log').click(showRegLog);
    $('#register').click(register);
    $('#login').click(login);
  }

  function showRegLog(){
    $('#userControls').fadeToggle('slow');
  }


  function register(){
    var email = $('#userName').val();
    var password = $('#password').val();
    var z = {email:email, password:password};
    var data = z;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/users';
    var type = 'POST';
    var success = displayRegistrationMessage;

    $.ajax({url:url, type:type, data:data, success:success});

  }

  function displayRegistrationMessage(x){
    debugger;
    if(x.isSuccess){
      alert('You have successfully registered');
    }else{
      alert('The email was already taken');
    }
  }

  function login(){
    var email = $('#userName').val();
    var password = $('#password').val();
    var z = {email:email, password:password};
    var data = z;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/users/login';
    var type = 'PUT';
    var success = goodJobLogin;

    $.ajax({url:url, type:type, data:data, success:success});

  }

  function goodJobLogin(x){
    debugger;
    if(!x){
      console.log('nha');
    }else{
      alert('you successfully logged in!');
    }
  }



})();

