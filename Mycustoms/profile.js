// @ts-nocheck
$("document").ready(() => {
  loadMyprofile();
  providerLogout();


});


var loadMyprofile =()=>{
  
  var url="http://172.105.167.182:8081/admin/providers"
  var token = window.sessionStorage.getItem("token");
  var html=``;
  // console.log(token)
      fetch(url, {
          method:"GET",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' +token,  
            } 
      })
      .then(res=>{
          if(res.ok){
              return res.json();
          }
          else{
              throw new Error("Error Occurred")
          }
      })
      .then((res)=>{ 
         res.forEach(b => {
          html+=`<tr>
          <td>${b.userId} </td>
          <td>${b}</td>
          <td>${b.}</td>
          <td>${b}</td>
          <td nowrap="nowrap">
                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mx-5" title="Edit details">\
                               <i class="la la-edit"></i>\
                           </a>\
                           <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
                               <i class="la la-trash"></i>\
                           </a>\
           </td>
          </tr>`
             
         });
          document.getElementById("my_profile").innerHTML=html;
      })
      .catch(err=>{
          console.log(err);
      })
}
var providerLogout= function(){
    $('#providerlogout').click(function(){
        window.location.href = "index.html";
    });
  }