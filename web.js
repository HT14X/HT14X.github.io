function createApp() {
    return new Vue({
        el: '#app',
        data: {
            development: [],
            articles: [],
        }
    });
}

function setContentData(dataUrl, name, app) {
    fetch(dataUrl).then(response => response.json())
        .then(data => app[name] = data.items);
}

function main() {
    const app = createApp();
    setContentData("./articles.json", "articles", app);
    setContentData("./development.json", "development", app);
}

main();