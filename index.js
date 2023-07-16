const validationMessage = 'Valid email is required';



function isEmail(emailValue) {
    return emailValue.match(/^[-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|"([^"\s<>@,]+(\.[^"\s<>@,]+)*)"@([-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/i);
}


function validateEmail () {
    const main = document.getElementById('main');
    const signUp = document.getElementById('sign-up');
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    const success = document.getElementById('success');
    const successEmail = document.getElementById('successEmail');
    if (email.value === '' || !isEmail(email.value)) {
        setError(email, validationMessage);
    } else {
        setNoError(email);
        signUp.style.display = 'none';
        success.style.display = 'block';
        successEmail.innerText = emailValue;
        main.style.padding = '1rem';
    }
}

function setError(element, message) {
    const inputField = element.parentElement;
    const displayError = inputField.querySelector('.error');

    displayError.innerText = message;
    inputField.classList.add('has-error');
    inputField.classList.remove('not-error');
}

function setNoError(element) {
    const inputField = element.parentElement;
    const displayError = inputField.querySelector('.error');

    displayError.innerText = '';
    inputField.classList.add('not-error');
    inputField.classList.remove('has-error');
    
}

window.addEventListener('DOMContentLoaded', function() {
    const form = this.document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        validateEmail();
    })
});
