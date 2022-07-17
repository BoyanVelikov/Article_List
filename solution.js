function createArticle() {
    const articles = document.getElementById("articles");
    const h3 = document.createElement("h3");
    const paragraph = document.createElement('p');
    const newArticle = document.createElement('article');

    if (document.getElementById('createTitle').value !== "" && document.getElementById('createContent').value !== ""){
        h3.innerHTML = document.getElementById('createTitle').value;
        paragraph.innerHTML = document.getElementById('createContent').value;
        newArticle.appendChild(h3);
        newArticle.appendChild(paragraph);
        articles.appendChild(newArticle);
    }

    document.getElementById('createTitle').value = '';
    document.getElementById('createContent').value = '';
  
 
}