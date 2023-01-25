function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        let windowHeight = window.innerHeight;
        let elementTop = reveal.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        }else{
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);