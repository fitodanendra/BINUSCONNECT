document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('tombolSubmit');
  
    console.log(btn); 
  
    
    btn.addEventListener('click', () => {
        test();
    });
  });

  function test () {

    var userEmail = document.querySelector("#userEmail").value.trim();
    var userPassword = document.querySelector("#userPassword").value.trim();

    if (userEmail === '') {
        alert('Please input your Email!');
    } else if (userPassword === '') {
        alert('Please input your Password!');
    } else {
        window.location.href = 'homepage.html';
  
        
    }

}
