const slider = document.getElementById("slider");

const preHandler = () => {
    slider.scrollLeft -= 500; // Scroll left by 50 pixels (adjust as needed)
}

const nextHandler = () => {
    slider.scrollLeft += 500; // Scroll right by 50 pixels (adjust as needed)
}