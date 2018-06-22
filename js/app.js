$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    },3000);
});

$(document).ready(function() {
    setTimeout(function() {
        $(".content2").fadeIn(1500);
    },6000);
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//validación de 10 digitos
i = 0;
$(document).ready(function () {
   $("#textarea").keypress(function () {
       var valueT = $("#textarea").val().length;
       console.log(valueT);
       if (valueT >= 10 ) {
           $("#nextButton").removeAttr("disabled");
           $("#textarea").attr("disabled", "disabled");
       }

   });
});




var $randomNumber = 0;
   $randomNumber = parseInt(Math.random() *1000);
   console.log("LAB-"+ $randomNumber);

  $("#nextButton").click(function(){
   swal("Tu codigo de verificación es : LAB- " +  $randomNumber);
  });
