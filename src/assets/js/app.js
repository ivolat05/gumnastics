//= components/slick.min.js
//= components/jquery.mCustomScrollbar.js

// slaider main__box
$('.main__box-slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
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

// price slaider

$('.traniner-slaider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
    arrows: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 780,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
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
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
})

// slaider trainer


$('.price__slaider').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
    arrows: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 780,
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
    nextArrow: $(".foto-slick-next"),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 780,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

// удаление добовление звездочки в input
const popupFormInput = document.querySelectorAll('.popup-input-fix');

popupFormInput.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.add('red-del');

    })

    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
        popupFormInput.forEach((item) => {

            if (!$(item).is(":focus") && item.value == '') {
                item.classList.remove('red-del');
            }
        });
    });

});



