
var slider = document.getElementById("userSlider");
var output = document.getElementById("numUser");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


$(document).ready(function() {
  $("#userSlider").on("input", function() {
    var users = parseInt($(this).val());

    $(".pricing-col").removeClass("highlighted"); // Remove highlighting from all plans

    if(users === 0){
      $(".pricing-col").removeClass("highlighted");
    }else{
      if (users >= 1  && users <= 10) {
        // Highlight the first plan
        $("#plan1").addClass("highlighted");
        $("#plan2, #plan3").removeClass("highlighted");
      } else if (users >= 10 && users <= 20) {
        // Highlight the second plan
        $("#plan2").addClass("highlighted");
        $("#plan1, #plan3").removeClass("highlighted");
      } else {
        // Highlight the third plan (for users >= 20)
        
        $("#plan3").addClass("highlighted");
        $("#plan1, #plan2").removeClass("highlighted");
      }

    }

  });
});


$(document).ready(function() {
  $("#myModal1 button.btn-primary").click(function() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var number = $("#number").val();
    var message = $("#message").val();
    // Prepare form data
    var formData = {
      firstName: firstName,
      lastName:lastName,
      email: email,
      number:number,
      message: message
    };

    console.log(formData);

    $.ajax({
      type: "POST",
      url: "https://forms.maakeetoo.com/formapi/370",
      data: formData,
      success: function(response) {
        console.log("Form submitted successfully!", response);
      },
      error: function(error) {
        console.error("Error submitting form:", error);
      }
    });

  });
});
