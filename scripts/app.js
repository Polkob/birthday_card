
const gallery = document.querySelector('.gallery');
  const images = document.querySelectorAll('.gallery img');

  let currentIndex = 0;
  const imageWidth = images[0].offsetWidth;
  const galleryWidth = gallery.offsetWidth;

  function scrollToImage(index) {
    gallery.scrollLeft = index * imageWidth;
  }

  gallery.addEventListener('scroll', () => {
    currentIndex = Math.floor(gallery.scrollLeft / imageWidth);

    if (currentIndex === images.length - 2) {
      // Если прокрутили до предпоследней фотографии, плавно перемещаемся к первой
      scrollToImage(0);
    } else if (currentIndex === images.length - 1) {
      // Если прокрутили до последней фотографии, плавно перемещаемся к третьей
      scrollToImage(2);
    }
  });

  // Плавно прокручиваем к первой фотографии при загрузке страницы
  scrollToImage(0);