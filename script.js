// function toggleForms(formType) {
//     const loginForm = document.getElementById('login-form');
//     const signupForm = document.getElementById('signup-form');
//     const logoutForm = document.getElementById('logout-form');
  
//     // Hide all forms
//     loginForm.classList.remove('active');
//     signupForm.classList.remove('active');
//     logoutForm.classList.add('hidden');
  
//     // Show the selected form
//     if (formType === 'login') {
//       loginForm.classList.add('active');
//     } else if (formType === 'signup') {
//       signupForm.classList.add('active');
//     }
//   }
  
//   function logout() {
//     alert('You have logged out.');
//     toggleForms('login');
//   }
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}