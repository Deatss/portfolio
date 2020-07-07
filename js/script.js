function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();


$( document ).ready(function() {
    if ($(".section").hasClass("s-active")){
    	console.log(1);
    }else{
    	console.log(2);
    }

    (function() {
        // Add event listener
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#parallax");
        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
            // let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
            // let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
            let x = `${_depth1}`;
            console.log(x);
            elem.style.backgroundPosition = x;
        }

    })();


    var lastScrollTop = 0;
    $(document).on('scroll', function(){
    	

        var st = $(this).scrollTop();

        





        var scrollbar = document.body.getBoundingClientRect().top;
        var section2 = $('.bg-2').position();
        var section3 = $(".bg-3").position();
        var section4 = $(".bg-4").position();
        // console.log(-section2.top);
        // console.log(-section2.top+1);
        // console.log(scrollbar);


        //up or down scroll
        if (st > lastScrollTop){
            // downscroll code
            // console.log("down");

            if (scrollbar>-20){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".bg-2").offset().top
                }, 200);
                $(".s-intro").addClass("s-hidden");
            }else{
                if ((scrollbar<-section2.top)&&(scrollbar>-section2.top-20)){
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".bg-3").offset().top
                    }, 200);
                    $(".s-about").addClass("s-hidden");
                }else{
                    if ((scrollbar<-section3.top)&&(scrollbar>-section3.top-20)){
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".bg-4").offset().top
                        }, 200);
                        $(".s-work").addClass("s-hidden");
                    }else{

                    }
                }
            }





        } else {
          // upscroll code
          // console.log("up");
          console.log(scrollbar);
          console.log(section4.top);


          if ((scrollbar>-section4.top+1)&&(scrollbar<-section4.top+20)){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".bg-3").offset().top
            }, 200);
            $(".s-work").removeClass("s-hidden");
          }else{
            if ((scrollbar>-section3.top+1)&&(scrollbar<-section3.top+20)){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".bg-2").offset().top
                }, 200);
                $(".s-about").removeClass("s-hidden");
            }else{
                if ((scrollbar>-section2.top+1)&&(scrollbar<-section2.top+20)){
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".bg-1").offset().top
                    }, 200);
                    $(".s-intro").removeClass("s-hidden");
                }else{

                }
            }
          }




        }
        lastScrollTop = st;













        // if (scrollbar>-1){
        //     $([document.documentElement, document.body]).animate({
        //         scrollTop: $(".bg-2").offset().top
        //     }, 300);
        // }else{
        //     if ((scrollbar<-section2.top)&&(scrollbar>-section2.top-20)){
        //         $([document.documentElement, document.body]).animate({
        //             scrollTop: $(".bg-3").offset().top
        //         }, 300);
        //     }else{
        //         console.log(2);
        //     }
        // }

        var isElementInView = Utils.isElementInView($('.bg-1'), false);

        if (isElementInView) {
            // var p1=$(".bg-2").position();
            // console.log(p1);
            // $("body").scrollTop(p1.top);
            // $(".bg-2").get(0).scrollIntoView();
            // $([document.documentElement, document.body]).animate({
            //     scrollTop: $(".bg-2").offset().top
            // }, 1000);
            


        } else {
            // console.log('out of view');
        }

        var isElementInView2 = Utils.isElementInView($('.bg-2'), false);

        if (isElementInView2) {
            // console.log('in view2');
            
        } else {
            // console.log('out of view');
        }

        var isElementInView3 = Utils.isElementInView($('.bg-3'), false);

        if (isElementInView3) {
            // console.log('in view3');
            
        } else {
            // console.log('out of view');
        }

        var isElementInView4 = Utils.isElementInView($('.bg-4'), false);

        if (isElementInView4) {
            // console.log('in view4');
            
        } else {
            // console.log('out of view');
        }

    });



});