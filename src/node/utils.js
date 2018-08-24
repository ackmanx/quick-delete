const path = require('path')

exports.idGenerator = (function* idMaker() {
    let id = 0
    while (true) {
        yield id++
    }
})()

exports.getTestDataDirectory = () => path.join(process.env.HOME, '/quick-delete-test-data')
