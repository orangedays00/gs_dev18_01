// jsを記述する際はここに記載していく
'use strict';
{
    // ファーストビューの画像切替
    function firstSlideshow(){
        if (window.matchMedia('(max-width: 767px)').matches) {
            //スマホ処理
            const images = [
                'img/mainbg_sp_1.png',
                'img/mainbg_sp_2.png',
                'img/mainbg_sp_3.png',
                'img/mainbg_sp_4.png',
            ];
            let currentIndex = 0;

            // 画像のランダム表示の関数PC用
            function slideshowTimer(){
                currentIndex = Math.floor(Math.random() * images.length);
                let mainImage = document.getElementById('mainImgSp');
                mainImage.srcset = images[currentIndex];
            }
            setInterval(slideshowTimer,3000);
        } else if (window.matchMedia('(min-width:768px)').matches) {
            //PC処理
            const images = [
                'img/mainbg.png',
                'img/mainbg_1.png',
                'img/mainbg_2.png',
                'img/mainbg_3.png',
                'img/mainbg_4.png',
            ];
            let currentIndex = 0;

            // 画像のランダム表示の関数SP用
            function slideshowTimer(){
                currentIndex = Math.floor(Math.random() * images.length);
                let mainImage = document.getElementById('mainImgPc');
                mainImage.srcset = images[currentIndex];
            }
            setInterval(slideshowTimer,3000);
        }
    }
    firstSlideshow();

    // SP用ハンバーガメニューの関数
    function hamburgerMenu(){
        const body = document.querySelector('body');
        const open = document.getElementById('open');
        const overlay = document.querySelector('.overlay');
        const close = document.getElementById('close');
        const gnavLink = document.querySelectorAll('.gnav-link');
        let scrollPos = 0;

        // ハンバーガメニューを開く場合
        open.addEventListener('click', ()=>{
            // 画面位置を代入
            scrollPos = document.defaultView.pageYOffset;
            overlay.classList.add('show');
            open.classList.add('hide');
            // メインコンテンツを固定するためのclass
            body.classList.add('fixed');
            // メインコンテンツの表示位置を記憶
            document.querySelector('.fixed').setAttribute('style',`top:${-scrollPos}px`);
        });

        // ハンバーガメニューを閉じる場合
        close.addEventListener('click', ()=>{
            overlay.classList.remove('show');
            open.classList.remove('hide');
            body.classList.remove('fixed');
            document.querySelector('body').setAttribute('style','top:0px');
            document.defaultView.scrollTo(0,scrollPos);
        });

        // ハンバーガーメニュー内のリンクを押下した場合にハンバーガーメニューを閉じる
        for(let i = 0;i<gnavLink.length;i++){
            gnavLink[i].addEventListener('click', ()=>{
                overlay.classList.remove('show');
                open.classList.remove('hide');
                body.classList.remove('fixed');
                document.querySelector('body').setAttribute('style','top:0px');
                document.defaultView.scrollTo(0,scrollPos);
            });
        }
    }
    hamburgerMenu();

    //「news」にニュースコンテンツを追加する
    /*function newsCreate()で記述していたが、「Uncaught ReferenceError: newsCreate is not definedat HTMLInputElement.onclick」
    とエラーがでて、動作しないため、調査。［https://teratail.com/questions/145968］に記載あり。windowに定義*/
    window.newsCreate = function newsCreate(){
        const newsImages = [
            'img/news_img_1.png',
            'img/news_img_2.png',
            'img/news_img_3.png',
        ];
        const newsText = [
            'チーズアカデミー5期卒業生のオオスゲさんによるチーズだけをふんだんに使用した話題のチーズ屋「SHIBUYA CheeseClub」が渋谷でオープンしました！',
            'チーズアカデミー8期卒業生のオオスゲさんによるチーズだけをふんだんに使用した話題のチーズ屋「CheeseCafe CCC」が新宿でオープンしました！',
            'チーズアカデミー2期卒業生のオオスゲさんによるチーズだけをふんだんに使用した話題のチーズ屋「CheeseFactory HARAJUKU」が原宿でオープンしました！',
        ];
        let currentNewsIndex = 0;
        let currentNewsText = 0;

        if (window.matchMedia('(max-width: 767px)').matches) {
            //スマホ処理
            let newElementUl = document.createElement('ul');
            newElementUl.classList.add('news-box');
            newElementUl.style.marginTop = '30px';
            let count = 0;
            while(count < 3){
                const newElementLi = document.createElement('li');
                const newElementImg = document.createElement('img');
                const newElementP1 = document.createElement('p');
                const newElementP2 = document.createElement('p');
                const newContentP1 = document.createTextNode('2016/11/18');
                currentNewsText = Math.floor(Math.random() * newsText.length);
                const newContentP2 = document.createTextNode(newsText[currentNewsText]);
                //テキストが重複しないように、元の配列から削除
                newsText.splice(currentNewsText,1);
                newElementLi.classList.add('news-card');
                currentNewsIndex = Math.floor(Math.random() * newsImages.length);
                newElementImg.setAttribute('src',newsImages[currentNewsIndex]);
                // 画像が重複しないように、元の配列から削除
                newsImages.splice(currentNewsIndex,1);
                newElementP2.appendChild(newContentP2);
                newElementP1.appendChild(newContentP1);
                newElementLi.appendChild(newElementImg);
                newElementLi.appendChild(newElementP1);
                newElementLi.appendChild(newElementP2);
                newElementUl.appendChild(newElementLi);
                count++;
            }
            const parentConts = document.querySelector('.news-conts');
            const parentUl = document.querySelectorAll('.news-box');
            const lastUl = parentUl[parentUl.length - 1];
            parentConts.insertBefore(newElementUl,lastUl.nextSibling);
        } else if (window.matchMedia('(min-width:768px)').matches) {
            //PC処理
            let newElementUl = document.createElement('ul');
            newElementUl.classList.add('news-box');
            newElementUl.style.marginTop = '30px'
            let count = 0;
            while(count < 3){
                const newElementLi = document.createElement('li');
                const newElementImg = document.createElement('img');
                const newElementP1 = document.createElement('p');
                const newElementP2 = document.createElement('p');
                const newContentP1 = document.createTextNode('2016/11/18');
                currentNewsText = Math.floor(Math.random() * newsText.length);
                const newContentP2 = document.createTextNode(newsText[currentNewsText]);
                newsText.splice(currentNewsText,1);
                newElementLi.classList.add('news-card');
                currentNewsIndex = Math.floor(Math.random() * newsImages.length);
                newElementImg.setAttribute('src',newsImages[currentNewsIndex]);
                newsImages.splice(currentNewsIndex,1);
                newElementP2.appendChild(newContentP2);
                newElementP1.appendChild(newContentP1);
                newElementLi.appendChild(newElementImg);
                newElementLi.appendChild(newElementP1);
                newElementLi.appendChild(newElementP2);
                newElementUl.appendChild(newElementLi);
                count++;
            }
            const parentConts = document.querySelector('.news-conts');
            const parentUl = document.querySelectorAll('.news-box');
            const lastUl = parentUl[parentUl.length - 1];
            parentConts.insertBefore(newElementUl,lastUl.nextSibling);

            const newsBtn = document.querySelector('.news-btn');
            newsBtn.classList.remove(':hover');
        }
    }


    //// News追加 class構文版 ここから（途中まで。エラーなく動くは動く。重複なしランダム生成が未完成。）
    // class News {
    //     constructor(){
    //         const allNewsBox = document.querySelectorAll('.news-box');
    //         const lastNewsBox = allNewsBox[allNewsBox.length - 1];
    //         const newElementLi = document.createElement('li');
    //         const newElementImg = document.createElement('img');
    //         const newElementP1 = document.createElement('p');
    //         const newElementP2 = document.createElement('p');
    //         const newContentP1 = document.createTextNode('2016/11/18');
    //         const newContentP2 = document.createTextNode(`${this.createNewsText()}`);
    //         newElementLi.classList.add('news-card');
    //         newElementImg.setAttribute('src',`${this.createNewsImage()}`);
    //         newElementP2.appendChild(newContentP2);
    //         newElementP1.appendChild(newContentP1);
    //         newElementLi.appendChild(newElementImg);
    //         newElementLi.appendChild(newElementP1);
    //         newElementLi.appendChild(newElementP2);
    //         lastNewsBox.appendChild(newElementLi);
    //     }

    //     static newElementUl(){
    //         let newElementUl = document.createElement('ul');
    //         newElementUl.classList.add('news-box');
    //         newElementUl.style.marginTop = '30px';
    //         const parentConts = document.querySelector('.news-conts');
    //         const parentUl = document.querySelectorAll('.news-box');
    //         const lastUl = parentUl[parentUl.length - 1];
    //         parentConts.insertBefore(newElementUl,lastUl.nextSibling);
    //         return newElementUl;
    //     }

    //     createNewsImage(){
    //         const newsImages = [
    //             'img/news_img_1.png',
    //             'img/news_img_2.png',
    //             'img/news_img_3.png',
    //         ];
    //         this.newsImageId = Math.floor(Math.random() * newsImages.length);
    //         return newsImages[this.newsImageId];
    //     }


    //     createNewsText(){
    //         const newsTexts = [
    //             'チーズアカデミー5期卒業生のオオスゲさんによるチーズだけをふんだんに使用した話題のチーズ屋「SHIBUYA CheeseClub」が渋谷でオープンしました！',
    //             'チーズアカデミー8期卒業生のオオスゲさんによるチーズだけをふんだんに使用した話題のチーズ屋「CheeseCafe CCC」が新宿でオープンしました！',
    //             'チーズアカデミー2期卒業生のオオスゲさんによるチーズだけをふんだんに使用した話題のチーズ屋「CheeseFactory HARAJUKU」が原宿でオープンしました！',
    //         ];
    //         this.newsTextId = Math.floor(Math.random() * newsTexts.length);
    //         return newsTexts[this.newsTextId];
    //     }

    //     static setNewsConts(){
    //         const parentConts = document.querySelector('.news-conts');
    //         const parentUl = document.querySelectorAll('.news-box');
    //         const lastUl = parentUl[parentUl.length - 1];
    //         parentConts.insertBefore(this.newElementUl(),lastUl.nextSibling);
    //     }
    // }

    // const newsBtn = document.getElementById('newsBtn');
    // newsBtn.addEventListener('click',()=>{
    //     if (window.matchMedia('(max-width: 767px)').matches) {
    //         News.newElementUl();
    //         let count = 0;
    //         while(count < 3){
    //             new News();
    //             count++;
    //         }
    //     }else if(window.matchMedia('(min-width:768px)').matches) {
    //         News.newElementUl();
    //         let count = 0;
    //         while(count < 3){
    //             new News();
    //             count++;
    //         }
    //         const newsBtn = document.querySelector('.news-btn');
    //         newsBtn.classList.remove(':hover');
    //     }
    // });
    //// News追加 class構文版 ここまで


    //予告状
    window.notice = function notice(){
        const logo = document.querySelector('.logo');
        logo.addEventListener('click',()=>{
            const notice = document.createElement('img');
            notice.setAttribute('src','img/notice.png');
            notice.setAttribute('onclick','lupin3()');
            notice.classList.add('lupin');
            notice.classList.add('animate__animated');
            notice.classList.add('animate__zoomInDown');

            const main = document.querySelector('main');
            const figure = document.querySelector('figure');
            main.insertBefore(notice,figure.nextSibling);

            // main.js内にlupin.js内の記述をしていたがエラーになったため、別ファイル化し、予告状が表示された時に、スクリプトタグとソースを追加する
            const _body = document.querySelector('body');
            const scriptGet = document.querySelector('script');
            const scriptCre = document.createElement('script');
            scriptCre.setAttribute('src','js/lupin.js');
            _body.insertBefore(scriptCre,scriptGet.nextSibling);

            let noticeStyle = {
                display: 'block',
                width: '800px',
                height: '600px',
                zIndex: '999',
                margin: '30px auto',
                cursor: 'pointer',
            };
            let elemlupin = document.querySelector('.lupin').style;

            for(let prop in noticeStyle){
                elemlupin[prop] = noticeStyle[prop];
            }
        });
    }
    notice();
}