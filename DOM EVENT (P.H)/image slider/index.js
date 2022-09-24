let images = [
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img4.jpg'
];
let imgIndex = 0;

const imgElement = document.getElementById('slider-img')


setInterval(()=>{
    if(imgIndex >= images.length){
    imgIndex = 0;
    }
    // console.log(imgIndex)
    const imgUrl = images[imgIndex]
    imgElement.setAttribute('src', imgUrl)
    imgIndex ++;
    // console.log(imgUrl)
},1000)