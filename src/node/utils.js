const path = require('path')
const fs = require('fs')

exports.idGenerator = (function* idMaker() {
    let id = 0
    while (true) {
        yield id++
    }
})()

exports.getTestDataDirectory = () => path.join(process.env.HOME, '/quick-delete-test-data')

exports.createTestData = () => {
    const testDataDirectory = this.getTestDataDirectory()
    if (!fs.existsSync(testDataDirectory)) {
        fs.mkdirSync(testDataDirectory)
    }
    fs.copyFileSync(path.resolve('src/test/images/1024x768.jpg'), `${testDataDirectory}/1024x768.jpg`)
    fs.copyFileSync(path.resolve('src/test/images/1080x1920.jpg'), `${testDataDirectory}/1080x1920.jpg`)
    fs.copyFileSync(path.resolve('src/test/images/1920x1080.jpg'), `${testDataDirectory}/1920x1080.jpg`)
    fs.copyFileSync(path.resolve('src/test/images/2448x3264.jpg'), `${testDataDirectory}/2448x3264.jpg`)
    fs.copyFileSync(path.resolve('src/test/images/3264x2448.jpg'), `${testDataDirectory}/3264x2448.jpg`)
}
