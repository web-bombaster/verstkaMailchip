const headerFixed = () => {
    const header = document.querySelector('.header');
    const heightHeader = header.offsetHeight; // высота хедера
    let posTop = window.pageYOffset; // позиция прокрутки

    if (posTop > 0) {
        header.classList.add('active');
        header.parentElement.style.paddingTop = heightHeader + 'px';
    } else {
        header.classList.remove('active');
        header.parentElement.style.paddingTop = 'inherit';
    };
};

headerFixed();
window.addEventListener("resize", headerFixed);
window.addEventListener('scroll', headerFixed);