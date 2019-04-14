var showdown = require('showdown'),
    converter = new showdown.Converter(),
    text = require('./static/texts.md'),
    html = converter.makeHtml(text);

function Home() {
    return html;
}

export default Home;