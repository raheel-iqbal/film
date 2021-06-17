window._ = require('lodash');
try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}
// The axios part I might talk about
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

var userToken = localStorage.getItem('user');
if (userToken && userToken.access_token) {
    axios.defaults.headers.common['Authorization'] = userToken.access_token;
} else {
    axios.defaults.headers.common['Authorization'] = null;
    /*if setting null does not remove `Authorization` header then try
      delete axios.defaults.headers.common['Authorization'];
    */
}

