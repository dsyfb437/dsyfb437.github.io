// 随机首页背景图
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('#page-header');
  if (header) {
    var bgImages = [
      '/img/index/e18620860ca7c7aa6b95c1a3f7a2d591.jpg',
      '/img/index/微信图片_20260208215222_32811_5.jpg',
      '/img/index/微信图片_20260217234400_34539_5.jpg'
    ];
    var randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];
    header.style.backgroundImage = 'url(' + randomBg + ')';
  }
});
