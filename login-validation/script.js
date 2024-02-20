function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.innerHTML = 'Please enter both username and password.';
        return false;
    } else {
        errorMessage.innerHTML = '';
       
        return true;
    }
}
