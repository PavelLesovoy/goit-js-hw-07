const categoriesElements = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesElements.length);

categoriesElements.forEach(function(categories){
    console.log("Category:",categories.firstElementChild.textContent);
    console.log("Elements:",categories.lastElementChild.children.length);
})