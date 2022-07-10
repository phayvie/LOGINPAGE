var createUserBtn = document.querySelector('h3');
var container = document.querySelector('.container');
var createdUser = document.querySelector('.create');
var cancelCreateUser = document.querySelector('.create .create-user .container p');
var username1 = document.querySelector('.username1');
var password1 = document.querySelector('.password1');
var username2 = document.querySelector('.username2');
var password2 = document.querySelector('.password2');
var confirmpassword = document.querySelector('.confirmpassword');
var submit = document.querySelector('.submit');
var createdSuccessfully = document.querySelector('.create-user .container .login :nth-child(5)')
var loginBtn = document.querySelector('.login-btn');
var welcomee = document.querySelector('.welcomee');
var welcome2 = document.querySelector('.welcome2');
var goaway = document.querySelector('.goaway');
var popp = document.querySelector('.popp');
var yes = document.querySelector('.yes');
var yes = document.querySelector('.yes');
var no = document.querySelector('.no');
var check = document.querySelector('.check');
var chec = document.querySelector('.chec');
var date = document.querySelector('.date');
//  console.log(username1)
 
  function showCreateUser(){
    createdUser.classList.add('show');
    container.classList.add('show');

  }
     //  createUserBtn.addEventListener('click', showCreateUser);

  function removeCreateUser(){  
   createdUser.classList.remove('show')
 }
  
 

  function submitt(){
     var a= username2.value;
     var b= password2.value;
     var c= confirmpassword.value;
     if(a!=""&b!=""&c!=""){
       localStorage.setItem(`${a}`,JSON.stringify(a))
     localStorage.setItem(`${b}`,JSON.stringify(b))
     localStorage.setItem(`${a}`+ `${b}`,JSON.stringify(b))
     createdSuccessfully.classList.add('show');
     createUserBtn.classList.add('hide');
     window.alert('user created successfully');
     document.location.reload()
     }
     else{
       setInterval(() => {
         username2.style.border='1px solid red'
         password2.style.border='1px solid red'
         confirmpassword.style.border='1px solid red'
       }, 1000);
       setInterval(() => {
         username2.style.border='1px solid grey'
         password2.style.border='1px solid grey'
         confirmpassword.style.border='1px solid grey'
       }, 2000);
       check.classList.add('show')
     }
     

     //    const newdiary = document.createElement("p");
     //    const node = document.createTextNode("This is new.");
     //    newdiary.appendChild(node);

     //   diaryPage.appendChild(newdiary);
     //    console.log(diaryPage)
    
     
 }
 
function car(){
 var c= confirmpassword.value;
  var d = username1.value
  var e = password1.value
  if(localStorage.getItem(`${d}`)&&localStorage.getItem(`${e}`)&&localStorage.getItem( `${d}`+`${e}`)){
     // for (i = 0; i < localStorage.length; i++) {
     //   x = localStorage.key(i);
     //   console.log(x);
     // }
     welcomee.classList.add('show');
     welcome2.innerHTML+=JSON.parse( localStorage.getItem(`${d}`)).toUpperCase()   
  } 
else{
 chec.classList.add('show')
}

}

function areyousure(){
 popp.classList.add('show')
}

function rem(){
  popp.classList.remove('show')
  welcomee.classList.remove('show')
  username1.value = ''
  password1.value= ''
  window.alert( "user logged out");
}

function mer(){
  popp.classList.remove('show')
}


date.innerHTML += new Date()


