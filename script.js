const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    } )
}

if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    } )
}



// sign in and join in 


document.getElementById('signInButton').addEventListener('click', function() {
    showForm('signInForm');
  });

  document.getElementById('joinButton').addEventListener('click', function() {
    showForm('joinForm');
  });

  function showForm(formId) {
    var forms = document.querySelectorAll('.form-container form');
    var buttons = document.querySelectorAll('.toggle-buttons button');

    forms.forEach(function(form) {
      if (form.id === formId) {
        form.classList.remove('hidden');
      } else {
        form.classList.add('hidden');
      }
    });

    buttons.forEach(function(button) {
      if (button.id === formId.replace('Form', 'Button')) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }


  // signin with google 
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do something with the user's ID
    console.log('Name: ' + profile.getName()); // Do something with the user's name
    console.log('Email: ' + profile.getEmail()); // Do something with the user's email
  }