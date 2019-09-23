class APIService {
    constructor() {
        this._baseURL = "https://newsapi.org/v2/top-headlines?country=";
        this._apiKey = "&apiKey=18f1c87e444741aca30db0a569bba999";
    }

    async getNews(country){
        const data = await fetch(`${this._baseURL}${country}${this._apiKey}`);
        if(!data.ok){
            throw new Error("Couldn't fetch data from API")
        } else{
            return await data.json()
        }
    }
}

let api = new APIService();
// let news = api.getNews();
// console.log("news =>>>", news);

api.getNews("ua")
// api.getNews("de") // можна так дістатися до новин німецьких
.then(news => {
    console.log("news =>>>", news.articles);
    let newsArr = news.articles;
    console.log(newsArr.length/2);
    let firstParent = document.getElementById('first-column');
    for (let i = 0; i < newsArr.length/2; i++) {
        let child = document.createElement('div');
        child.classList.add("box-item");
        let boxPost = document.createElement('div');
        boxPost.classList.add("box-post");
        let author = document.createElement('span');
        author.classList.add("label");
        author.classList.add("label-success");
        author.innerHTML = newsArr[i].author;
        boxPost.appendChild(author);
        let title = document.createElement('h1');
        title.classList.add("post-title");
        let titleAnchor = document.createElement('a');
        titleAnchor.href = newsArr[i].url;
        titleAnchor.innerHTML = newsArr[i].title;
        title.appendChild(titleAnchor);
        boxPost.appendChild(title);
        let meta = document.createElement('span');
        meta.classList.add("meta");
        let time = document.createElement('i');
        time.classList.add("glyphicon");
        time.classList.add("glyphicon-time");
        meta.innerHTML = newsArr[i].publishedAt.slice(0,10) + " ";
        meta.appendChild(time);
        boxPost.appendChild(meta);
        let image = document.createElement('img');
        image.src = newsArr[i].urlToImage;
        child.appendChild(boxPost);
        child.appendChild(image);
        firstParent.appendChild(child);
    }
    let secondParent = document.getElementById('second-column');
    for (let i = newsArr.length/2; i < newsArr.length; i++) {
        let child = document.createElement('div');
        child.classList.add("box-item");
        let boxPost = document.createElement('div');
        boxPost.classList.add("box-post");
        let author = document.createElement('span');
        author.classList.add("label");
        author.classList.add("label-success");
        author.innerHTML = newsArr[i].author;
        boxPost.appendChild(author);
        let title = document.createElement('h1');
        title.classList.add("post-title");
        let titleAnchor = document.createElement('a');
        titleAnchor.href = newsArr[i].url;
        titleAnchor.innerHTML = newsArr[i].title;
        title.appendChild(titleAnchor);
        boxPost.appendChild(title);
        let meta = document.createElement('span');
        meta.classList.add("meta");
        let time = document.createElement('i');
        time.classList.add("glyphicon");
        time.classList.add("glyphicon-time");
        meta.innerHTML = newsArr[i].publishedAt.slice(0,10) + " ";
        meta.appendChild(time);
        boxPost.appendChild(meta);
        let image = document.createElement('img');
        image.src = newsArr[i].urlToImage;
        child.appendChild(boxPost);
        child.appendChild(image);
        secondParent.appendChild(child);
    }
    // console.log('firstParent', firstParent)
    // console.log('secondParent', secondParent)
})

// .then(({status, articles}) => { //деструктуризація
//     console.log("articles =>>>", articles); //деструктуризація
//     console.log("status =>>>", status); //деструктуризація
// })

.catch(err => {
    console.log("catch===>", err.message)
}); //вивести на екрані