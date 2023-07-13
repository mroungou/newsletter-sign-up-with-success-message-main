const validationMessage = 'Valid email is required';
const email = document.getElementById('email');

function isEmail(email) {
    return email.match(/^[-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|"([^"\s<>@,]+(\.[^"\s<>@,]+)*)"@([-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/i);
}


window.addEventListener('DOMContentLoaded', function() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        validateEmail();
    })
});