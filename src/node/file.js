const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')
const del = require('del')

exports.getImageFiles = sourceDir => {
    const imagesAndFolders = []

    fs.readdirSync(sourceDir).forEach(file => {
        const fileAbsolute = path.join(sourceDir, file)

        if (/.(jpg|jpeg)$/.test(file.toLocaleLowerCase())) {
            const dimensions = sizeOf(fileAbsolute)

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
    //Returns array of deleted files
    return del.sync(listOfPaths, {force: true})
}
