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
  $('#agentLogout').click(function(){
      window.location.href = "index.html";
  });
}