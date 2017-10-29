(function(){
    
    // Initialize Firebase
    var config = {
            apiKey: "AIzaSyDfjD7sx1ex0FNoL3-9K13Fxid90rgKC0Q",
            authDomain: "myproject-65ddf.firebaseapp.com",
            databaseURL: "https://myproject-65ddf.firebaseio.com",
            projectId: "myproject-65ddf",
            storageBucket: "myproject-65ddf.appspot.com",
            messagingSenderId: "1073575224596"
    };

    firebase.initializeApp(config);  
    
    //Authentication elements
    window.onload = function(){
        var txtEmail = document.getElementById('txtEmail');
        var txtPassword = document.getElementById('txtPassword');
        var btnLogin = document.getElementById('btnLogin');
        var btnSignUp = document.getElementById('btnSignUp');
        var btnLogout = document.getElementById('btnLogout');

        //Login event
        btnLogin.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            //Sign in
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        });

        btnSignUp.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            //Sign in
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => {
                console.log(e.message);
            });
        });

        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
            txtEmail.placeholder.toString = "email";
        });

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log(firebaseUser);
                btnLogout.classList.remove('hide');
                window.location.replace('index.html');
            } else {
                console.log('not logged in');
                btnLogout.classList.add('hide');
            }
        });
    }
    
    function isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;

        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }

        return false;
    }
    
}());