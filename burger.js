/*header redirect*/

$('header').on('click', ()=>{window.location.href = "index.html"})


/*burger menu*/

$('.burger').on('click', ()=>{  window.location.href = "burger.html"
})


/*template handling*/

let goDest = $('.destination')

goDest.click((c) => {
        $('.fay').removeClass('fadeMeIn');
        $('.fay').addClass('fadeMe')
        $('.fay').on('animationend', () => {

            document.querySelector('.mainMap').style.cssText = "display: none;"
            let header = document.querySelector('header');
            header.nextElementSibling.classList.add('whiteMe');

            /*opacity on scroll*/
            let heroImg = $('.whiteMe');
            let range = heroImg.outerHeight;

            $(window).scroll(function () {
                var scrollTop = $(this).scrollTop();

                $('.whiteMe').css({
                    opacity: function () {
                        var elementHeight = $(this).height();
                        return 1 - (elementHeight - scrollTop) / elementHeight;
                    }

                });

            });


            fetch('countries.json').then(result => result.json()).then(data => create(data));
        })
        let clicked = c.target
         function create(elem) {
            if ($(clicked).hasClass('usas')) {
                const mainTemplate = document.querySelector('.country').content;
                const myClone = mainTemplate.cloneNode(true);

                myClone.querySelectorAll('svg').forEach((s)=>{
                                                        s.style.cssText = "stroke:" + elem[0].color;
                console.log('colorset')})
                myClone.querySelector('source').setAttribute('src', elem[0].video)

                let video = myClone.querySelector('video')
let play = document.querySelector('.play')
console.log(video)
video.volume = 0.0

$('.play').on('click', playMeOnce)
function playMeOnce(){
    console.log('played')
    video.style.cssText = "z-index:999999;"
    $('.overlayIndex').addClass('hide');
    video.removeAttribute('loop')
    video.currentTime = 0
    video.play();
    video.volume = 1.0;
    video.addEventListener('ended', goBack);
    $('.backbtn').css('z-index', "99")
    $('.backbtn').on('click', goBack)

}

function goBack(){

    video.volume = 0.0;
    video.style.cssText = "z-index: 1";
    $('.overlayIndex').removeClass('hide');
    video.setAttribute('loop', true)
}


                  myClone.querySelectorAll('.name').forEach( (name)=> {name.textContent = elem[0].country;})
                 myClone.querySelector('.name').style.cssText = "color:" + elem[0].color + ";"
                myClone.querySelector('h1').style.cssText = "color:" + elem[0].color + ";"
                myClone.querySelector('.capital').textContent = elem[0].capital;
                myClone.querySelector('.lan').textContent = elem[0].lan;
                myClone.querySelector('.currency').textContent = elem[0].currency;
                myClone.querySelector('.foody').textContent = elem[0].foody;
                myClone.querySelector('.quote').textContent = elem[0].quote;
                myClone.querySelector('.intro').textContent = elem[0].intro;
                myClone.querySelectorAll('.ambassador').forEach((amb) => {
                    amb.textContent = elem[0].ambassador;})
             /*   elem[0].monthPost.forEach((p) => {
                let instaLink = document.createElement('a');
                let instaImg = document.createElement('img');

                    instaLink.setAttribute("href" , "" +elem[0].instaLink+"");
                    instaLink.classList.add("instaLink");
                    instaImg.setAttribute("src", p);
                    instaImg.classList.add('instaImg');

                            const appendPost = myClone.querySelector('.posts')
        appendPost.appendChild(instaLink);
        instaLink.appendChild(instaImg);



                })*/
                     const appendT = document.querySelector('.append');

                appendT.appendChild(myClone);
            }}})
