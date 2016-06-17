(function () {
    var menuContent = $('nav>ul>li>a');
    var menuBlock = $('nav>ul>li ');
    var menuContainer = $('nav')
    $('#menu').on('click',function (e) {
        e.target.style.display='none';
        menuContainer.addClass('ul');
        menuContent.addClass('a');
        menuBlock.addClass('li');
    });
    $('#storyteller').on('click',function(e){
        $('#menu').css('display','');
        menuContent.removeClass('a');
        menuBlock.removeClass('li');
        menuContainer.removeClass('ul');
    })
})()