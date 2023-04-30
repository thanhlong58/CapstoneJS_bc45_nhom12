//gan gia tri gender
const maleRadio = document.getElementById('male');
const femaleRadio = document.getElementById('female');

let gender = null;


maleRadio.addEventListener('click', () => {
  gender = true;
});


femaleRadio.addEventListener('click', () => {
  gender = false;
});
  
  document.querySelector('#join-btn').onclick = function () {

    var user = new User();
    
    
    user.email = document.querySelector('#email').value ;
    user.name = document.querySelector('#name').value ;
    user.password = document.querySelector('#password').value ;
    user.gender = gender;
    user.phone = document.querySelector('#phone').value ;
    

    var genderValid = document.querySelector('#validation-gender');
    var emailValid = document.querySelector('#validation-email');
    var nameValid = document.querySelector('#validation-name');
    var phoneValid = document.querySelector('#validation-phone');
    var passwordValid = document.querySelector('#validation-password');
    var passwordConfirmValid = document.querySelector('#validation-password-confirm');
    const genderMale = document.querySelector('#male');
    const genderFemale = document.querySelector('#female');


    //validation 
  //validation 
  let arrSpanValid  = document.querySelectorAll('span#validation');
  let valid = true;

  //kiem tra check gender
  if (!genderMale.checked && !genderFemale.checked) {
    document.querySelector('#validation-gender').innerHTML = 'Please select a gender';
    valid =  false;
    
  } else {
    document.querySelector('#validation-gender').innerHTML = '';
    valid =  true;
  }

  //kiem tra password confirm 
  const passwordConfirm = document.querySelector('#confirm-password').value;
  if(passwordConfirm === user.password) {
    passwordConfirmValid.innerHTML = '';
    valid = true;
  }else {
  passwordConfirmValid.innerHTML = 'Passwords do not match'
    valid = false
  }

  //kiem tra rong
  valid = kiemTraRong(user.email,emailValid.id) & kiemTraRong (user.name,nameValid.id)
  & kiemTraRong (user.password,passwordValid.id) & kiemTraRong(user.phone,phoneValid.id);
  //kiem tra ten 
  if(kiemTraRong(user.name,nameValid.id)) {
    valid = valid & kiemTraTen(user.name,nameValid.id);
  }
  //kiem tra email
  if(kiemTraRong(user.email,emailValid.id)) {
    valid = valid & kiemTraEmail(user.email,emailValid.id);
  }
  //kiem tra sdt
  if(kiemTraRong(user.phone,phoneValid.id)) {
    valid = valid & kiemTraPhone(user.phone,phoneValid.id);
  }
  

  //kiem tra mat khau 
  if(kiemTraRong(user.password,passwordValid.id)) {
    valid = valid & kiemtraMatKhau(user.password,passwordValid.id);
  }
  
  
  if (valid && passwordConfirm === user.password && (genderMale.checked || genderFemale.checked)) {
    var promise = axios ({
      url : 'https://shop.cyberlearn.vn/api/Users/signup',
      method : 'POST',
      data: user,

  })




  promise.then(function(result){
      console.log(result.data);
      alert(`Registration successful.Welcome onboard ${user.name}!`);
    document.querySelector('#form-sign-up').reset();

      
  })

  promise.catch(function(err){
   
     var data = err.response.data.content;
     console.log(data);
     if(user.email === data.email) {
      alert('Email already registered')
     }
  })


   }
    

  if (!valid) {
    return
  }
 

   

  }






//show/hide password
document.getElementById('showPassWord').onclick = function () {
  var x = document.getElementById('password');
  if (x.type === "password") {
      x.type = "text";
      document.querySelector('#showPassWord').style.color = 'red'
  } else {
      x.type = "password";
      document.querySelector('#showPassWord').style.color = 'grey'
  }
}