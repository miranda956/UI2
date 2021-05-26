$("document").ready(()=>{

$('change_password').on('click',function(e){
    e.preventDefault();
    
    var email=document.getElementById('email').value
    var url=""+email;

    fetch(url,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, //remember to single space between Bearer and var token

        }
    })



})
})