let curSlideIndex = 1;

function show_slide(index) {
    let slides = $(".my_slide");

    let slide_count = slides.length;
    if(index > slide_count)
        curSlideIndex = 1;

    if(index < 1)
        curSlideIndex = slide_count;

    slides.hide();
    $(".category_container").hide();
    let slide = $(slides[curSlideIndex-1]);
    slide.fadeIn("slow");
    $(slide.attr('data-info')).fadeIn("slow");
}

function show_next_slide() {
    show_slide(++curSlideIndex);
}

function show_previous_slide() {
    show_slide(--curSlideIndex);
}

show_slide(curSlideIndex);

function automate_slides() {
    curSlideIndex++;
    show_slide(curSlideIndex);
    setTimeout(automate_slides, 4000); // 4 Second timeout
}