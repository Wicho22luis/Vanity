document.body.onload = function () {
    var nav = document.getElementById('headerContainer');
    var brand = document.querySelector('#BrandText');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            nav.classList.add('bgFilled', 'shadow');
            brand.style.color = ("black");
        } else {
            nav.classList.remove('bgFilled', 'shadow');
            brand.style.color = ("white");
        }
    })
}