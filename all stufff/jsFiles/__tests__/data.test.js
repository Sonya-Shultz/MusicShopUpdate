/* eslint-env jest */
import {fetchMyData,postOrder} from '../data';
describe('load data', ()=>{
    
    it('load data', async ()=>{
        let a = await fetchMyData();
        expect(a).toEqual({'Action': [{'about': 'Хочеш на концерт, але немає грошей? Придбай у нас ДВА і більше продуктів, отримай можливість виграти білет на концерт улюбденої групи. Але це не все! Все твоє проживання та дорогу в обидві сторони ми оплатимо.', 'actionTime': '10 грудня 2020', 'id': 0, 'image': 'https://aif-s3.aif.ru/images/013/095/80d304fb51ebaf8f07ca61d686865876.jpg', 'name': 'На концер в тиху від батьків'}, {'about': '3 пісні зі ціною чотирьох! Оце так вигода!', 'actionTime': '30 листопада 202', 'id': 1, 'image': 'https://furshet.ua/sites/default/files/scandal_2_0.png.pagespeed.ce.MXp90tkhfJ.png', 'name': 'Математика не наше'}, {'about': 'Хай друг зареєстріється у нас по твоєму посиланню. Тоді ти отримаєш знижку в 20% на 3 пісні!', 'actionTime': 'необмеженно', 'id': 2, 'image': 'https://st.focusedcollection.com/14026668/i/650/focused_173081138-stock-photo-two-kids-listening-music-tablet.jpg', 'name': 'Постійна знижка для екстравертів'}], 'category': [{'id': 0, 'name': 'Рок'}, {'id': 1, 'name': 'Інді'}, {'id': 2, 'name': 'Глем-рок'}, {'id': 3, 'name': 'Хард-метал'}, {'id': 4, 'name': 'Ню-метал'}, {'id': 5, 'name': 'Електро'}, {'id': 6, 'name': 'Хіп-хоп'}, {'id': 7, 'name': 'Індастріал'}], 'posts': [], 'products': [{'categoryId': 2, 'conectedProductIds': [9, 3], 'id': 0, 'images': ['https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fmcusercontent.com%2Fdb1855ab84d45f76eff7f68dd%2Fimages%2Fd0e80b19-dbf6-433b-b973-e4e941507faf.png&t=1597106909&ymreqid=3e4b7570-ba0f-1ade-1ce8-71081101d700&sig=1E4X45QrbynhvisI5H3kwA--~D', 'https://s3-us-west-2.amazonaws.com/paradigm-media-library/music_artists/MotionlessInWhite-720x720.jpg'], 'isHit': true, 'price': 15.05, 'productComponents': 'Металкор, Готичний метал, Індастріал-метал, Альтернативний метал, Ню-метал.', 'productDesk': 'Пісня гурту Motionless in white. Зацікавить як і їх старих прихильників, так і нову аудиторію. Милозвучний голос вокалісто лаконічно перегходит на екстрим вокал, тим самим змушуючи стадо мурашок пробігти по тілу.', 'productName': 'Another Life'}, {'categoryId': 0, 'conectedProductIds': [2, 4], 'id': 1, 'images': ['https://img.discogs.com/vZuJ0V_--g9CjX8t-3yynaFrjY8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11693447-1520775397-5225.png.jpg', 'https://steamuserimages-a.akamaihd.net/ugc/930436190614968894/B58D8E84E1C790F7CCB559269F93CAA5A14D4E1B/?imw=512&imh=340&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'], 'isHit': false, 'price': 6.45, 'productComponents': 'Рок', 'productDesk': 'Автор Deuce. Спокіна і розслабляюча мелодія з нотками духу революції. Рифи електрогітари красиво перетікають в романтичні звуки акустики', 'productName': 'world on Fire'}, {'categoryId': 0, 'conectedProductIds': [1, 4], 'id': 2, 'images': ['https://www.visualstatements.net/wp-content/uploads/2016/04/probleme-von-fru%CC%88her-870x870.jpg', 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T1406A1PA4373PT17X0Y1D164248703FS2291/views/1,width=650,height=650,appearanceId=1,backgroundColor=fdf7e9/das-ich-weiss-es-nicht-design-ist-ideal-fuer-dich-wenn-du-keine-ahnung-hast-du-wirst-staendig-gefragt-hast-aber-keine-antwort-dann-ist-dieses-desig.jpg'], 'isHit': false, 'price': 13.67, 'productComponents': 'Рок', 'productDesk': 'Автори Peter Tägtgren та Till Lindemann. Мотив, що легко запам\'ятається, а підспівувати хотітеметься й не знаючи слів. Спокійний майже речетатив переривається відміним танцювальним ритмом. Мелодійна складова, як завжди, на висоті', 'productName': 'Ich weiß es nicht'}, {'categoryId': 7, 'conectedProductIds': [8, 10, 11], 'id': 3, 'images': ['https://m.media-amazon.com/images/I/717Fx0WMtwL._SS500_.jpg'], 'isHit': false, 'price': 12.45, 'productComponents': 'Індастріал, класичний рок', 'productDesk': 'Виконавець Unheilig. Чудовий приклад німецького танцювального року. Яроко відчувається мелодія пісні та її ритм. Присутні складні гітарні рифи. Професіоналізм барабанщика добре відчутний', 'productName': 'Hinunter bis auf Eins'}, {'categoryId': 0, 'conectedProductIds': [1, 2], 'id': 4, 'images': ['https://upload.wikimedia.org/wikipedia/en/4/4c/Nothing_More_Go_To_War.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nothing_More_BandPic.jpg'], 'isHit': true, 'price': 23.56, 'productComponents': 'Рок, ню-метал', 'productDesk': 'Виконавець Nothing More. Чудовий приклад німецького танцювального року. Яроко відчувається мелодія пісні та її ритм. Присутні складні гітарні рифи. Професіоналізм барабанщика добре відчутний', 'productName': 'Let \'em Burn'}, {'categoryId': 3, 'conectedProductIds': [6], 'id': 5, 'images': ['https://i1.wp.com/planetrock.ru/files/2019/08/JINJER-Macro-2019-cover-art-cd.jpg?resize=715%2C715&ssl=1', 'https://recordstoreday.com/Photo/418461606721:360', 'https://daddykool.com/Photo/418461637356'], 'isHit': true, 'price': 17.34, 'productComponents': 'Метал', 'productDesk': 'Виконавець Jinjer. Чи може дівчини гроулити? ТАК! і Джинджер тому приклад. Неймовірно красивий голос вокалістки, який не менш професійно звучить і в екстримвокалі.', 'productName': 'On the Top'}, {'categoryId': 3, 'conectedProductIds': [5], 'id': 6, 'images': ['https://upload.wikimedia.org/wikipedia/uk/4/48/Panterapromo.jpg', 'https://img.discogs.com/jmbrM6GugwhpG1C8X3ZQNTYBI1k=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1489948-1310950804.jpeg.jpg'], 'isHit': true, 'price': 11.11, 'productComponents': 'Грув-метал, треш-метал', 'productDesk': 'Виконавець Pantera. Представники старої школи, які починали свій шлях з Глем-металу. Пісня отримала нагороду Греммі за Найкраще метал виконання', 'productName': 'Revolution Is My Name'}, {'categoryId': 5, 'conectedProductIds': [11], 'id': 7, 'images': ['https://m.media-amazon.com/images/I/81eHYgsRdLL._SS500_.jpg', 'https://i.pinimg.com/564x/ba/ae/0e/baae0e931eed33810bccc4e838d47907.jpg', 'https://i.pinimg.com/originals/bf/be/74/bfbe740b3927a4538aeb006239197e8c.jpg'], 'isHit': false, 'price': 12.78, 'productComponents': 'Альтернативна музика/інді, дарк Електро, синтпоп', 'productDesk': 'Виконавці Aesthetic Perfection RICHARD Z. KRUSPE. ДИвна, але чудова пісня з примішками електро. Чудовий приклад дарк-електро музики. Проте наявні м\'які, ритмічні вокальні вставки', 'productName': 'Gods & Gold'}, {'categoryId': 7, 'conectedProductIds': [3, 10, 11], 'id': 8, 'images': ['https://i.ytimg.com/vi/2vObp0vBDOY/hqdefault.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51uZp%2Bt8HoL._SY355_.jpg'], 'isHit': true, 'price': 25.67, 'productComponents': 'Індастріал', 'productDesk': 'Виконавець Static-X. Пісня 1999 року, але досі на слуху в поціновувачів музики. Обов\'язково послухайте!', 'productName': 'Push It'}, {'categoryId': 2, 'conectedProductIds': [0, 5], 'id': 9, 'images': ['https://pm1.narvii.com/6699/516fd5a0b70a3a30a78b632a7c7a6d01297e9c7e_hq.jpg', 'https://www.bravolyrics.ru/_pu/606/s70770461.jpg'], 'isHit': true, 'price': 100.56, 'productComponents': 'Альтернативний метал, глем-рок, індастріал', 'productDesk': 'Виконавець Marilyn Manson. Ще один прекрасний виконавець. Приємний голос буде лоскотати вашу душу і вийме з неї найпотаємніші бажання.', 'productName': 'KILL4ME'}, {'categoryId': 7, 'conectedProductIds': [3, 8, 11], 'id': 10, 'images': ['https://images.genius.com/745c4511d5f5a748696dea80e0454155.400x400x1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRundcB-cQGe9iltVJik0fPv7rTfS00aMfsmQ&usqp=CAU'], 'isHit': false, 'price': 13.84, 'productComponents': 'електро-індастріал', 'productDesk': 'Виконавець Combichrist. Цікаве поєднання двох жанрів, так і хочеться кивати в такт головою.', 'productName': 'Hate Like Me'}, {'categoryId': 1, 'conectedProductIds': [8], 'id': 11, 
            'images': ['https://i.ytimg.com/vi/mvJjmWTg7Qo/hqdefault.jpg', 'https://78.media.tumblr.com/5e9dbe6e60ed9bdd18c38ad753e416a6/tumblr_inline_oygf8rJD7J1sitizh_540.png', 'https://64.media.tumblr.com/5700b57797ad392e80bed27dc0e05642/tumblr_pchvtgX4IT1wbtqhjo1_1280.png'], 'isHit': true, 'price': 21.78, 'productComponents': 'Альтернативна музика, поп-рокб синтпоп, інді-рок', 'productDesk': 'Виконавець I DONT KNOW HOW BUT THEY FOUND ME. Гурт з двох людей.', 'productName': 'Choke'}]});

    });
    it('post data', async()=>{
        let Order = [0,1];
        let a = postOrder(Order);
        let b, с=0;
        a.then(result => result).then(data => {b = data; expect(b).toEqual([0,1]);});
        a.catch(function (error) {с=-1; expect(с).toEqual(-1); console.log(error);});
        expect(с).toEqual(0);
        a = await  postOrder(Order);
        expect(a).toEqual([0,1]);
    });
});