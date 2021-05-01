//Check off specifc todo by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed"); 
});

//Delete ToDo's
$("ul").on("click","span",function(event) {
    $(this).parent().fadeOut(400,function(){
        $(this).remove();
    });
    event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todos=$(this).val();
        $(this).val("");
        $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>"+ todos +"</li>");
    }
    event.stopPropagation();
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});