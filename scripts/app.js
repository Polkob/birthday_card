(function ($) {
    $(document).ready(function () {

        let carouselSelector = ".owl-carousel";

        $(carouselSelector).each(function () {

            let owl = $(this);

            owl.owlCarousel({
                items: 2,
                margin: 20,
                mouseDrag: true,
                touchDrag: true,
                touchSwipe: true,
                loop: true,
                autoPlay: true,
                autoPlayTimeout: 1000,
                fluidSpeed: true,
                autoPlaySpeed: 1000, 
                smartSpeed: 1000,
            });

            owl.trigger('play.owl.autoplay', [1500]);

            function getDaysDifference(date1, date2) {
                const oneDay = 24 * 60 * 60 * 1000;
                const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
                return diffDays;
            }

            function updateDateInfo() {
                const metDate = new Date('2022-06-20');
                const currentDate = new Date();
                const daysTogether = getDaysDifference(currentDate, metDate);

                $('.date-met-text').text(metDate.toLocaleDateString());
                $('.current-date-text').text(currentDate.toLocaleDateString());
                $('.days-together-text').text(`${daysTogether} дня`);
            }

            setInterval(updateDateInfo, 1000);
        });

        $.get('../letter.txt', function(data) {
            $('#letter-content').text(data);
        })
        .fail(function(error) {
            console.error('Ошибка при чтении файла:', error);
        });

    });
})(jQuery);