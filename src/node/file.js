const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')

exports.getImageFiles = sourceDir => {
    const imagesAndFolders = []

    fs.readdirSync(sourceDir).forEach(file => {
        const fileAbsolute = path.join(sourceDir, file)

        if (/.(jpg|jpeg)$/.test(file)) {
            const dimensions = sizeOf(fileAbsolute);

            imagesAndFolders.push({
                isDirectory: false,
                srcOriginal: fileAbsolute,
                srcThumbnail: '',
                name: file,
                width: dimensions.width,
                height: dimensions.height,
            })
        }
    })

    return imagesAndFolders
}

exports.startDeletes = listOfPaths => {
    console.log('giggity, i did it', listOfPaths)
}
