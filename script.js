$(function(){
    $('.carousel').carousel({
        interval:3000,
        keybord:true,
        pause:'hover',
        ride:false,
        wrap:true
    })
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
})
