document.getElementById('submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('pass-field');
    const password = passwordField.value;
    if (email === 'tas@full.com' && password === 'full') {
        window.location.href = 'index.html';
    }
})
