$(document).ready(function() { //jQuery သုံးမယ်ဆိုရင် jQuery code တေကို ready function ထဲမာ ထည့်ပေးရမယ်
    //sticky nav 
    $('.js--section-feature').waypoint(function(direction) {

        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky'); 
        }
        
    },{
        offset: '150px' // select မှတ်ထားတဲ့ section မရောက်ခင် 150px မှာ ပေါ်ပေးပါလို့ပြောတာ
    })

    //scroll button effect
    $('.js-btn-full').click(function() {

        $('html,body').animate({     // scroll က html and body မှာ လုပ်တာဖြစ်တဲ့အတွက်ကြောင့် html and body ကို select လုပ်ပေးရမယ်
             scrollTop: $('.js--section-plan').offset().top 
            },1000) // 1000=1000ms=1s
    })

    //scroll nav effect ကို css ဖြင့်ရေးထားသည် html{scroll-behavior: smooth}

    //animation scroll 
    //animated.css ကို waypoints နဲ့တွဲသုံးပါမည်
    $('.js--wp-1').waypoint(function(direction){ // waypoint သုံးရင် function မာ direction ကို ထည့်ကိုထည့်ပေးရပါမယ်
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function(direction){ 
        $('.js--wp-2').addClass('animated fadeInUpBig'); // fadeIn,fadeInUpBig ဆိုတာ animated.css က class ခေါ်ထားခြင်းဖြစ်တယ်
    },{
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction){ 
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    })

    //mobile nav
    $('.js--mobile-nav-icon').click(function() {
        $('.js--main-nav').slideToggle(200); //0.2s

        if ($('.js--mobile-nav-icon i').hasClass('fa-bars')) { //$('.parent .child')
            $('.js--mobile-nav-icon i').addClass('fa-times');
            $('.js--mobile-nav-icon i').removeClass('fa-bars');
        } else {
            $('.js--mobile-nav-icon i').removeClass('fa-times');
            $('.js--mobile-nav-icon i').addClass('fa-bars');
        }
    })

})