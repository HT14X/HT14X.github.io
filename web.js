var app = new Vue({
    el: '#app',
    data: {
        development: [],
        articles: [],
    }
});
fetch("./articles.json").then(response => response.json())
    .then(data => app.articles = data.items);
fetch("./development.json").then(response => response.json())
    .then(data => app.development = data.items);