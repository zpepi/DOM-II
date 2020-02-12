// Your code goes here

//change nav color
const mouseOver = document.querySelector(".main-navigation")
console.log(mouseOver);

mouseOver.addEventListener("mouseover", () => {
    mouseOver.style.backgroundColor = "pink";
});

//change back
mouseOver.addEventListener("mouseout", () => {
    mouseOver.style.backgroundColor = "white";
});

//3. catbus :D
const click = document.querySelector(".intro img")
console.log(click);

click.addEventListener("click", () => {
    click.src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1136,w_2024,x_0,y_0/v1554736923/shape/mentalfloss/539787_-_c_1988_studio_ghibli_1.jpg"
});

//4. change image2
const click2 = document.querySelector(".img-content img")
console.log(click2);

click2.addEventListener("click", () => {
    click2.src="https://s3.amazonaws.com/burnsfilm-prod/images/000/002/848/extra_large/20150520184639-totoro-cover.jpg"
});

//5. change image3 
const click3 = document.querySelector(".img-fluid rounded")
console.log(click3);

click3.addEventListener("click", () => {
    click3.src="https://www.bookandsword.net/uploads/9/9/2/8/99287036/published/40836-studio-ghibli-my-neighbor-totoro-totoro.jpg"
});

//6. make catbus a regular bus
const dblClick = document.querySelector(".intro img")
console.log(dblClick);

dblClick.addEventListener("dblclick", () => {
dblClick.src="img/fun-bus.jpg"
});

//7. resize button on mouse enter
const button1 = document.querySelectorAll(".btn")
console.log(button1);

button1.addEventListener("mouseover", () => {
button1.style.transform = scale(1.2);
});


//8. button goes back on mouse exit
button1.addEventListener("mouseout", () => {
    button1.style.transform = scale(1)
    });