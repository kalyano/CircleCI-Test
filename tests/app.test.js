const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
const dom = new JSDOM(html);
global.document = dom.window.document;

require('../script');

test('Button click displays text', () => {
    const button = document.getElementById("displayTextButton");
    button.click();
    const text = document.getElementById("textContainer").innerText;
    expect(text).toBe("Hello, CircleCI!");
});
