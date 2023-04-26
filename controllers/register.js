//post user
document.querySelector('#btnSubmit').onclick = function() {
    userEmail = document.querySelector('#email').value ;
    userName = document.querySelector('#name').value ;
    userPassWord = document.querySelector('#password').value ;
    userConfirm = document.querySelector('#password-confirm').value ;
    userPhone = document.querySelector('#phone').value ;
   
    var promise = axios ({
        url : 'https://shop.cyberlearn.vn/api/Users/signup',
        method : 'POST',
        data: user,
    })
  
    promise.then(function(result){
        console.log(result.data.content);        
    })
  
    promise.catch(function(err){
        console.log(err);
    })
  }
  
  const form = document.getElementById('form');
  
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userPassWord !== userConfirm ){
    alert ("Mật khẩu không khớp!")
  } else if (!validateForm()) {
  return;
  }
  else {
    const formData = new User(
      userName,
      userEmail,
      userPhone
    )
      let json = JSON.stringify(formData);
      localStorage.setItem(userName, json);
      alert("Đăng ký thành công!");
      window.location.href = "./index.html";
  }
  console.log(Object.fromEntries(formData));
  // You can send the form data to a server using an AJAX request or fetch()
  });
  
  
  // VALIDATION
  
  // check min & max length
  
  function length(val, config) {
    if (val.length < config.min || val.length > config.max) {
      document.getElementById(
        config.errorCode
      ).innerHTML = `*Độ dài phải từ ${config.min} đến ${config.max} ký tự`;
      document.getElementById(config.errorCode).style.display = "block";
      return false;
    }
    document.getElementById(config.errorCode).innerHTML = "";
    return true;
  }
  
  function required(val, config) {
    if (val.length > 0) {
      document.getElementById(config.errorCode).style.display = "none";
      return true;
    }
    document.getElementById(config.errorCode).innerHTML =
      "* Hãy nhập thông tin!";
    document.getElementById(config.errorCode).style.display = "block";
    return false;
  }
  // Pattern Name
  function patternName(val, config) {
    if (config.regexp.test(val)) {
      document.getElementById(config.errorCode).style.display = "none";
      return true;
    }
    document.getElementById(config.errorCode).innerHTML =
      "*Tên không được có số hoặc ký tự đặc biệt";
    document.getElementById(config.errorCode).style.display = "block";
    return false;
  }
  
  // Pattern mail
  function patternEmail(val, config) {
    if (config.regexp.test(val)) {
      document.getElementById(config.errorCode).style.display = "none";
      return true;
    }
    document.getElementById(config.errorCode).innerHTML = "*Email không hợp lệ!";
    document.getElementById(config.errorCode).style.display = "block";
    return false;
  }
  
  // Pattern password
  function patternPassword(val, config) {
    if (config.regexp.test(val)) {
      document.getElementById(config.errorCode).style.display = "none";
      return true;
    }
    document.getElementById(config.errorCode).innerHTML =
      "*Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt!";
    document.getElementById(config.errorCode).style.display = "block";
    return false;
  }
   // Pattern phone
   function patternPhone(val, config) {
    if (config.regexp.test(val)) {
      document.getElementById(config.errorCode).style.display = "none";
      return true;
    }
    document.getElementById(config.errorCode).innerHTML =
      "*Số điện thoại không đúng định dạng!";
    document.getElementById(config.errorCode).style.display = "block";
    return false;
  }
  
  
  
  function validateForm() {
    userEmail = document.querySelector('#email').value ;
    userName = document.querySelector('#name').value ;
    userPassWord = document.querySelector('#password').value ;
    userPhone = document.querySelector('#phone').value ;
  
    var nameValid =
      required(userName, { errorCode: "tbName" }) &&
      length(userName, { errorCode: "tbName", min: 4, max: 20 }) &&
      patternName(userName, {
        errorCode: "tbName",
        regexp:
          /^[A-zaAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]+$/g,
      });
  
    var emailValid =
      required(userEmail, { errorCode: "tbEmail" }) &&
      patternEmail(userEmail, {
        errorCode: "tbEmail",
        regexp: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      });
  
    var passwordValid =
      required(userPassWord, { errorCode: "tbPass" }) &&
      length(userPassWord, { errorCode: "tbPass", min: 6, max: 20 }) &&
      patternPassword(userPassWord, {
        errorCode: "tbPass",
        regexp: /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/g,
      });
      
      var phoneValid =
      required(userPhone, { errorCode: "tbPhone" }) &&
      patternPhone(userPhone, {
        errorCode:"tbPhone",
        regexp: /((09|03|07|08|05)+([0-9]{8})\b)/g,
    });
    var isFormValid =
      nameValid &&
      emailValid &&
      phoneValid &&
      passwordValid
    return isFormValid;
  }