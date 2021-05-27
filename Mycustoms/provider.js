// @ts-nocheck
// @ts-ignore
$('getproviderById').on('click', function(e){
  e.preventDefault();
  providerLogout();


  // @ts-ignore
  var getproviderById=function(){
// @ts-ignore
var email=document.getElementById('email').value;

var url ="http://172.105.167.182:8081/admin/providers/id/"+email

fetch(url,{
  method:"GET",
  headers:{
    'Content-Type': 'application/json',
                // @ts-ignore
        'Authorization': `Bearer ${token}`,
  },
}).then((res)=>{
  if(res.ok){
    return res.json
  } else {
    throw new Error("Error occured")
  }
}).then((provider)=>{
  let html="<h1> New User Data single</h1>";
            // @ts-ignore
            html+=` <li>Id : ${provider.id} </li>
                    <li>Id : ${provider.name} </li>
                    <li>Id : ${provider.phone} </li>
                    <li>Id : ${provider.email} </li>`
        //Assuming you have a div id output, load in the data to the div by its is name like as follows
        document.getElementById('output').innerHTML=html;

})

  }
})

var providerLogout= function(){
  $('#providerlogout').click(function(){
      window.location.href = "index.html";
  });
}

// provider by id 

var loadProviders=()=>{
  var url="http://172.105.167.182:8081/admin/providers"
  var token = window.sessionStorage.getItem("token");
  // console.log(token)
  if(token!==""){
      fetch(url, {
          method:"GET",
          headers: {
              'Content-Type': 'application/json',
             
              'Authorization': 'Bearer ' +token,
              
            },  
      }).then(res => {
              if(res.ok){
              return res.json();
          }
          else{
              throw new Error("A server error occurred")
          }
      }).then((data)=>{
          var html="";
          data.forEach((provider)=>{
             html+=`<tr>  
             <td>${provider.firstName} ${provider.secondName}</td>
             <td>${provider.phone}</td>
             <td>${provider.email}</td>
             <td>${provider.blocked}</td>
             <td nowrap="nowrap">
                           <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mx-5" title="Edit details">\
              <i class="la la-edit"></i>\
            </a>\
            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
              <i class="la la-trash"></i>\
            </a>\
             </td>
             </tr> `
          })

      document.getElementById("provider_table").innerHTML=html
      })
      .catch(err=>{
          // console.log(err);
      })
  }
}