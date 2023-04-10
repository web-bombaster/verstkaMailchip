const headerFixed = () => {
    const header = document.querySelector('.header');
    const heightHeader = header.offsetHeight; // высота хедера
    let posTop = window.pageYOffset; // позиция прокрутки
    console.log(posTop);

    if (posTop > 0) {
        header.classList.add('active');
        header.parentElement.style.paddingTop = heightHeader + 'px';
    } else {
        header.classList.remove('active');
        header.parentElement.style.paddingTop = 'inherit';
    };
};

headerFixed();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);
window.addEventListener('scroll', headerFixed);