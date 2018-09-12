

$(document).ready(function(){

$(".store_index_lib_nr a").hover(function(){
var x = $(this).position("body").left; 
var y = $(this).position("body").top; 
var info =$(this).children("div").html();
var appendDiv = $("body").append("<div class='rel'>"+info+"<i></i></div>");
var appendDivWidth = $(".rel").innerWidth()+20;
$(".rel").css({"left":x+"px","top":y+"px","margin-left":-appendDivWidth+"px"});

})


$(".store_index_lib_nr a").mouseout(function(){

$(".rel").remove();


})

    $('.user_wxin').on('click', function(){
        var user_wxin = $(".ueser_wxin_img").html();
        layer.open({
            type: 1,
            title:false,
            closeBtn: 0,
            area: ['auto', 'auto'],
            shadeClose: true, //点击遮罩关闭
            shade: [0.8, '#000000'],
            content: user_wxin
        });


});  





$(".store_index_lib_tit_xl").click(function(){
    $(this).parents('.store_index_lib_tit-bt').children('.store_index_lib_tit-nr').slideToggle();
});

$(".store_index_lib_tit-nr").mouseleave(function(){
        $(this).slideToggle();
});


$(".store_index_lib_nr span").eq(0).css({"display":"block"});
$(".store_index_lib_tit-nr a").click(
function(){
	$(".store_index_lib_tit_xl samp").text($(this).text());
	var num=$(this).index();
	$(".store_index_lib_nr span").css({"display":"none"});
	$(".store_index_lib_nr span").eq(num).css({"display":"block"});
	}
);



$(".store_page_tit a").click(
function(){
var num=$(this).index();
$(".store_page_tit a").removeClass("active");
$(".store_page_tit a").eq(num).addClass("active");
$(".store_page_store samp").css({"display":"none"});
$(".store_page_store samp").eq(num).css({"display":"block"});
}
);


// 招聘
$(document).ready(function(){
    $(".page_talent ul li:first-child").children('.page_talent_cont').slideToggle();
    $(".page_talent ul li:first-child").children('.page_talent_tit').toggleClass ('active');
    
    $(".page_talent_tit").click(function(){
        $(this).parent().children('.page_talent_cont').slideToggle();
        $(this).toggleClass ('active');
    });
});





$(".m_store_page_tit a").click(
function(){
var num=$(this).index();
$(".m_store_page_tit a").removeClass("active");
$(".m_store_page_tit a").eq(num).addClass("active");
$(".m_store_page_store ul").css({"display":"none"});
$(".m_store_page_store ul").eq(num).css({"display":"block"});
}
);


//联系
$(document).ready(function(){
$("#con > a").eq(1).attr({ href: "index.php?m=content&c=index&a=lists&catid=42#projects_lib1"});
$("#con> a").eq(3).attr({ href: "index.php?m=content&c=index&a=lists&catid=42#projects_lib3"});


$("#con > a").eq(1).click(function(){$('html,body').animate({scrollTop:$('#projects_lib1').offset().top}, 800);});
$("#con > a").eq(3).click(function(){$('html,body').animate({scrollTop:$('#projects_lib3').offset().top}, 800);});
});	

$(".m_contact_bread_nav a").click(
function(){
   
var num=$(this).index();
$(".m_contact_bread_nav a").removeClass("active");
$(".m_contact_bread_nav a").eq(num).addClass("active");
$(".m_contact_page article").css({"display":"none"});
$(".m_contact_page article").eq(num).css({"display":"block"});
}
);


layui.use('form', function(){
  var form = layui.form();
  
  //各种基于事件的操作，下面会有进一步介绍
});


});	



