import Cropper from './cropper.js';

// const image = document.getElementById('image');
var cropper;

export function initCropper(image) {
    console.log('init cropper');
    cropper = new Cropper(image, {
        aspectRatio: 1 / 1,
        crop(event) {
            // console.log('x:', event.detail.x, 'y:', event.detail.y, 'w:', event.detail.width, 'h:', event.detail.height);
            // console.log(event.detail.scaleX);
            // console.log(event.detail.scaleY);
        },
    });
    return cropper;
}

export function getCroppedCanvas(){
    return cropper.getCroppedCanvas({maxWidth: 1024, maxHeight: 1024});
}

export function replace(url, hasSameSize=false){
    return cropper.replace(url, hasSameSize);
}

export function getCropper(){
    return cropper;
}