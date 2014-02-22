/* global Animal: false */

(function (){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;

    var photos = [];
    photos[0] = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhopK8AHCETm8zrvr2M-HDG7IbOEBebOfL5sSYXCSi2UJvdC7p7Q';
    photos[1] = 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/10/29/1383067928482/Grumpy-Cat-Tardar-Sauce-001.jpg';
    animal = new Animal('Penny', 12, 'female', photos, 'grumpy cat', 'black', 'Cat');
    animals.push(animal);

    photos = [];
    photos[0] = 'http://6269-9001.zippykid.netdna-cdn.com/wp-content/uploads/2013/09/Dog-Computer-Wallpaper.jpg';
    photos[1] = 'http://petnewsandviews.com/wp-content/uploads/2011/03/Bugsy-the-spokesdog-for-Lucky-Dog-Cuisine.jpg';
    animal = new Animal('Brian', 4, 'male', photos, 'very cool', 'brown', 'Dog');
    animals.push(animal);

    photos = [];
    photos[0] = 'http://wallpapere.org/wp-content/uploads/2012/02/cameleon.jpg';
    photos[1] = 'http://www.agirpourlaplanete.com/images/articles/2013/cameleon.jpg';
    animal = new Animal('Fuffy', 21, 'male', photos, 'kind of creepy', 'many', 'Cameleon');
    animals.push(animal);
    
    photos = [];
    photos[0] = 'http://sceneonglassmedia.com/wordpress/wp-content/uploads/2013/05/Smiling-Chimpanzee.jpg';
    photos[1] = 'http://www.kimballstock.com/pix/CHI/03/CHI_03_RK0060_10_P.JPG';
    animal = new Animal('Franky', 5, 'male', photos, 'beautiful smile', 'black', 'Chimpanzee');
    animals.push(animal);

    debugger;
    return animals;
  };

})();
