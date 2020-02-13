// Your code goes here

//1. mouseOver
const mouseOver = document.querySelector(".main-navigation")
console.log(mouseOver);

mouseOver.addEventListener("mouseover", () => {
    mouseOver.style.backgroundColor = "pink";
});

//2. mouseOut
mouseOver.addEventListener("mouseout", () => {
    mouseOver.style.backgroundColor = "white";
});

//3. click
const click = document.querySelector(".intro img")
console.log(click);

click.addEventListener("click", () => {
    click.src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1136,w_2024,x_0,y_0/v1554736923/shape/mentalfloss/539787_-_c_1988_studio_ghibli_1.jpg"
});

//4. double click
click.addEventListener("dblclick", () => {
    click.src="img/fun-bus.jpg"
});

//3b. click
const click2 = document.querySelector(".img-content img")
console.log(click2);

click2.addEventListener("click2", () => {
    click2.src="https://s3.amazonaws.com/burnsfilm-prod/images/000/002/848/extra_large/20150520184639-totoro-cover.jpg"
});

//3c. click
const click3 = document.querySelector(".inverse-content .img-content img")
console.log(click3);

click3.addEventListener("click", () => {
    click3.src="https://www.bookandsword.net/uploads/9/9/2/8/99287036/published/40836-studio-ghibli-my-neighbor-totoro-totoro.jpg"
});

//3d. change destination img
const click4 = document.querySelector(".content-destination img")
console.log(click4);

click4.addEventListener("click", () => {
    click4.src="https://aldiaphora.files.wordpress.com/2017/04/mon-voisin-totoro-1500.jpg"
})

//5. resize
window.addEventListener('resize', (event) => {
    alert("I need some space...")
});


//6. mouseenter
let button2 = document.querySelectorAll('.destination .btn')[1]
button2.addEventListener('mouseenter', (event) => { button2.style.background = 'red'
button2.innerHTML = "I'm Red Now!"
})

//7. mouseleave
button2.addEventListener('mouseleave', (event) => {
    button2.style.background = '#17A2B8'
    button2.innerHTML = 'Sign Me Up!'
})

//8. page load
window.addEventListener('load', (event) => {
    alert("The Fun Bus is here!")
});

//9. select
const select = document.querySelectorAll('.text-content');
select.addEventListener('select', (event) => {
    event.target.style.backgroundColor = 'purple';
});

//10. focus
const focus = document.querySelectorAll('a');
focus.addEventListener('focus', (event) => {
    event.target.style.color = 'pink';
});


 //3e. footer color changes   
 const footerColor = document.querySelector(".footer")
 console.log(footerColor);
 
 footerColor.addEventListener("mouseover", () => {
     footerColor.style.backgroundColor = "pink";
 });