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
    
    // Grab objects from database
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    // Sync object changes
    dbRefObject.on('value', snap => {
        var object = document.getElementById('object');
        object.innerText = JSON.stringify(snap.val(), null, 3);
    });
    
    // Add to list of hobbies
    dbRefList.on('child_added', snap => {
        var ulList = document.getElementById('list');
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });
    
    // Change list of hobbies
    dbRefList.on('child_changed', snap =>{
        const liChanged = document.getElementById(snap.key); 
        liChanged = snap.val();
    });
    
    // Remove hobby from list
    dbRefList.on('child_removed', snap =>{
        const liRemove = document.getElementById(snap.key); 
        liRemove.remove();
    });
    
}());