
let parent_width = $(".cat_box").width()
let child_width = $(".sub_categories").width()
let translate = 0
let max = child_width - parent_width

function setWidth(){

}
//max translate = child_width - parent_width
function left(button){
    if(translate<=0){
        $(button).hide()
        $(button).parent().parent().find(".right").show()
    }else{
        translate -=50
    }
    
    console.log(parent_width,child_width)
  // $(".child").css("transform","translateX("+translate+"px)")
  $(button).parent().parent().find(".cat_box").scrollLeft(translate)
}
function right(button){
    if(translate>=max){
        $(button).hide()
        
        $(button).parent().parent().find(".left").show()
        
    }else{
        translate +=50
    }
    
    console.log(parent_width,child_width)
  // $(".child").css("transform","translateX("+translate+"px)")
  $(button).parent().parent().find(".cat_box").scrollLeft(translate)
    
}




// Nav Tab js


var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });




 
