$(function() {
    $('.navbar__link').on('click', function(e) {
        e.preventDefault();

        var $item = $(this).closest('.navbar__item'),
            $content = $('.tab__content'),
            $itemNumber = $item.index();

        $content
            .eq($itemNumber)
            .addClass('active__tab')
            .siblings()
            .removeClass('active__tab');

        $item
            .addClass('active__link')
            .siblings()
            .removeClass('active__link');
    });

    $('.input').hover(function() {
        var $input = $(this).closest('label'),
            $tooltip = $('.tooltip'),
            $form = $('.my__form'),
            $tooltipNumber = $input.index();

        $tooltip
            .eq($tooltipNumber)
            .css('opacity', '1')

    }, function() {
        var $input = $(this).closest('label'),
            $tooltip = $('.tooltip'),
            $form = $('.my__form'),
            $tooltipNumber = $input.index();

        $tooltip
            .eq($tooltipNumber)
            .css('opacity', '0')
    });

    $('button').on('click', function(e) {
        e.preventDefault();
        var $tooltip = $('.tooltip');

        $tooltip.css('opacity', '1' );
    });
});
