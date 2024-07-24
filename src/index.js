import JustValidate from 'just-validate';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// １つ目のスライド
const swiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let titleContainer = document.getElementById('swiper-title');
let titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')
titleContainer.appendChild(titleElement);

function onslideChange() {
    titleElement.remove();
    titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')
    titleContainer.appendChild(titleElement);
}
swiper.on('slideChange', onslideChange);

// ２つ目のスライド
const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const titles = [
    "濡れて細くなった猫",
    "ワクチン",
    "羽なし扇風機",
    "悔しくてハンカチを噛む人のイラスト（男性）",
];

let titleContainer2 = document.getElementById('swiper-title-2');
let titleElement2 = document.createTextNode(titles[swiper2.realIndex])
titleContainer2.appendChild(titleElement2);

function onslideChange2() {
    console.log('slide changed');
    console.log(swiper2.activeIndex);
    titleElement2.remove();
    titleElement2 = document.createTextNode(titles[swiper2.realIndex])
    titleContainer2.appendChild(titleElement2);
}
swiper2.on('slideChange', onslideChange2);


// ---- ここからJustValidate ----
const validator = new JustValidate('#basic_form');

validator
    .addField('#basic_name', [
        {
            rule: 'required',
            errorMessage: '名前を入力してください。',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
    ])
    .addField('#basic_email', [
        {
            rule: 'required',
            errorMessage: 'メールアドレスを入力してください。',
        },
        {
            rule: 'email',
            errorMessage: '正しいメールアドレスを入力してください。',
        },
    ])
    .addField('#basic_password', [
        {
            rule: 'required',
            errorMessage: 'パスワードを入力してください。',
        },
        {
            rule: 'password',
            errorMessage: '最低8文字、少なくとも1つの文字と1つの数字を含む必要があります。',
        },
    ])
    .addField('#basic_age', [
        {
            rule: 'required',
            errorMessage: '年齢を入力してください。',
        },
        {
            rule: 'number',
            errorMessage: '数字で入力してください。',
        },
        {
            rule: 'minNumber',
            value: 18,
            errorMessage: '18歳以上である必要があります。',
        },
        {
            rule: 'maxNumber',
            value: 150,
            errorMessage: '150字以内',
        },
    ])
    .addField('#basic_address', [
        {
            rule: 'required',
            errorMessage: '住所を入力してください。',
        }
    ])
    .onSuccess(function (event) {
        console.log(validator)
        let formData = new FormData(event.target);
        console.log(formData.get("name"));
        console.log(formData.get("email"));
        console.log(formData.get("password"));
        console.log(formData.get("age"));
        console.log(formData.get("address"));
    });
