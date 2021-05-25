// @ts-nocheck
var $addProvider = $("#addProvider");


var api ={


 // Create a NEW provider
 newProvider: function(newProviderInfo) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "http://172.105.167.182:8081/accounts/signUp",
      data: JSON.stringify(newProviderInfo)
    }).then(function() {
      window.location.href = "/owner/" + newPropertyInfo.ownerId;
    });
  },



}
var handleAddProvider = function(event) {
    event.preventDefault();
  

    var newProviderInfo = {

      firstName: $("#propInputFirstName")
        .val()
        .trim(),
      secondName: $("#propInputSecondName")
        .val()
        .trim(),
      email: $("#propInputEmail")
        .val()
        .trim(),
      phone: $("#propInputPhone")
        .val()
        .trim(),
      password: $("#propInputPassword")
        .val()
        .trim(),
      
    };
  
    // Call the funtion to create a new item and pass the new info
    API.newProvider(newProviderInfo);
  };
  $addProvider.on("click", handleAddProvider);
