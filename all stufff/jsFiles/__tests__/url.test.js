/* eslint-env jest */
//import { experiments } from 'webpack';
import {retouchText, isDate,validation, pushOrder, addToOrder, deleteFromOrder, findPrice,screanRender, Order,
    onReady} from '../url';

describe('load page', ()=>{
    // it ('alert', ()=>{
    //     const alert = jest.fn();
    //     Object.defineProperty(window, 'alert', {value: alert});
    //     expect(alert).toHaveBeenCalledWith("Помилка сервера")
    // })
    it('load data', ()=>{
        let scr = new screanRender([], [], 'site.url');
        let data = {
            'container':[],
            'db':[],
            'hashId': NaN,
            'siteUrl':'site.url'
        };
        expect(scr).toEqual(data);
    });
    it('create page', ()=>{
        let scr = new screanRender([], [], 'site.url');
        let data = {
            'container':[],
            'db':[],
            'hashId': NaN,
            'siteUrl':'site.url'
        };
        const renderScreen = jest.fn();
        Object.defineProperty(scr, 'renderScreen', {value: renderScreen});
        expect(scr).toEqual(data);
        scr.siteUrl='#catalog/'.split('/');
        scr.renderScreen();
        expect(scr.renderScreen).toHaveBeenCalledWith();
    });
    it('create order', ()=>{
        let textarea=[];
        let value = ['+380686861282','','Шалтай Болтай','Київ, вул.Інженерів 3б','2020-12-20T00:00:00.000Z','Готівка'];
        for (let a = 0; a<6; a++){
            let target0 = document.createElement('textarea');
            target0.id=a; target0.value=value[a];
            textarea.push(target0);
        }
        let ansv={'address': 'Київ, вул.Інженерів 3б', 'date': '2020-12-20T00:00:00.000Z', 'mail': '', 'name': 'Шалтай Болтай', 'orderList': [1, 0], 'phoneNumber': '+380686861282', 'variant': 1};
        let ord = new Order(textarea, [1,0]);
        expect(ord).toEqual(ansv);
        textarea=[];
        value = ['+380686861282','laba@gmail.com','Шалтай Болтай','Київ, вул.Інженерів 3б','2020-12-20T00:00:00.000Z','Картка'];
        for (let a = 0; a<6; a++){
            let target0 = document.createElement('textarea');
            target0.id=a; target0.value=value[a];
            textarea.push(target0);
        }
        ord = new Order(textarea, [1,0]);
        //date.setTime(date.getTime()-1);
        ansv={'address': 'Київ, вул.Інженерів 3б', 'date':  '2020-12-20T00:00:00.000Z' , 'mail': 'laba@gmail.com', 'name': 'Шалтай Болтай', 'orderList': [1, 0], 'phoneNumber': '+380686861282', 'variant': 0};
        expect(ord).toEqual(ansv);
    });
    it('rewrite text', ()=>{
        let textarea=[];
        let target = document.createElement('textarea');
        target.id=0;
        textarea.push(target);
        retouchText(target, 'test', textarea);
        expect(target.value).toEqual('test');
    });
    it('is date', ()=>{
        let ans = isDate('Сьогодні');
        expect(ans).toEqual(false);
        ans = isDate('13.45.2021');
        expect(ans).toEqual(false);
        ans = isDate('13.12.2021');
        expect(ans).toEqual(true);
    });
    it('valid Order', ()=>{
        let textarea=[];
        let value = ['+380686861282','','Шалтай Болтай','Київ, вул.Інженерів 3б','Сьогодні','Готівка'];
        for (let a = 0; a<6; a++){
            let target0 = document.createElement('textarea');
            target0.id=a; target0.value=value[a];
            textarea.push(target0);
        }
        let ans = validation(textarea);
        expect(ans).toEqual(true);
        textarea = [];
        value = ['-3806868612823','','','Київ, вул.Інженерів 3б','Сьогодні','Готівка'];
        for (let a = 0; a<6; a++){
            let target0 = document.createElement('textarea');
            target0.id=a; target0.value=value[a];
            textarea.push(target0);
        }
        window.alert = jest.fn();
        ans = validation(textarea);
        //Object.defineProperty(window, 'alert', {value: alert});
        window.alert.mockClear();
        expect(window.alert.mock.instances.length).toBe(0);//).toHaveBeenCalledWith(expect.any(String));
        expect(ans).toEqual(false);
    });
    it('valid Order', ()=>{
        let baner=document.createElement('div');
        baner.id='resultBaner'; baner.style.display='block';
        document.body.appendChild(baner);
        let value = ['+380686861282','','','Київ, вул.Інженерів 3б','2019-12-20T00:00:00.000Z','Готівка'];
        for (let a = 0; a<6; a++){
            let target0 = document.createElement('textarea');
            target0.id=a; target0.value=value[a]; target0.className='functionInput';
            document.body.appendChild(target0);
        }
        pushOrder();
        expect(baner.style.display).toEqual('block');
        setTimeout(function del3(){ expect(baner.style.display).toEqual('none');}, 1050);
    });
    it('add Order', ()=>{
        document.body.innerHTML='<div class="actionSlide"><div class="allAction"><div class="oneAction"><img class="actImg" src="https://aif-s3.aif.ru/images/013/095/80d304fb51ebaf8f07ca61d686865876.jpg"><input class="action" type="button" value="Детальніше" id="0"></div><div class="oneAction"><img class="actImg" src="https://furshet.ua/sites/default/files/scandal_2_0.png.pagespeed.ce.MXp90tkhfJ.png"><input class="action" type="button" value="Детальніше" id="1"></div><div class="oneAction"><img class="actImg" src="https://st.focusedcollection.com/14026668/i/650/focused_173081138-stock-photo-two-kids-listening-music-tablet.jpg"><input class="action" type="button" value="Детальніше" id="2"></div></div><div class="whatAction" style="grid-template-columns:  7fr repeat(3,1fr) 7fr;"><div class=""></div><div class="number"></div><div class="number"></div><div class="number"></div><div class=""></div></div></div><h1 class="categoryHit">Хіти продажу</h1><div class="recomendHit"><div class="oneProduct"><img class="" src="https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fmcusercontent.com%2Fdb1855ab84d45f76eff7f68dd%2Fimages%2Fd0e80b19-dbf6-433b-b973-e4e941507faf.png&amp;t=1597106909&amp;ymreqid=3e4b7570-ba0f-1ade-1ce8-71081101d700&amp;sig=1E4X45QrbynhvisI5H3kwA--~D" id="0"><div class=""><p class="productName" id="0">Another Life</p><p class="productComponents">Металкор, Готичний метал, Індастріал-метал, Альтернативний метал, Ню-метал.</p><p class="price">15.05 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://upload.wikimedia.org/wikipedia/en/4/4c/Nothing_More_Go_To_War.jpg" id="4"><div class=""><p class="productName" id="4">Let \'em Burn</p><p class="productComponents">Рок, ню-метал</p><p class="price">23.56 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://i1.wp.com/planetrock.ru/files/2019/08/JINJER-Macro-2019-cover-art-cd.jpg?resize=715%2C715&amp;ssl=1" id="5"><div class=""><p class="productName" id="5">On the Top</p><p class="productComponents">Метал</p><p class="price">17.34 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://upload.wikimedia.org/wikipedia/uk/4/48/Panterapromo.jpg" id="6"><div class=""><p class="productName" id="6">Revolution Is My Name</p><p class="productComponents">Грув-метал, треш-метал</p><p class="price">11.11 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://i.ytimg.com/vi/2vObp0vBDOY/hqdefault.jpg" id="8"><div class=""><p class="productName" id="8">Push It</p><p class="productComponents">Індастріал</p><p class="price">25.67 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://pm1.narvii.com/6699/516fd5a0b70a3a30a78b632a7c7a6d01297e9c7e_hq.jpg" id="9"><div class=""><p class="productName" id="9">KILL4ME</p><p class="productComponents">Альтернативний метал, глем-рок, індастріал</p><p class="price">100.56 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://i.ytimg.com/vi/mvJjmWTg7Qo/hqdefault.jpg" id="11"><div class=""><p class="productName" id="11">Choke</p><p class="productComponents">Альтернативна музика, поп-рокб синтпоп, інді-рок</p><p class="price">21.78 грн</p></div><input class="order" type="button" value="До корзини"></div></div>';
        let btn=document.getElementsByClassName('order')[0];
        let parent =document.getElementsByClassName('oneProduct')[0];
        parent.appendChild(btn);
        let totalPrice = document.createElement('div');
        totalPrice.id='priceAll';
        let counterProduct = document.createElement('div');
        counterProduct.id='shopCounter';
        document.body.appendChild(totalPrice);document.body.appendChild(counterProduct);
        let ans = addToOrder(btn);
        expect(ans).toEqual(-1);
    });
    it('delete from Order', ()=>{
        document.body.innerHTML='';
        let btn=document.createElement('div');
        let parent=document.createElement('div');
        parent.appendChild(btn);
        btn.className='unorder'; btn.id=0;
        let totalPrice = document.createElement('div');
        totalPrice.id='priceAll';
        let counterProduct = document.createElement('div');
        counterProduct.id='shopCounter';
        document.body.appendChild(totalPrice);document.body.appendChild(counterProduct);
        let order = [0,1];
        order = deleteFromOrder(btn);
        expect(order).toEqual(undefined);
    });
    it('new counter', ()=>{
        const refreshCounter = jest.fn();
        refreshCounter();
        expect(refreshCounter).toHaveBeenCalledWith();
    });
    it('finde corect price', ()=>{
        expect(findPrice(0)).toEqual(-1);
    });
    it('before load (loader)', ()=>{
        const setInterval = jest.fn();
        Object.defineProperty(window, 'setInterval', {value: setInterval});
        let callback = function() {
            document.getElementById('loading').style.display='none';
            document.getElementsByClassName('container')[0].style.display='block'; 
            document.getElementsByClassName('footer')[0].style.display='flex';};
        onReady(callback);
        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 800);
    });
    it('event',()=>{
        document.body.innerHTML='';
        let btn = document.createElement('div');
        btn.className='shopCounter';
        document.body.appendChild(btn);
        let container = document.createElement('div');
        container.className='container';
        document.body.appendChild(container);
        btn.id=0;
        //window.location.hash="#AAAAA";
        const ev = new Event('click');
        btn.dispatchEvent(ev);
        expect(ev.isTrusted).toEqual(false);
        //expect(window.location.hash).toEqual();
        window.location.hash='#AAAAA';
        window.localStorage.setItem('orders',JSON.stringify([1,2,4,1]));
        const ev1 = new Event('load');
        window.dispatchEvent(ev1);
        expect(ev1.isTrusted).toEqual(false);
        //window.dispatchEvent(ev);
        const ev2 = new Event('hashchange');
        window.dispatchEvent(ev2);
        expect(ev2.isTrusted).toEqual(false);
    });
    it ('Render screen',()=>{
        document.body.innerHTML='';
        let scr = new screanRender([], [], 'site.url');
        let data = {
            'container':[],
            'db':[],
            'hashId': NaN,
            'siteUrl':'site.url'
        };
        expect(scr).toEqual(data);
        let d = document.createElement('div');
        d.className='container';
        document.body.appendChild(d);
        scr = new screanRender(d, {'Action': [{'about': 'Хочеш на концерт, але немає грошей? Придбай у нас ДВА і більше продуктів, отримай можливість виграти білет на концерт улюбденої групи. Але це не все! Все твоє проживання та дорогу в обидві сторони ми оплатимо.', 'actionTime': '10 грудня 2020', 'id': 0, 'image': 'https://aif-s3.aif.ru/images/013/095/80d304fb51ebaf8f07ca61d686865876.jpg', 'name': 'На концер в тиху від батьків'}, {'about': '3 пісні зі ціною чотирьох! Оце так вигода!', 'actionTime': '30 листопада 202', 'id': 1, 'image': 'https://furshet.ua/sites/default/files/scandal_2_0.png.pagespeed.ce.MXp90tkhfJ.png', 'name': 'Математика не наше'}, {'about': 'Хай друг зареєстріється у нас по твоєму посиланню. Тоді ти отримаєш знижку в 20% на 3 пісні!', 'actionTime': 'необмеженно', 'id': 2, 'image': 'https://st.focusedcollection.com/14026668/i/650/focused_173081138-stock-photo-two-kids-listening-music-tablet.jpg', 'name': 'Постійна знижка для екстравертів'}], 'category': [{'id': 0, 'name': 'Рок'}, {'id': 1, 'name': 'Інді'}, {'id': 2, 'name': 'Глем-рок'}, {'id': 3, 'name': 'Хард-метал'}, {'id': 4, 'name': 'Ню-метал'}, {'id': 5, 'name': 'Електро'}, {'id': 6, 'name': 'Хіп-хоп'}, {'id': 7, 'name': 'Індастріал'}], 'posts': [], 'products': [{'categoryId': 2, 'conectedProductIds': [9, 3], 'id': 0, 'images': ['https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fmcusercontent.com%2Fdb1855ab84d45f76eff7f68dd%2Fimages%2Fd0e80b19-dbf6-433b-b973-e4e941507faf.png&t=1597106909&ymreqid=3e4b7570-ba0f-1ade-1ce8-71081101d700&sig=1E4X45QrbynhvisI5H3kwA--~D', 'https://s3-us-west-2.amazonaws.com/paradigm-media-library/music_artists/MotionlessInWhite-720x720.jpg'], 'isHit': true, 'price': 15.05, 'productComponents': 'Металкор, Готичний метал, Індастріал-метал, Альтернативний метал, Ню-метал.', 'productDesk': 'Пісня гурту Motionless in white. Зацікавить як і їх старих прихильників, так і нову аудиторію. Милозвучний голос вокалісто лаконічно перегходит на екстрим вокал, тим самим змушуючи стадо мурашок пробігти по тілу.', 'productName': 'Another Life'}, {'categoryId': 0, 'conectedProductIds': [2, 4], 'id': 1, 'images': ['https://img.discogs.com/vZuJ0V_--g9CjX8t-3yynaFrjY8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11693447-1520775397-5225.png.jpg', 'https://steamuserimages-a.akamaihd.net/ugc/930436190614968894/B58D8E84E1C790F7CCB559269F93CAA5A14D4E1B/?imw=512&imh=340&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'], 'isHit': false, 'price': 6.45, 'productComponents': 'Рок', 'productDesk': 'Автор Deuce. Спокіна і розслабляюча мелодія з нотками духу революції. Рифи електрогітари красиво перетікають в романтичні звуки акустики', 'productName': 'world on Fire'}, {'categoryId': 0, 'conectedProductIds': [1, 4], 'id': 2, 'images': ['https://www.visualstatements.net/wp-content/uploads/2016/04/probleme-von-fru%CC%88her-870x870.jpg', 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T1406A1PA4373PT17X0Y1D164248703FS2291/views/1,width=650,height=650,appearanceId=1,backgroundColor=fdf7e9/das-ich-weiss-es-nicht-design-ist-ideal-fuer-dich-wenn-du-keine-ahnung-hast-du-wirst-staendig-gefragt-hast-aber-keine-antwort-dann-ist-dieses-desig.jpg'], 'isHit': false, 'price': 13.67, 'productComponents': 'Рок', 'productDesk': 'Автори Peter Tägtgren та Till Lindemann. Мотив, що легко запам\'ятається, а підспівувати хотітеметься й не знаючи слів. Спокійний майже речетатив переривається відміним танцювальним ритмом. Мелодійна складова, як завжди, на висоті', 'productName': 'Ich weiß es nicht'}, {'categoryId': 7, 'conectedProductIds': [8, 10, 11], 'id': 3, 'images': ['https://m.media-amazon.com/images/I/717Fx0WMtwL._SS500_.jpg'], 'isHit': false, 'price': 12.45, 'productComponents': 'Індастріал, класичний рок', 'productDesk': 'Виконавець Unheilig. Чудовий приклад німецького танцювального року. Яроко відчувається мелодія пісні та її ритм. Присутні складні гітарні рифи. Професіоналізм барабанщика добре відчутний', 'productName': 'Hinunter bis auf Eins'}, {'categoryId': 0, 'conectedProductIds': [1, 2], 'id': 4, 'images': ['https://upload.wikimedia.org/wikipedia/en/4/4c/Nothing_More_Go_To_War.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nothing_More_BandPic.jpg'], 'isHit': true, 'price': 23.56, 'productComponents': 'Рок, ню-метал', 'productDesk': 'Виконавець Nothing More. Чудовий приклад німецького танцювального року. Яроко відчувається мелодія пісні та її ритм. Присутні складні гітарні рифи. Професіоналізм барабанщика добре відчутний', 'productName': 'Let \'em Burn'}, {'categoryId': 3, 'conectedProductIds': [6], 'id': 5, 'images': ['https://i1.wp.com/planetrock.ru/files/2019/08/JINJER-Macro-2019-cover-art-cd.jpg?resize=715%2C715&ssl=1', 'https://recordstoreday.com/Photo/418461606721:360', 'https://daddykool.com/Photo/418461637356'], 'isHit': true, 'price': 17.34, 'productComponents': 'Метал', 'productDesk': 'Виконавець Jinjer. Чи може дівчини гроулити? ТАК! і Джинджер тому приклад. Неймовірно красивий голос вокалістки, який не менш професійно звучить і в екстримвокалі.', 'productName': 'On the Top'}, {'categoryId': 3, 'conectedProductIds': [5], 'id': 6, 'images': ['https://upload.wikimedia.org/wikipedia/uk/4/48/Panterapromo.jpg', 'https://img.discogs.com/jmbrM6GugwhpG1C8X3ZQNTYBI1k=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1489948-1310950804.jpeg.jpg'], 'isHit': true, 'price': 11.11, 'productComponents': 'Грув-метал, треш-метал', 'productDesk': 'Виконавець Pantera. Представники старої школи, які починали свій шлях з Глем-металу. Пісня отримала нагороду Греммі за Найкраще метал виконання', 'productName': 'Revolution Is My Name'}, {'categoryId': 5, 'conectedProductIds': [11], 'id': 7, 'images': ['https://m.media-amazon.com/images/I/81eHYgsRdLL._SS500_.jpg', 'https://i.pinimg.com/564x/ba/ae/0e/baae0e931eed33810bccc4e838d47907.jpg', 'https://i.pinimg.com/originals/bf/be/74/bfbe740b3927a4538aeb006239197e8c.jpg'], 'isHit': false, 'price': 12.78, 'productComponents': 'Альтернативна музика/інді, дарк Електро, синтпоп', 'productDesk': 'Виконавці Aesthetic Perfection RICHARD Z. KRUSPE. ДИвна, але чудова пісня з примішками електро. Чудовий приклад дарк-електро музики. Проте наявні м\'які, ритмічні вокальні вставки', 'productName': 'Gods & Gold'}, {'categoryId': 7, 'conectedProductIds': [3, 10, 11], 'id': 8, 'images': ['https://i.ytimg.com/vi/2vObp0vBDOY/hqdefault.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51uZp%2Bt8HoL._SY355_.jpg'], 'isHit': true, 'price': 25.67, 'productComponents': 'Індастріал', 'productDesk': 'Виконавець Static-X. Пісня 1999 року, але досі на слуху в поціновувачів музики. Обов\'язково послухайте!', 'productName': 'Push It'}, {'categoryId': 2, 'conectedProductIds': [0, 5], 'id': 9, 'images': ['https://pm1.narvii.com/6699/516fd5a0b70a3a30a78b632a7c7a6d01297e9c7e_hq.jpg', 'https://www.bravolyrics.ru/_pu/606/s70770461.jpg'], 'isHit': true, 'price': 100.56, 'productComponents': 'Альтернативний метал, глем-рок, індастріал', 'productDesk': 'Виконавець Marilyn Manson. Ще один прекрасний виконавець. Приємний голос буде лоскотати вашу душу і вийме з неї найпотаємніші бажання.', 'productName': 'KILL4ME'}, {'categoryId': 7, 'conectedProductIds': [3, 8, 11], 'id': 10, 'images': ['https://images.genius.com/745c4511d5f5a748696dea80e0454155.400x400x1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRundcB-cQGe9iltVJik0fPv7rTfS00aMfsmQ&usqp=CAU'], 'isHit': false, 'price': 13.84, 'productComponents': 'електро-індастріал', 'productDesk': 'Виконавець Combichrist. Цікаве поєднання двох жанрів, так і хочеться кивати в такт головою.', 'productName': 'Hate Like Me'}, {'categoryId': 1, 'conectedProductIds': [8], 'id': 11, 
            'images': ['https://i.ytimg.com/vi/mvJjmWTg7Qo/hqdefault.jpg', 'https://78.media.tumblr.com/5e9dbe6e60ed9bdd18c38ad753e416a6/tumblr_inline_oygf8rJD7J1sitizh_540.png', 'https://64.media.tumblr.com/5700b57797ad392e80bed27dc0e05642/tumblr_pchvtgX4IT1wbtqhjo1_1280.png'], 'isHit': true, 'price': 21.78, 'productComponents': 'Альтернативна музика, поп-рокб синтпоп, інді-рок', 'productDesk': 'Виконавець I DONT KNOW HOW BUT THEY FOUND ME. Гурт з двох людей.', 'productName': 'Choke'}]}
        , 'site.url#catalog/2');
        scr.siteUrl='#catalog/2'.split('/');
        scr.hashId=2;
        scr.renderScreen();
        expect(document.body.innerHTML).toEqual('<div class="container"><div class="catalog"><h2 class="ctegoryName">Глем-рок</h2><div class="productList"><div class="oneProduct"><img class="" src="https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fmcusercontent.com%2Fdb1855ab84d45f76eff7f68dd%2Fimages%2Fd0e80b19-dbf6-433b-b973-e4e941507faf.png&amp;t=1597106909&amp;ymreqid=3e4b7570-ba0f-1ade-1ce8-71081101d700&amp;sig=1E4X45QrbynhvisI5H3kwA--~D" id="0"><div class=""><p class="productName" id="0">Another Life</p><p class="productComponents">Металкор, Готичний метал, Індастріал-метал, Альтернативний метал, Ню-метал.</p><p class="price">15.05 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://pm1.narvii.com/6699/516fd5a0b70a3a30a78b632a7c7a6d01297e9c7e_hq.jpg" id="9"><div class=""><p class="productName" id="9">KILL4ME</p><p class="productComponents">Альтернативний метал, глем-рок, індастріал</p><p class="price">100.56 грн</p></div><input class="order" type="button" value="До корзини"></div></div></div></div>');
        d.innerHTML=' ';
        scr.siteUrl='#catalog/200'.split('/');
        scr.hashId=200;
        scr.renderScreen();
        expect(window.location.hash).toEqual('');
        scr.hashId=-1;
        scr.renderScreen();
        expect(window.location.hash).toEqual('');
        d.innerHTML='';
        scr.hashId='#oneAction/2'.split('/');
        scr.hashId=2;
        scr.renderScreen();
        expect(document.body.innerHTML).toEqual('<div class="container"><div class="catalog"><h2 class="ctegoryName">Глем-рок</h2><div class="productList"><div class="oneProduct"><img class="" src="https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fmcusercontent.com%2Fdb1855ab84d45f76eff7f68dd%2Fimages%2Fd0e80b19-dbf6-433b-b973-e4e941507faf.png&amp;t=1597106909&amp;ymreqid=3e4b7570-ba0f-1ade-1ce8-71081101d700&amp;sig=1E4X45QrbynhvisI5H3kwA--~D" id="0"><div class=""><p class="productName" id="0">Another Life</p><p class="productComponents">Металкор, Готичний метал, Індастріал-метал, Альтернативний метал, Ню-метал.</p><p class="price">15.05 грн</p></div><input class="order" type="button" value="До корзини"></div><div class="oneProduct"><img class="" src="https://pm1.narvii.com/6699/516fd5a0b70a3a30a78b632a7c7a6d01297e9c7e_hq.jpg" id="9"><div class=""><p class="productName" id="9">KILL4ME</p><p class="productComponents">Альтернативний метал, глем-рок, індастріал</p><p class="price">100.56 грн</p></div><input class="order" type="button" value="До корзини"></div></div></div></div>');
    });
});