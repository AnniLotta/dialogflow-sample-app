// Dom7
let $$ = Dom7;

// Framework7 App main instance
let app = new Framework7({
    el: '#app', // App root element
    name: 'Dialogflow app', // App name
    id: 'Dialogflowapp',
    // App root data
    statusbar: {
        enabled: false,
    },
    data: function () {
        return {
        };
    }
});

// Init/Create main view
let mainView = app.views.create('.view-main');

let language = 'English';
function changeLanguage(lang) {
    language = lang;
    let toChange = document.getElementsByClassName('language');
    for (let i = 0; i < toChange.length; i++) {
        toChange.item(i).innerText = language;
    }
    runSample();
}