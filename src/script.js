
let inputUrl = document.getElementById("inputUrl");
let generateBtn = document.getElementById("generateBtn");

const thumbnail_downloader = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[1].length == 11) {
        let vidurl = match[1];
        console.log(vidurl)
        thumbnailHd = 'http://img.youtube.com/vi/' + vidurl + '/maxresdefault.jpg';
        thumbnailMd = 'http://img.youtube.com/vi/' + vidurl + '/hqdefault.jpg';
        thumbnailSmall = 'http://img.youtube.com/vi/' + vidurl + '/mqdefault.jpg';
    } else {
        alert("The URL you have entered maybe incorrect. Please Enter a correct URL.");
        location.reload();
    }
    document.getElementById('hdImage').src = thumbnailHd;
    document.getElementById('mediumImage').src = thumbnailMd;
    document.getElementById('smallImage').src = thumbnailSmall;
}

generateBtn.addEventListener('click', () => {
    if (inputUrl.value != null) {
        thumbnail_downloader(inputUrl.value);
    }
    else {
        alert("Enter url")
        console.log("asdf")
    }
})