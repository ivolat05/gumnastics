//= components/slick.min.js
//= components/jquery.mCustomScrollbar.js
//= components/jquery.magnific-popup.js
//= components/wow.min.js
//= components/jquery.maskedinput.min.js
$(function () {
    new WOW().init();
    $("#telForm").mask("+3(999) 999-99-99");
    $("#telForm-2").mask("+3(999) 999-99-99");
    $("#telForm-3").mask("+3(999) 999-99-99");
    $("#telForm-4").mask("+3(999) 999-99-99");
    $("#telForm-5").mask("+3(999) 999-99-99");
});

$(function () {
    if (navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1) {
        $("body").addClass("safari");
    }
});




$('.menu__burger').click((event) => {
    $('.menu__burger').toggleClass('burger__active'),
        $('body').toggleClass('stop'),
        $('.burger-link').toggleClass('burger-link-stop'),
        $('.header__wrapp-inner').toggleClass('header__wrapp-inner--active'),
        $('.logo').toggleClass('logo--active')
});

// scroll speed fix
let navListLink = document.querySelectorAll('.nav__list-link');
navListLink.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('body').classList.remove('stop');
        document.querySelector('.menu__burger').classList.remove('burger__active');
        document.querySelector('body').classList.remove('stop');
        document.querySelector('.burger-link').classList.remove('burger-link-stop');
        document.querySelector('.header__wrapp-inner').classList.remove('header__wrapp-inner--active');
        document.querySelector('.logo').classList.remove('logo--active');
    });

});



// popup close
function closePopup() {
    $.magnificPopup.close();
}

$(".scroll-link").click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 100
    }, 2500);
    return false;
});



// slaider main__box
$('.main__box-slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

$('.information__wrapp').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 998,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

//price tabs

const priceBtn = document.querySelectorAll('.price-btn');
const tabItem = document.querySelectorAll('.price__box-slaider');
priceBtn.forEach((item) => {
    item.addEventListener('click', function () {
        let activeBtn = item;
        let activeId = activeBtn.getAttribute('data-price');
        let activeTab = document.querySelector(activeId);


        if (!activeBtn.classList.contains('btn-active')) {
            priceBtn.forEach(function (item) {
                item.classList.remove('btn-active');
            });
            tabItem.forEach(function (item) {
                item.classList.remove('price__slaider-acive');
            });

            activeBtn.classList.add('btn-active');
            activeTab.classList.add('price__slaider-acive');
        }
    });

});

// problem tabs
const problemBtn = document.querySelectorAll('.proble__img-link');
const problemTab = document.querySelectorAll('.problem__tab');
problemBtn.forEach((item) => {
    item.addEventListener('click', function () {
        let activeBtn = item;
        let activeId = activeBtn.getAttribute('data-tab');
        let activeTab = document.querySelector(activeId);
        let problemCol = document.querySelector('.problem__col');




        if (!activeBtn.classList.contains('problem--active')) {
            problemBtn.forEach(function (item) {
                item.classList.remove('problem--active');
            });
            problemTab.forEach(function (item) {
                item.classList.remove('problem__tab-active');
            });

            activeBtn.classList.add('problem--active');
            activeTab.classList.add('problem__tab-active');
        }


        if (window.innerWidth <= 992) {
            $('html, body').animate({
                scrollTop: $(problemCol).offset().top - 100
            }, 2500);
            return false;
        }


    });

});

// price slaider

$('.traniner-slaider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
    arrows: true,
    responsive: [{
        breakpoint: 1300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});


// slaider trainer


$('.price__slaider').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
    arrows: true,
    responsive: [{
        breakpoint: 1380,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

// slaider question

$('.question__slaider').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
    arrows: true
});

// slaider reviews
$('.reviews__slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

// slaider foto


$('.foto__slaider').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".foto-slick-prev"),
    nextArrow: $(".foto-slick-next")
});

// ???????????????? ???????????????????? ?????????????????? ?? input
const popupFormInput = document.querySelectorAll('.popup-input-fix');

popupFormInput.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.add('red-del');

    })

    document.addEventListener('click', (e) => { // ???????????? ???????????????????? ???? ???????? ????????????????
        popupFormInput.forEach((item) => {

            if (!$(item).is(":focus") && item.value == '') {
                item.classList.remove('red-del');
            }
        });
    });

});






$('.buy__wrapp').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
    arrows: true,

});

// popup
$('.popup-content').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade'
});
window.addEventListener("resize", function () {
    $('.popup-content').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade'
    });


});

document.querySelector('.test').addEventListener('click', function () {
    $('.price__slaider-2').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
        arrows: true,
        responsive: [{
            breakpoint: 1380,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
    $('.popup-content').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade'
    });
})
