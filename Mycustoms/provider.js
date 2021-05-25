// @ts-nocheck

$("document").ready(()=>{
  //call in the functions to load on onclick of a button
  //assuming button has an id of postf
  $('postf').on('click', function(e){
      e.preventDefault();
      postf();
  })
 //assuming button has an id of getf
  $('getf').on('click', function(e){
      e.preventDefault();
      getf();
  })
  //assuming button has an id of getf
  $('updatef').on('click', function(e){
      e.preventDefault();
      updatef();
  })
   //assuming button has an id of getf
  $('deletef').on('click', function(e){
      e.preventDefault();
      deletef();
  })


})

$('#add_product').on('click', function(e){
  e.preventDefault();
  

  var postproduct=(product)=>{
    var productName= $("input[name='productname']").val();
    var productDescription= $("input[name='productdescription']").val();
    var productPrice= $("input[name='productprice']").val();
    var productQuantity= $("input[name='productquantity']").val();
    var subCategory= $("input[name='subcategory']").val();
    var productVariant= $("input[name='productvariant']").val();
    var photos= $("input[name='photos']").val();
  
    var url="http://173.255.195.240:8081/catalog/products";
  
    var body =JSON.stringify({productName:productName,productDescription:productDescription, productQuantity:productQuantity, subCategory:subCategory, productVariant:productVariant,productPrice:productPrice})
  
    var token=window.sessionStorage.get("token") //get according to the way ypu had named the token variable
    fetch(url,{
      method:"post",
      headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
   },
   body: body
    }).then((user)=>{
   
     let html="<h1> New Product Data single</h1>";
       html+=` <li>Id : ${product.id} </li>
               <li>Id : ${product.productName} </li>
               <li>Id : ${product.productDescription} </li>
               <li>Id : ${product.productPrice} </li>
               <li>Id : ${product.productQuantity} </li>
               <li>Id : ${product.productVariant} </li>
   
               <li>Id : ${product.subCategory} </li>`
               
   
    })
    document.getElementById('output').innerHTML=html;
   
 })
  }
   


var getprovider=(provider)=>{
  let url="http://172.105.167.182:8081/accounts/getProviderById" +provider.email
  fetch(url)
  .then((res)=>{
    if(res.ok){
      return res.json();
    } else {
      throw new Error("could not get request")
    }
  })
  .then((res)=>{
    

  })
}









var postproduct=(product)=>{
  var productName= $("input[name='productname']").val();
  var productDescription= $("input[name='productdescription']").val();
  var productPrice= $("input[name='productprice']").val();
  var productQuantity= $("input[name='productquantity']").val();
  var subCategory= $("input[name='subcategory']").val();
  var productVariant= $("input[name='productvariant']").val();
  var photos= $("input[name='photos']").val();

  var url="http://173.255.195.240:8081/catalog/products";

  var body =JSON.stringify({productName:productName,productDescription:productDescription, productQuantity:productQuantity, subCategory:subCategory, productVariant:productVariant})

  var token=window.sessionStorage.get("token") //get according to the way ypu had named the token variable

}
 fetch(url,{
   method:"post",
   headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
},
body: body
 }).then((user)=>{

  let html="<h1> New Product Data single</h1>";
    html+=` <li>Id : ${product.id} </li>
            <li>Id : ${product.productName} </li>
            <li>Id : ${product.productDescription} </li>
            <li>Id : ${product.productPrice} </li>
            <li>Id : ${product.productQuantity} </li>
            <li>Id : ${product.productVariant} </li>

            <li>Id : ${product.subCategory} </li>`
            

 })
 document.getElementById('output').innerHTML=html;



 var updateProduct=(product)=>{
  var productName= $("input[name='productname']").val();
  var productDescription= $("input[name='productdescription']").val();
  var productPrice= $("input[name='productprice']").val();
  var productQuantity= $("input[name='productquantity']").val();
  var subCategory= $("input[name='subcategory']").val();
  var productVariant= $("input[name='productvariant']").val();
  var photos= $("input[name='photos']").val();

  var url="http://173.255.195.240:8081/catalog/products";

  var body =JSON.stringify({productName:productName,productDescription:productDescription, productQuantity:productQuantity, subCategory:subCategory, productVariant:productVariant})

  var token=window.sessionStorage.get("token")
 }
 fetch(url,{
 method:'put',
 headers:{
  'Content-Type': 'application/json',

 }
 })

 var postservice=function(){
  var charges= $("input[name='charges']").val();
  var description= $("input[name='description']").val();
  var locationName= $("input[name='locationName']").val();
  var charges= $("input[name='charges']").val();
  var name= $("input[name='name']").val();



  var url="http://173.255.195.240:8081/services/providers/services"
  
  var body= JSON.stringify({charges:charges, description:description,locationName:locationName,name:name})
  
  var token=window.sessionStorage.get("token") 
  
  fetch(url,{     
      method:"POST",
      headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
      },
      body: body

  }).then((res)=>{ 
      if(res.ok){
          return res.json() 
      }else{ 

         throw new Error(" ....")

      }
  }).then((services)=>{ //res is status ok, we pass a var user to this promise
           //process the data
           //Assuming you had a table or div element you wanted to populate your data
           //Assuming data returned at this point is a single json  with id, username and email fields
           let html="<h1> New User Data single</h1>";
           html+=` <li>Id : ${user.id} </li>
                   <li>Id : ${user.name} </li>
                   <li>Id : ${user.email} </li>`
       //Assuming you have a div id output, load in the data to the div by its is name like as follows
       document.getElementById('output').innerHTML=html;

       "**************************************************************"
       //Assuming data received back is a list of useers

       let html="<h1> Users List </h1>";
       data.forEach((user)=>{ //loop over each data
           html+=`
           <ul>
           <li>Id : ${user.id} </li>
           <li>Id : ${user.name} </li>
           <li>Id : ${user.email} </li>
           </ul>       
               `})
       document.getElementById('output').innerHTML=html;
   })
   .catch((err)=>{
       console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
   })
}

var getservice= function(){
  //you can choose to get the email from the session storage or from a id component 
  // I will use the document.getElementById instead of the JQUERY get by id to get email value 
  var email= document.getElementById('email').value;
  var url="http://localhost:8080/provider/"+ email;
 //
  fetch(url,{
      method:"GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
 },
  })  
   .then((res)=>{ //Check if res is ok
     if(res.om){
         return res.json()
     }else { // res is not ok
       throw new Error("Error occurred");
     }
   })
   .then((user)=>{
       //if single Json is returned
      let html="<h1> New User Data single</h1>";
      html+=` <li>Id : ${user.id} </li>
              <li>Id : ${user.name} </li>
              <li>Id : ${user.email} </li>`
  //Assuming you have a div id output, load in the data to the div by its is name like as follows
  document.getElementById('output').innerHTML=html;

  "**************************************************************"
  //Assuming data received back is a list of useers

  let html="<h1> Users List </h1>";
  data.forEach((user)=>{ //loop over each data
      html+=`
      <ul>
      <li>Id : ${user.id} </li>
      <li>Id : ${user.name} </li>
      <li>Id : ${user.email} </li>
      </ul>       
          `})
  document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
  console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}
var  updateProduct=()=>{
  //you can choose to get the email from the session storage or from a id component 
    // I will use the document.getElementById instead of the JQUERY get by id to get email value 
    var email= document.getElementById('email').value;
    var url="http://localhost:8080/provider/"+ email;
   //
    fetch(url,{
        method:"PATCH",  //choose either patch or put
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
   },
    })  
     .then((res)=>{ //Check if res is ok
       if(res.om){
           return res.json()
       }else { // res is not ok
         throw new Error("Error occurred");
       }
     })
     .then((user)=>{
         //if single Json is returned
        let html="<h1> New User Data single</h1>";
        html+=` <li>Id : ${user.id} </li>
                <li>Id : ${user.name} </li>
                <li>Id : ${user.email} </li>`
    //Assuming you have a div id output, load in the data to the div by its is name like as follows
    document.getElementById('output').innerHTML=html;

    "**************************************************************"
    //Assuming data received back is a list of useers

    let html="<h1> Users List </h1>";
    data.forEach((user)=>{ //loop over each data
        html+=`
        <ul>
        <li>Id : ${user.id} </li>
        <li>Id : ${user.name} </li>
        <li>Id : ${user.email} </li>
        </ul>       
            `})
    document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
    console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}
var  updateservice=()=>{
  //you can choose to get the email from the session storage or from a id component 
    // I will use the document.getElementById instead of the JQUERY get by id to get email value 
    var email= document.getElementById('email').value;
    var url="http://localhost:8080/provider/"+ email;
   //
    fetch(url,{
        method:"PATCH",  //choose either patch or put
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
   },
    })  
     .then((res)=>{ //Check if res is ok
       if(res.om){
           return res.json()
       }else { // res is not ok
         throw new Error("Error occurred");
       }
     })
     .then((user)=>{
         //if single Json is returned
        let html="<h1> New User Data single</h1>";
        html+=` <li>Id : ${user.id} </li>
                <li>Id : ${user.name} </li>
                <li>Id : ${user.email} </li>`
    //Assuming you have a div id output, load in the data to the div by its is name like as follows
    document.getElementById('output').innerHTML=html;

    "**************************************************************"
    //Assuming data received back is a list of useers

    let html="<h1> Users List </h1>";
    data.forEach((user)=>{ //loop over each data
        html+=`
        <ul>
        <li>Id : ${user.id} </li>
        <li>Id : ${user.name} </li>
        <li>Id : ${user.email} </li>
        </ul>       
            `})
    document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
    console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}
var getproduct= function(){
  //you can choose to get the email from the session storage or from a id component 
  // I will use the document.getElementById instead of the JQUERY get by id to get email value 
  var email= document.getElementById('email').value;
  var url="http://localhost:8080/provider/"+ email;
 //
  fetch(url,{
      method:"GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
 },
  })  
   .then((res)=>{ //Check if res is ok
     if(res.om){
         return res.json()
     }else { // res is not ok
       throw new Error("Error occurred");
     }
   })
   .then((user)=>{
       //if single Json is returned
      let html="<h1> New User Data single</h1>";
      html+=` <li>Id : ${user.id} </li>
              <li>Id : ${user.name} </li>
              <li>Id : ${user.email} </li>`
  //Assuming you have a div id output, load in the data to the div by its is name like as follows
  document.getElementById('output').innerHTML=html;

  "**************************************************************"
  //Assuming data received back is a list of useers

  let html="<h1> Users List </h1>";
  data.forEach((user)=>{ //loop over each data
      html+=`
      <ul>
      <li>Id : ${user.id} </li>
      <li>Id : ${user.name} </li>
      <li>Id : ${user.email} </li>
      </ul>       
          `})
  document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
  console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}
var getprovider= function(){
  //you can choose to get the email from the session storage or from a id component 
  // I will use the document.getElementById instead of the JQUERY get by id to get email value 
  var email= document.getElementById('email').value;
  var url="http://localhost:8080/provider/"+ email;
 //
  fetch(url,{
      method:"GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
 },
  })  
   .then((res)=>{ //Check if res is ok
     if(res.om){
         return res.json()
     }else { // res is not ok
       throw new Error("Error occurred");
     }
   })
   .then((user)=>{
       //if single Json is returned
      let html="<h1> New User Data single</h1>";
      html+=` <li>Id : ${user.id} </li>
              <li>Id : ${user.name} </li>
              <li>Id : ${user.email} </li>`
  //Assuming you have a div id output, load in the data to the div by its is name like as follows
  document.getElementById('output').innerHTML=html;

  "**************************************************************"
  //Assuming data received back is a list of useers

  let html="<h1> Users List </h1>";
  data.forEach((user)=>{ //loop over each data
      html+=`
      <ul>
      <li>Id : ${user.id} </li>
      <li>Id : ${user.name} </li>
      <li>Id : ${user.email} </li>
      </ul>       
          `})
  document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
  console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}
var getbookings= function(){
  //you can choose to get the email from the session storage or from a id component 
  // I will use the document.getElementById instead of the JQUERY get by id to get email value 
  var email= document.getElementById('email').value;
  var url="http://localhost:8080/provider/"+ email;
 //
  fetch(url,{
      method:"GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
 },
  })  
   .then((res)=>{ //Check if res is ok
     if(res.om){
         return res.json()
     }else { // res is not ok
       throw new Error("Error occurred");
     }
   })
   .then((user)=>{
       //if single Json is returned
      let html="<h1> New User Data single</h1>";
      html+=` <li>Id : ${user.id} </li>
              <li>Id : ${user.name} </li>
              <li>Id : ${user.email} </li>`
  //Assuming you have a div id output, load in the data to the div by its is name like as follows
  document.getElementById('output').innerHTML=html;

  "**************************************************************"
  //Assuming data received back is a list of useers

  let html="<h1> Users List </h1>";
  data.forEach((user)=>{ //loop over each data
      html+=`
      <ul>
      <li>Id : ${user.id} </li>
      <li>Id : ${user.name} </li>
      <li>Id : ${user.email} </li>
      </ul>       
          `})
  document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
  console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}

var  updateProvider=()=>{
  //you can choose to get the email from the session storage or from a id component 
    // I will use the document.getElementById instead of the JQUERY get by id to get email value 
    var email= document.getElementById('email').value;
    var url="http://localhost:8080/provider/"+ email;
   //
    fetch(url,{
        method:"PATCH",  //choose either patch or put
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
   },
    })  
     .then((res)=>{ //Check if res is ok
       if(res.om){
           return res.json()
       }else { // res is not ok
         throw new Error("Error occurred");
       }
     })
     .then((user)=>{
         //if single Json is returned
        let html="<h1> New User Data single</h1>";
        html+=` <li>Id : ${user.id} </li>
                <li>Id : ${user.name} </li>
                <li>Id : ${user.email} </li>`
    //Assuming you have a div id output, load in the data to the div by its is name like as follows
    document.getElementById('output').innerHTML=html;

    "**************************************************************"
    //Assuming data received back is a list of useers

    let html="<h1> Users List </h1>";
    data.forEach((user)=>{ //loop over each data
        html+=`
        <ul>
        <li>Id : ${user.id} </li>
        <li>Id : ${user.name} </li>
        <li>Id : ${user.email} </li>
        </ul>       
            `})
    document.getElementById('output').innerHTML=html;
})
.catch((err)=>{
    console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
})

}

