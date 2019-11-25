$(".single-menu h5").on("click",function(){    
    $(this).next().slideToggle(500);
    $(this).parent().siblings().find("ul").slideUp(500);
 });


// function openNav() {
//    document.getElementById("mySidenav").style.width = "200px";
//    document.getElementById("main").style.marginLeft = "200px";
//  }
//  function closeNav() {
//    document.getElementById("mySidenav").style.width = "0";
//    document.getElementById("main").style.marginLeft = "0";
//  }