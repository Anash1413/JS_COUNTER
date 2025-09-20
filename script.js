let sharePage = document.querySelector('.share-page');
let lallaguru = document.querySelector('.lallaguru');

const active = () => {
    sharePage.classList.add("active");
    lallaguru.classList.add("lactive");
}

const close = () => {
    sharePage.classList.remove("active");
    lallaguru.classList.remove("lactive");
}
