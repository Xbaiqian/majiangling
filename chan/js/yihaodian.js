(function(){
    $(".nav-right li:eq(0)").mouseenter(function(){
          $(".hide").addClass("show").siblings(".hide1").removeClass("show");
    });
    $(".hide").mouseleave(function(){
         $(".hide").removeClass("show");
    });
    $(".nav-right li:eq(1)").mouseenter(function(){
        $(".hide1").addClass("show").siblings(".hide").removeClass("show");
    });
    $(".hide1").mouseleave(function(){
        $(".hide1").removeClass("show");
    });
    $(".nav-right li:eq(2)").click(function(){
        $(".hide2").addClass("show");
        $(".nav-right").css("display","none");
    });
    $(".input .img2").click(function(){
        $(".hide2").removeClass("show");
        $(".nav-right").css("display","block");
    });
   $(".mouse").mouseenter(function(){
       $(".yinchang").css("display","block");
   });
    $(".mouse").mouseleave(function(){
        $(".yinchang").css("display","none");
    });
    //折叠
    $(".footer-item p").click(function(){
        $(this).toggleClass("cur")
            .siblings("ul")
            .slideToggle().parent()
    });
     //手机导航
    $(".nav-img1").click(function(){
        $(".daohdianji").css("display","block");
    });

    $(".tit p").click(function(){
        $(".daohdianji").css("display","none");
    });
     $(".inpt input").focus(function(){
         $(".title").css("display","block");
         $(".slide").slideUp();
     });
     $(".title img").click(function(){
         $(".slide").slideDown();
         $(".title").css("display","none");
     });
     $(".nav-img3").click(function(){
         $(".rightdianji").toggleClass("cla");
     });





















})();