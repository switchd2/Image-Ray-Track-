const track = document.getElementById("image-track");

/* -- Shared animation function -- */

const animateTrack = (nextPercentage) => {
    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards", easing: "ease-out" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${125 + nextPercentage * 1.5}% center`
        }, { duration: 1200, fill: "forwards", easing: "ease-out" });
    }
};

/* -- Mouse drag handlers -- */

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    animateTrack(nextPercentage);
};

/* -- Scroll wheel handler -- */

const handleOnScroll = e => {
    e.preventDefault();

    // Support both vertical (deltaY) and horizontal (deltaX) scrolling
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    const scrollSensitivity = 0.05;
    const currentPercentage = parseFloat(track.dataset.percentage) || 0;
    const nextPercentageUnconstrained = currentPercentage - delta * scrollSensitivity;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.prevPercentage = nextPercentage;
    animateTrack(nextPercentage);
};

/* -- Window Event Listeners -- */

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);

// passive: false is required to allow preventDefault() on wheel
window.addEventListener("wheel", handleOnScroll, { passive: false });