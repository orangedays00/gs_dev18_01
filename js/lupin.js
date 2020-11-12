function lupin3(){
    // 画面から表示を消す
    const lupin = document.querySelector('.lupin');
    const lupinTitleText = 'チーズはいただいたぜ';

    let audioElem;
    const bgm = 'https://orangedays00.github.io/gs/mp3/rupinTitle.m4a';
    const kasya = 'https://orangedays00.github.io/gs/mp3/typewriter-1.mp3';
    const playSound1 = (filename) => {
        audioElem = new Audio();
        audioElem.src = filename;
        audioElem.volume = 0.4;
        audioElem.play();
    }
    const playSound2 = (filename) => {
        audioElem = new Audio();
        audioElem.src = filename;
        audioElem.play();
    }

    lupin.addEventListener('click',()=>{
        setTimeout(()=>{
            document.querySelector('header').classList.add("animate__animated");
            document.querySelector('header').classList.add("animate__zoomOutDown");
            document.querySelector('figure').classList.add("animate__animated");
            document.querySelector('figure').classList.add("animate__zoomOutDown");
        },0);
        setTimeout(()=>{
            document.querySelector('.about').classList.add("animate__animated");
            document.querySelector('.about').classList.add("animate__zoomOutDown");
        },1000);
        setTimeout(()=>{
            document.querySelector('.course').classList.add("animate__animated");
            document.querySelector('.course').classList.add("animate__zoomOutDown");
        },2000);
        setTimeout(()=>{
            document.querySelector('.news').classList.add("animate__animated");
            document.querySelector('.news').classList.add("animate__zoomOutDown");
        },3000);
        setTimeout(()=>{
            document.querySelector('.access').classList.add("animate__animated");
            document.querySelector('.access').classList.add("animate__zoomOutDown");
        },4000);
        setTimeout(()=>{
            document.querySelector('.contact').classList.add("animate__animated");
            document.querySelector('.contact').classList.add("animate__zoomOutDown");
        },5000);
        setTimeout(()=>{
            document.querySelector('footer').classList.add("animate__animated");
            document.querySelector('footer').classList.add("animate__zoomOutDown");
            document.querySelector('.lupin').classList.add("animate__animated");
            document.querySelector('.lupin').classList.add("animate__zoomOut");
        },6000);

        // 画面背景を反転
        setTimeout(()=>{
            const _body = document.querySelector('body');

            let backgroundColor = {
                background: '#000',
                transition: '1s',
            };

            let elemBack = _body.style;
            for(let prop in backgroundColor){
                elemBack[prop] = backgroundColor[prop];
            }
        },6350);

        //ルパンタイトル風のテキスト表示
        setTimeout(()=>{
            const _main = document.querySelector('main');
            const _figure = document.getElementById('figure');
            const newElement = document.createElement('p');
            const newContent = document.createTextNode("チ");
            newElement.appendChild(newContent);
            newElement.setAttribute("id","lupin3");
            _main.insertBefore(newElement,_figure);

            let lupinStyle = {
                fontSize: '400px',
                color: '#fff',
                textAlign: 'center',
                padding: '80px 10px',
                fontFamily: "'游明朝','Yu Mincho','YuMincho','Hiragino Mincho Pro','serif'"
                };
                let elemText = document.getElementById('lupin3').style;
                document.getElementById('lupin3').classList.add('animate__rotateIn');
                for(let prop in lupinStyle){
                    elemText[prop] = lupinStyle[prop];
                }
                playSound1(kasya);

        },8200);
        for(let i =1;i<lupinTitleText.length;i++){
            setTimeout(()=>{
                let lupinTitle = document.getElementById('lupin3');
                lupinTitle.textContent = lupinTitleText[i];
                playSound1(kasya);
                // audioElm.autoplay = true;
            },8200 + (200 * i));
        }
        setTimeout(()=>{
            // 先に画像表示エリアを配置
            const _main = document.querySelector('main');
            const _figure = document.getElementById('figure');
            let lupinTitle = document.getElementById('lupin3');

            const lupinImg = document.createElement('img');
            lupinImg.classList.add('lupinImg');

            _main.insertBefore(lupinImg,lupinTitle);

            let lupinImgStyle = {
                display: 'block',
                height: '600px',
                zIndex: '999',
                margin: '30px auto'
            };
            let elemLupinImg = document.querySelector('.lupinImg').style;

            for(let prop in lupinImgStyle){
                elemLupinImg[prop] = lupinImgStyle[prop];
            }
            lupinTitle.textContent = 'チーズはいただいたぜ';
            lupinTitle.style.fontSize = '90px';
            playSound2(bgm);
        },10200);
        setTimeout(()=>{
            // ルパンイラストを表示
            let lupinImg = document.querySelector('.lupinImg');
            lupinImg.style.width = '800px';
            lupinImg.setAttribute('src','img/lupin.png');
            lupinImg.classList.add('animate__animated');
            lupinImg.classList.add('animate__jackInTheBox');
        },10600);
    });
}
lupin3();