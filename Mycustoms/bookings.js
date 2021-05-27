// bookings by provider id 

var loadbookings =()=>{
    var url="http://172.105.167.182:8081/services/booking/all"
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