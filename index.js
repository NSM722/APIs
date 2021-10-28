$(document).ready(function(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=36',
    dataType: 'json',
    success: function(data) {
      console.log(data);
        $.each(data.results, function(key, person){
          console.log(person.name.first + ' ' + person.name.last)
          $('#randomusers').append(`<div class="col-md-2 mt-2 mb-4 text-center">
                <img src="${person.picture.large}" alt="#" class="img-fluid rounded-circle">
                <h6>${person.name.first} ${person.name.last}</h6>
                <p class="mb-1"><span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                <i class="fab fa-tiktok ${person.gender}"></i>
                <i class="fab fa-facebook-f ${person.gender}"></i>
                <i class="fab fa-github ${person.gender}"></i> 
            </div>`);
      })
    }
  });
});   
      /*$('#randomusers').append('<div class="col-md-2">' + person.name.first + ' ' + person.name.last + '</div>');
      $("#randomsusers").append(`<div class="col-md-2"><img src="${person.picture.medium}"><p>${person.gender}</p></div>`)
      $('#person').append(person.name.first + ' ' + person.name.last)
      $('#flag').append(person.nat)
      */

            
        //if(person.gender == 'male') {
          //$('#icons').css("color", "blue");
        //}else {
          //$('#icons').css("color", "purple");
        //}
      //$('#names').append(person.name.first + ' ' + person.name.last)
      //$('#flag').append(person.nat)