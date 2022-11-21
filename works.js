let scrollBtn = document.getElementById('up_button');

window.onscroll = function() {
    scrollfnc();
};

function scrollfnc() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    };
};

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};