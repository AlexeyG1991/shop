"use strict";

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';

if (document.querySelector('.main-block__slider')) {
    new Swiper('.swiper-header', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 50,
        // швидкість, за замовчуванням 300
        speed: 800,
        // змінює курсор миші при наведенні
        grabCursor: true,
        slidesPerGroup: 1,
        // безкінечний
        loop: true,

        // автопрокрутка
        autoplay: {
            // пауза міжду прокруткой
            delay: 3000,
        },

        pagination: {
            el: '.controll-main-block_dotts',
            clickable: true,
        },

        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.fraction-controll__all');
                const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
                allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector('.fraction-controll__current');
                currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            }
        }
    });
}

if (document.querySelectorAll('.page__products-slider')) {
    new Swiper('.products-slider__swiper', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.products-slider__dotts',
            clickable: true,
        },

        // breakpoints -----------------------------------------
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1370: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}

if (document.querySelector('.products-new')) {
    new Swiper('.products-new__swiper', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.products-new__dotts',
            clickable: true,
        },

        // breakpoints -----------------------------------------
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

};

if (document.querySelector('.page__products-slider_action')) {
    new Swiper('.products-slider__swiper_action', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.products-slider__dotts_action',
            clickable: true,
        },

        // breakpoints -----------------------------------------
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1370: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}

if (document.querySelector('.images-thumbs')) {
    const thumbsSwiper = new Swiper('.images-thumbs', {
        modules: [Navigation, Pagination, Autoplay, Thumbs],
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
            el: '.products-new__dotts',
            clickable: true,
        },

        // breakpoints -----------------------------------------
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },
    });
    new Swiper('.images-product__slider', {
        modules: [Navigation, Pagination, Autoplay, Thumbs],
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
    });

};

// -------------------Зірковий рейтинг------------------
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}
// Основна функція
function initRatings() {
    let ratingActive, ratingValue;
    // "Бігаємо" по всім рейтингам на сторінці
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    // Ініціюємо конкретний рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    // Ініціюємо змінних
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    // Змінюємо ширину активних зірок
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    // Можливість указувати оцінку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                // Обновлення змінних
                initRatingVars(rating);
                // Обновлення активниз зірок
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function (e) {
                // Обновлення активниз зірок
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
                // Обновлення змінних
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    // "Відправити" на сервер
                    setRatingValue(ratingItem.value, rating);
                } else {
                    // Відправити вказану оцінку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }

    // ------------------Точний рейтинг (JS + AJAX):-------------------------------
    async function setRatingValue(value, rating) {
        if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');

            // Отправка даних (value) на сервер
            let response = await fetch('rating.json', {
                method: 'GET',

                // Для справжньої відправки
                // body: JSON.stringify({
                //     userRatihg: value
                // }),
                // headers: {
                //     'content-type': 'appLication/json'
                // }

            });
            if (response.ok) {
                const result = await response.json();

                // Отримуємо новий рейтинг
                const newRating = result.newRating;

                // Вивід нового середнього результату
                ratingValue.innerHTML = newRating;

                // Обновлення активних зірок
                setRatingActiveWidth();

                // Закоментовано для відображення opacity
                // rating.classList.remove('rating_sending');
            } else {
                alert("Помилка");

                rating.classList.remove('rating_sending');
            }
        }
    }
}

// ------------------------nouislider------------------------------
// import * as noUiSlider from 'nouislider';
import noUiSlider from 'nouislider';

export function rangeInit() {
    const rangeItems = document.querySelectorAll('[data-range]');
    if (rangeItems.length) {
        rangeItems.forEach(rangeItem => {
            const fromValue = rangeItem.querySelector('[data-range-from]');
            const toValue = rangeItem.querySelector('[data-range-to]');
            const item = rangeItem.querySelector('[data-range-item]');
            const inputs = [fromValue, toValue];
            noUiSlider.create(item, {
                // start: [Number(fromValue.value), Number(toValue.value)],
                start: [300, 2500],
                connect: true,
                tooltips: [true, true],
                range: {
                    'min': [Number(fromValue.dataset.rangeFrom)],
                    'max': [Number(toValue.dataset.rangeTo)],
                }
            });
            item.noUiSlider.on('update', function (values, handle) {
                // fromValue.value = values[handle];
                // toValue.value = values[handle];
                inputs[handle].value = values[handle];
            });
            // var stepsSlider = document.getElementById('steps-slider');
            // var input0 = document.getElementById('input-with-keypress-0');
            // var input1 = document.getElementById('input-with-keypress-1');
            // var inputs = [input0, input1];

            // noUiSlider.create(stepsSlider, {
            //     start: [20, 80],
            //     connect: true,
            //     tooltips: [true, wNumb({ decimals: 1 })],
            //     range: {
            //         'min': [0],
            //         '10%': [10, 10],
            //         '50%': [80, 50],
            //         '80%': 150,
            //         'max': 200
            //     }
            // });

            // stepsSlider.noUiSlider.on('update', function (values, handle) {
            //     inputs[handle].value = values[handle];
            // });
        });
    }
}
rangeInit();


// ------------------------spoller-filtr------------------------------
if (document.querySelector('.filter-catalog__title')) {
    document.querySelector('.filter-catalog__title').addEventListener("click", function (e) {
        if (window.innerWidth < 992) {
            document.querySelector('.filter-catalog__items').classList.toggle('_active');
        }
    });
}