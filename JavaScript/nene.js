document.getElementById('image-button').addEventListener('click', function() {
    var images = [
        'images/nene1.webp', // 画像ファイルのURLまたはパス
        'images/nene2.webp',

        // ここに他の画像を追加
    ];

    var imageIndex = Math.floor(Math.random() * images.length);
    var imageUrl = images[imageIndex];

    var imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    var container = document.getElementById('image-container');
    container.innerHTML = ''; // 既存の画像をクリア
    container.appendChild(imageElement);
});
