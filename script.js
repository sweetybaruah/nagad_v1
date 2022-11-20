var slide_1 = document.querySelector('.slide_1');
var element4 = document.querySelector('.element4')
var slide_2 = document.querySelector('.slide_2')
var element4 = document.querySelector('.element4');
var element2 = document.querySelector('.element2')
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');
var img4 = document.querySelector('.img4');
var img5 = document.querySelector('.img5');
var img6 = document.querySelector('.img6');
var img7 = document.querySelector('.img7');
var img8 = document.querySelector('.img8');
var img9 = document.querySelector('.img9');
var img10 = document.querySelector('.img10');
var random = 0, temp='', clicked=0;

slide_1.addEventListener('click', ()=>{
    var num=0;
    spin_wheel()
function spin_wheel() {

    num= Math.floor(Math.random() * 9) + 1;
    console.log(num)
    random+=3600;
    console.log(random)
    var value = random + [36, 72, 108, 144, 180, 216, 252, 288, 324, 360][num];
    console.log(value)
    element4.style.transform = "rotate(" +  value + "deg)";
    luckyDraw(num);
  
}
var element1= document.querySelector('.element1')
var element2= document.querySelector('.element2')
var element3= document.querySelector('.element3')
var element5= document.querySelector('.element4')
var slideimg= document.querySelector('.slideimg')
var slide_3= document.querySelector('.slide_3')

function loadGb(value=1) {
  
    setTimeout(()=>{
        slide_1.classList.add('hidden')
        slide_2.classList.remove('hidden')
        slide_2.classList.add('fadeInZoom')
        // slideimg.classList.remove('hidden')
        setTimeout(()=>{
          slide_1.classList.add('hidden')
          slide_2.classList.add('hidden')
          slide_3.classList.remove('hidden')
          animation = gsap.timeline();
          CSSPlugin.useSVGTransformAttr = true;
          
          TweenMax.to('.element10', 1, { rotation: "+=360", ease: Linear.easeNone, transformOrigin:"50%" });
          animation.from('.element11', {left: 300,duration: .7, delay: .7})
                    .from('.element8', {top: -91, duration: 1,  repeat: 0, delay: .7})
                    .from('.element9', {scale:.3, opacity: .6, delay: .8})
                    .to('.element9', {scaleX: 1.1, scaleY: 1.1, duration: .5, repeat: -1, yoyo: true})
        },2000)
    },6000)

}
  
function luckyDraw(value){
    console.log(value)
    // console.log(img2)
    switch (value) {
        case 1:
          img1.classList.remove('hidden');
          loadGb(img1);
          break;
        case 2:
          img2.classList.remove('hidden');
          loadGb(img2);break;
        case 3:
          img3.classList.remove('hidden');
          loadGb(img3);
          break;
        case 4:
          img4.classList.remove('hidden');
          loadGb(img4);
          break;
        case 5:
          img5.classList.remove('hidden');
          loadGb(img5);
          break;
        case 6:
          img6.classList.remove('hidden');
          loadGb(img6);
          break;
        case 7:
          img7.classList.remove('hidden');
          loadGb(img7);
          break;
        case 8:
          img8.classList.remove('hidden');
          loadGb(img8);
          break;
        case 9:
          img9.classList.remove('hidden');
          loadGb(img9);
          break;
        case 10:
          img10.classList.remove('hidden');
          loadGb(img10);
          break;
        default:console.log("try again!"); break;
      }
}

})
