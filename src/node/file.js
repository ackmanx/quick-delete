const fs = require('fs')
const path = require('path')

exports.getImageFiles = sourceDir => {
    const imagesAndFolders = []

    fs.readdirSync(sourceDir).forEach(file => {
        const fileAbsolute = path.join(sourceDir, file)

        if (/.(jpg|jpeg)$/.test(file)) {
            imagesAndFolders.push({
                isDirectory: false,
                srcOriginal: fileAbsolute,
                srcThumbnail: '',
                name: file
            })
        }
    })

    return imagesAndFolders
}
