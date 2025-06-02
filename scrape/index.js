const cheerio = require("cheerio");


const url = "https://www.basketballdirect.com/";

fetch(url)
  .then(response => response.text())
  .then(html => {
    console.log(html);
    const $ = cheerio.load(html);
    console.log($("h2").text());
  })
  .catch(error => console.error(error));