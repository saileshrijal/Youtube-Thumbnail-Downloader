
let inputUrl = document.getElementById("inputUrl");
let generateBtn = document.getElementById("generateBtn");

const thumbnail_downloader = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[1].length == 11) {
        showLoading();

        let vidurl = match[1];
        console.log(vidurl)
        thumbnailHd = 'http://img.youtube.com/vi/' + vidurl + '/maxresdefault.jpg';
        thumbnailMd = 'http://img.youtube.com/vi/' + vidurl + '/0.jpg';
        thumbnailSmall = 'http://img.youtube.com/vi/' + vidurl + '/mqdefault.jpg';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Input URL In Input Box',
        })
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Input URL is empty or invalid',
        })
    }
})


function showLoading() {
    let timerInterval
    Swal.fire({
        title: 'Grabbing Thumbnail From URL!',
        html: 'Wait <b></b> milliseconds.',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}