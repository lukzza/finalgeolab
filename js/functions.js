$(document).ready(function () {
    $('header > section.HeaderContainer > span.respBTN').click(function () {

        if ($(this).hasClass('btnact')) {
            $(this).removeClass('btnact');
            $('header > section.HeaderContainer > ul.respMenu').removeClass('active');
            $('body').css({ position: 'initial' });
        }
        else {
            $(this).addClass('btnact');
            $('header > section.HeaderContainer > ul.respMenu').addClass('active');
        $('body').css({ position: 'fixed' });
        }
    });
});