$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius : 10,
    });






/*--------------------
Skill Start
--------------------*/
    function skillCounter(){
        const bars = document.querySelectorAll('.progress_bar');
        bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    });

    }


    
    
    
    


/*--------------------
Skill End
--------------------*/




/*--------------
Counter Start
--------------*/
const counters = document.querySelectorAll('.counter');

function runCounter(){
    counters.forEach(counter =>{
        counter.innerText = 0;
        let target = +counter.dataset.count;
        let step = target / 500;
        
        
        let countIt = function(){
            let displayedCount = +counter.innerText;
            if(displayedCount < target){
                counter.innerText = Math.ceil(displayedCount + step);
                setTimeout(countIt,1);
            } else{
                counter.innerText = target;
            }
        }

        countIt();
    });
}



let counterSection = document.querySelector('.skills_wrapper');
let options = {
    rootMargin: '0px 0px -400px 0px'
}
const sectionObserver = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
        runCounter();
        skillCounter();
    }
},options);

sectionObserver.observe(counterSection);
/*--------------
Counter End
counter_section
--------------*/












/*-------------------- 
My Works Start
--------------------*/
var $wrapper = $('.portfolio_wrapper');

//Initialize Isotope
$wrapper.isotope({
    filter : '*',
    layoutMode : 'masonry',
    animationOptions : {
        duration : 750,
        easing : 'linear'
    }
});

let links  = document.querySelectorAll('.tabs a');
links.forEach(link =>{
    let selector = link.dataset.filter;
    link.addEventListener('click',function(e){
        e.preventDefault();

        $wrapper.isotope({
            filter : selector,
            layoutMode : 'masonry',
            animationOptions : {
                duration : 750,
                easing : 'linear'
            }
        });

        
        links.forEach(link =>{
            link.classList.remove('active')
        });
        e.target.classList.add('active');

    });
});


//slider
$('.slider').slick({
    arrows : false,
    autoplay : true
});

/*-------------------- 
My Works End
--------------------*/






















});



