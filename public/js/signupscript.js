document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Retrieve form data
        const formData = new FormData(document.getElementById('signupForm'));
        
        // Send form data to server using fetch API
        fetch('/signup', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to sign up'); // Throw error if response is not successful
            }
            return response.json(); // Parse response JSON
        })
        .then(data => {
            // Handle successful signup (optional)
            console.log('Signup successful:', data);
            // Redirect to another page, display success message, etc.
        })
        .catch(error => {
            // Handle errors (e.g., validation errors, server errors)
            console.error('Signup failed:', error.message);
            // Display error message to the user, log error, etc.
        });
    }

    // Add event listener for form submission
    document.getElementById('signupForm').addEventListener('submit', handleFormSubmission);
});
