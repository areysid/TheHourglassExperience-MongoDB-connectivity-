document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Perform login validation (example: check username and password)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example login validation (replace with your actual validation logic)
    if (username === 'admin' && password === 'password') {
        // Redirect to the home page
        window.location.href = 'index.html';
        
        // Alert successful login
        alert('Logged in successfully');
    } else {
        // Display error message for invalid credentials (replace with your actual error handling logic)
        alert('Invalid username or password');
    }
});
