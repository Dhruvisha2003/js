
login();
function login(){
    let name = prompt('Enter Username :');
    let password = prompt('Enter Password :');

    if(name == "Dhruvisha" && password == 93289){
        alert('Welcome to Dashboard');
        return;
    }else{
        alert('invalid Username or Password');
        login();
    }
}   



 