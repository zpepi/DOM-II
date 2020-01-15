// Your code goes here

//1. change nav color
const mouseOver = document.querySelector(".main-navigation")
console.log(mouseOver);

mouseOver.addEventListener("mouseover", () => {
    mouseOver.style.backgroundColor = "pink";
});

//2. change back
mouseOver.addEventListener("mouseout", () => {
    mouseOver.style.backgroundColor = "white";
});

//3. catbus :D
const click = document.querySelector(".intro img")
console.log(click);

click.addEventListener("click", () => {
    click.src="https://i.ebayimg.com/images/g/gLYAAOSwU85dGEqu/s-l400.jpg"
});

//4. rotate image2 on resize

//5. resize image3 on 

//6. move catbus on doubleclick

//7. resize button on mouse enter
const button1 = document.querySelectorAll(".destination .btn")
console.log(button1);

button1.addEventListener("mouseenter", () => {
button1.style.transform = scale(1.2);
});


//8. button goes back on mouse exit
button1.addEventListener("mouseleave", () => {
    button1.style.transform = scale(1)
    });

//9. body color change on mouse wheel

//10. page rotate on right click