
// @ts-ignore
$('#add_service').on('click', function(e){
    e.preventDefault();
    // @ts-ignore
    var addservice =function(){
        // @ts-ignore

var charges= $("input[name='charges']").val();
  // @ts-ignore
  var description= $("input[name='description']").val();
  // @ts-ignore
  var locationName= $("input[name='locationName']").val();
  // @ts-ignore
  // @ts-ignore
  var name= $("input[name='name']").val();
        
        // declare url
        var url="http://173.255.195.240:8081/services/providers/services"
        
        var body= JSON.stringify({charges:charges, description:description,locationName:locationName,name:name})


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
$('#update_service').on('click', function(e){
    e.preventDefault();


    
})