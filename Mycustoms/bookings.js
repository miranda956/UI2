$("document").ready(() => {
    loadbookings();
	
});


var loadbookings =()=>{
    
    var url="http://172.105.167.182:8081/services/booking/all"
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
<<<<<<< HEAD
        }).then((data)=>{
            var html="";
            data.forEach((bookings)=>{
               html+=`<tr>  
               <td>${bookings.firstName} ${bookings.secondName}</td>
               <td>${bookings.phone}</td>
               <td>${bookings.email}</td>
               <td>${bookings.blocked}</td>
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
=======
        })
        .then((res)=>{ 
           res.forEach(b => {
            html+=`<tr>
            <td>${b.userId} </td>
            <td>${new Date(b.date)}</td>
            <td>${b.hour}</td>
            <td>${b.cancelled? `Active`:`Cancelled`}</td>
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
            document.getElementById("bookings_table").innerHTML=html;
>>>>>>> ad1cc6aeba9a65a1d937754721c790e4092bd3ef
        })
        .catch(err=>{
            console.log(err);
        })
}