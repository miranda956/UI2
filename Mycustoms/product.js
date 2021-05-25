// @ts-ignore
$('#add_product').on('click', function(e){
    e.preventDefault();
    // @ts-ignore
    // @ts-ignore
    var addproduct =function(){
        // @ts-ignore

        var productName= $("input[name='productname']").val();
        // @ts-ignore
        var productDescription= $("input[name='productdescription']").val();
        // @ts-ignore
        var productPrice= $("input[name='productprice']").val();
        // @ts-ignore
        var productQuantity= $("input[name='productquantity']").val();
        // @ts-ignore
        var subCategory= $("input[name='subcategory']").val();
        // @ts-ignore
        var productVariant= $("input[name='productvariant']").val();
        
        // declare url
        var url="http://173.255.195.240:8081/catalog/products";

        var body =JSON.stringify({productName:productName,productDescription:productDescription, productQuantity:productQuantity, subCategory:subCategory, productVariant:productVariant, productPrice:productPrice})


        // create submit body  element
        // if request requires a token to be passed, get the token from session storage
        var token=window.sessionStorage.get("token") //get according to the way ypu had named the token variable
        //using fetch API
        fetch(url,{     
            method:"POST",
            headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token
            },
            body: body
     
        }).then((res)=>{  //fetch returns a result, check if that result is ok or has status 200
            if(res.ok){
                return res.json() //return a res json
            }else{ // result has status other than 200
     
               throw new Error(" error occured during adding a service ")
     
            }
        }).then(()=>{ //res is status ok, we pass a var user to this promise
                
         })
         .catch((err)=>{
             console.log(err.mesage); // handle the error , you can use the swal fire or alert to notify the user
         })
     }
})

// @ts-ignore
$('updateproduct').on('click', function(e){
    e.preventDefault();
    
// @ts-ignore
var productId=document.getElementById('productId').value;

// @ts-ignore
var productName= $("input[name='productname']").val();
        // @ts-ignore
        var productDescription= $("input[name='productdescription']").val();
        // @ts-ignore
        var productPrice= $("input[name='productprice']").val();
        // @ts-ignore
        var productQuantity= $("input[name='productquantity']").val();
        // @ts-ignore
        var subCategory= $("input[name='subcategory']").val();
        // @ts-ignore
        var productVariant= $("input[name='productvariant']").val();
var url="http://173.255.195.240:8081/catalog/products";+productId;
var body =JSON.stringify({productName:productName,productDescription:productDescription, productQuantity:productQuantity, subCategory:subCategory, productVariant:productVariant, productPrice:productPrice})

var token=window.sessionStorage.get("token") //get according to the way ypu had named the token variable

fetch(url,{
    method:"PATCH",
    headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
 //remember to single space between Bearer and var token
    },
    body:body
}).then((res)=>{

})

})




