const categories = document.querySelector("#categories");
const items = document.querySelectorAll("li.item")

console.log(`Number of categories ${items.length}`)

items.forEach(i => {
    const title = i.querySelector('h2').textContent;
    const elem = i.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elem}`);
});
