const preloadIMG = (imgs) => new Promise( async resolve => {
    let imgCount = 0;
    let loadedCount = 0;
    let srcArray = imgs;

    imgCount = srcArray.length

    for( let src of srcArray ) {
        let img = new Image()

        img.onerror = img.onabort = img.onload = () => {

            if(++loadedCount >= imgCount) {
                console.log('loaded');
                resolve()
            }
        }
        img.src=src;
    }
})

export default preloadIMG