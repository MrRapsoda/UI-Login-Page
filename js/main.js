var button_login = document.getElementById('button-login-mc');
var button_signup = document.getElementById('button-signup-mc');

button_login.addEventListener('click', function() {
    toActiveStateBackgoundColor(this);
    toUnactiveStateBackgoundColor(button_signup);
    var form = document.getElementById('form-signup');
    form.innerHTML = '';
    form.innerHTML = form_login_component;
});

button_signup.addEventListener('click', function() {
    toActiveStateBackgoundColor(this);
    toUnactiveStateBackgoundColor(button_login);
    var form = document.getElementById('form-signup');
    form.innerHTML = '';
    form.innerHTML = form_signup_component;
});

function toActiveStateBackgoundColor(button) {
    button.style.backgroundColor = '#6584E8';
    button.style.color = 'white';
}

function toUnactiveStateBackgoundColor(button) {
    button.style.backgroundColor = 'white';
    button.style.color = '#6584E8';
}

const form_login_component = `
    <h3>EMAIL</h3>
    <input class="form-input" type="email" name="input-email" id="email" placeholder="example@example.com"><br>
    
    <h3>PASSWORD</h3>
    <input class="form-input" type="password" name="input-password" id="password" placeholder="Your password here"><br>
    <button id="button-login">Login</button>`;

const form_signup_component = `
    <h3>FULL NAME</h3>
    <input class="form-input" type="text" name="input-name" id="name" placeholder="Your name here">

    <h3>PASSWORD</h3>
    <input class="form-input" type="password" name="input-password" id="password" placeholder="Your password here">

    <h3>EMAIL</h3>
    <input class="form-input" type="email" name="input-email" id="email" placeholder="example@example.com"><br>

    <input type="checkbox" id="terms-conditions" name="terms-conditions" value="terms-conditions">
    <label for="terms-conditions"> Accept the <a href="" id="anchor-terms">terms and conditions</a></label>

    <br>

    <button id="submit-button-signup">Sign Up</button>`;