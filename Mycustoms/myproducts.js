// @ts-nocheck
$("document").ready(() => {
    loadMyProducts();
	
});

var loadMyProducts=()=>{
    var url="http://172.105.167.182:8081/catalog/getAllAvailableProducts";
    var token = window.sessionStorage.getItem("token");


    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        var html=``;
        data.forEach((p)=>{
           html+=`<tr>
           <td>${p.id}</td>
           <td>${p.productName}</td>
           <td>${p.subCategory}</td>
           <td>${p.productDescription}</td>
           <td>${p.productQuantity}</td>
           <td>${p.productPrice}</td>


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
        document.getElementById("products_table").innerHTML=html;
    })
    
}