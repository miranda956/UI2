// @ts-nocheck
var $updateProvider = $("#updateProvider");
var $addProduct= $("#addproduct");
var $addService=$("addService");
var $updateProduct=$("updateProduct");
var $updateService=$("updateService");



var api ={



    // Get an provider  info
  getProvider: function(provider) {
    return $.ajax({
      url: "http://172.105.167.182:8081/accounts/getProviderById" + provider.email,
      type: "GET"
    }).then(function(data) {
      return data;
    });
  },

  getMyservices: function(provider) {
    return $.ajax({
      url: "http://172.105.167.182:8081/services/users/" + providerId,
      type: "GET"
    }).then(function(data) {
      return data;
    });
  },

    
    updateProvider: function(editedInfo) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "" + editedInfo.providerId,
        data: JSON.stringify(editedInfo)
      }).then(function(data) {
        
        window.location.href = "/provider/" + data;
    
      });
    },


    newProduct: function(newProductInfo) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "http://172.105.167.182:8081/catalog/products",
          data: JSON.stringify(this.newProduct)
        }).then(function() {
          window.location.href = "/provider/" + newProductInfo.providerId;
        });
      },

      newService: function(newServiceInfo) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "http://172.105.167.182:8081/services/providers/services",
          data: JSON.stringify(this.newService)
        }).then(function() {
          window.location.href = "/provider/" + newServiceInfo.providerId;
        });
      },
    
      updateService: function(editedInfo) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "http://172.105.167.182:8081/services/providers/services"+ editedInfo.serviceId,
          data: JSON.stringify(editedInfo)
        }).then(function(data) {
          console.log(window.location.href);
          window.location.href = "/provider/" + data;
          
        });
      },

      updateProduct: function(editedInfo) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "http://172.105.167.182:8081/catalog/products"+ editedInfo.propertyId,
          data: JSON.stringify(editedInfo)
        }).then(function(data) {
          console.log(window.location.href);
          window.location.href = "/provider/" + data;
          
        });
      },
      // Delete a product from the provider page
providerDeleteProduct: function(productId) {
    return $.ajax({
      url: "http://172.105.167.182:8081/catalog/products/" + propertyId,
      type: "DELETE"
    }).then(function() {
      window.location.href = "/provider";
    });
  },

  providerDeleteService: function(productId) {
    return $.ajax({
      url: "http://172.105.167.182:8081/catalog/products/" + propertyId,
      type: "DELETE"
    }).then(function() {
      window.location.href = "/provider";
    });
  },

}





var handleaddProduct = function(event) {
    event.preventDefault();
  
    // Gathering all elements to update the registry with
    var addProduct = {
      ProductName: $("#propInputProductName")
        .val()
        .trim(),
      ProductDescrption: $("#propInputProductDescription")
        .val()
        .trim(),
      ProductPrice: $("#propInputProductPrice")
        .val()
        .trim(),
      productQuantity: $("#propInputProductQuantity")
        .val()
        .trim(),
        productVariant: $("#propInputProductVariant")
        .val()
        .trim(),
    };
  
    // Call the update funtion and pass the updted info
    
  };


var handleaddservice = function(event) {
    event.preventDefault();
  
    // Gathering all elements to update the registry with
    var addProduct = {
      firstName: $("#propInputfirstName")
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
      
    };
  
    // Call the update funtion and pass the updted info
    
  };


var handleupdateProduct = function(event) {
    event.preventDefault();
  
    // Gathering all elements to update the registry with
    var addProduct = {
      firstName: $("#propInputfirstName")
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
      
    };
  
    // Call the update funtion and pass the updted info
    
  };

var handleupdateService = function(event) {
    event.preventDefault();
  
    // Gathering all elements to update the registry with
    var addProduct = {
      firstName: $("#propInputfirstName")
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
      
    };
  
    // Call the update funtion and pass the updted info
    
  };

var handleUpdateProvider = function(event) {
    event.preventDefault();
  
    // Gathering all elements to update the registry with
    var editedInfo = {
      ProviderId: $("#idtag").data("tag"),
      firstName: $("#propInputfirstName")
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
      
    };
  
    // Call the update funtion and pass the updted info
    
  };

  $updateProvider.on("click", handleUpdateProvider);
  $updateProduct.on("click", handleupdateProduct);
  $addService.on("click", handleaddservice);
  $updateService.on("click", handleupdateService);
  $addProduct.on("click", handleaddProduct);



