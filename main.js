function delay(n) {
    n = n || 100;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 0.5,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", {
        left: "-100%"
    });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 0.5,
        x: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.2
    });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [{
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(500);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        }, ],
    });
});