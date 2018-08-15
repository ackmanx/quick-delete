const file = require('./file')

test('getImageFiles', () => {
    const files = file.getImageFiles('/Volumes/Storage/Dropbox/Code/fat-fotos/mock-image-folder')
    expect(files.length).toEqual(5)

    //Assert sorting of folders on top
    expect(files[0].isDirectory).toEqual(true)
    expect(files[1].isDirectory).toEqual(true)
    expect(files[2].isDirectory).toEqual(true)
    expect(files[3].isDirectory).toEqual(true)
    expect(files[4].isDirectory).toEqual(false)
})

test('sortFoldersOnTopAndAlphabetically only folders tiny list', () => {
    const array = [
        {isDirectory: true, name: 'd'},
        {isDirectory: true, name: 'x'},
        {isDirectory: true, name: 'z'},
        {isDirectory: true, name: 'a'},
        {isDirectory: true, name: 'a'},
    ]

    expect(file.sortFoldersOnTopAndAlphabetically(array)).toEqual([
        {isDirectory: true, name: 'a'},
        {isDirectory: true, name: 'a'},
        {isDirectory: true, name: 'd'},
        {isDirectory: true, name: 'x'},
        {isDirectory: true, name: 'z'},
    ])
})

test('sortFoldersOnTopAndAlphabetically only files tiny list', () => {
    const array = [
        {name: 'd'},
        {name: 'x'},
        {name: 'z'},
        {name: 'a'},
        {name: 'a'},
    ]

    expect(file.sortFoldersOnTopAndAlphabetically(array)).toEqual([
        {name: 'a'},
        {name: 'a'},
        {name: 'd'},
        {name: 'x'},
        {name: 'z'},
    ])
})

test('sortFoldersOnTopAndAlphabetically double letters', () => {
    const array = [
        {name: 'a'},
        {name: 'b'},
        {name: 'ac'},
        {name: 'ab'},
        {name: 'aa'},
    ]

    expect(file.sortFoldersOnTopAndAlphabetically(array)).toEqual([
        {name: 'a'},
        {name: 'aa'},
        {name: 'ab'},
        {name: 'ac'},
        {name: 'b'},
    ])
})

test('sortFoldersOnTopAndAlphabetically numbers', () => {
    const array = [
        {name: '0'},
        {name: '2'},
        {name: '4'},
        {name: '3'},
        {name: '1'},
    ]

    expect(file.sortFoldersOnTopAndAlphabetically(array)).toEqual([
        {name: '0'},
        {name: '1'},
        {name: '2'},
        {name: '3'},
        {name: '4'},
    ])
})

test('sandbox', () => {
    const array = [
        {name: 'b'},
        {name: '!'},
        {name: 'a'},
        {name: '0'},
    ]

    expect(file.sortFoldersOnTopAndAlphabetically(array)).toEqual([
        {name: '!'},
        {name: '0'},
        {name: 'a'},
        {name: 'b'},
    ])
})

test('sortFoldersOnTopAndAlphabetically big list', () => {
    const shuffled = [
        {isDirectory: true, name: 'p'},
        {isDirectory: true, name: 'f'},
        {isDirectory: false, name: 'my filename'},
        {isDirectory: true, name: 'g'},
        {isDirectory: true, name: 'k'},
        {isDirectory: false, name: 'i'},
        {isDirectory: false, name: 'k'},
        {isDirectory: true, name: 'l'},
        {isDirectory: false, name: 'b'},
        {isDirectory: false, name: '01'},
        {isDirectory: false, name: 'e'},
        {isDirectory: false, name: 'm'},
        {isDirectory: true, name: 'r'},
        {isDirectory: false, name: 't'},
        {isDirectory: false, name: 'v'},
        {isDirectory: false, name: '0a'},
        {isDirectory: true, name: 'e'},
        {isDirectory: true, name: 'v'},
        {isDirectory: true, name: 'm'},
        {isDirectory: true, name: '1'},
        {isDirectory: false, name: 'j'},
        {isDirectory: true, name: 't'},
        {isDirectory: true, name: 'd'},
        {isDirectory: false, name: 'w'},
        {isDirectory: false, name: 'p'},
        {isDirectory: true, name: 'z'},
        {isDirectory: true, name: '01'},
        {isDirectory: true, name: 'n'},
        {isDirectory: true, name: '2'},
        {isDirectory: true, name: '!'},
        {isDirectory: false, name: '1'},
        {isDirectory: false, name: 'x'},
        {isDirectory: false, name: 'u'},
        {isDirectory: true, name: '0'},
        {isDirectory: true, name: '你好'},
        {isDirectory: true, name: 'j'},
        {isDirectory: false, name: 'z'},
        {isDirectory: false, name: 'q'},
        {isDirectory: true, name: 'x'},
        {isDirectory: true, name: 'my filename'},
        {isDirectory: false, name: 's'},
        {isDirectory: true, name: '11'},
        {isDirectory: false, name: '2'},
        {isDirectory: false, name: 'f'},
        {isDirectory: true, name: 'w'},
        {isDirectory: true, name: 'q'},
        {isDirectory: false, name: 'n'},
        {isDirectory: false, name: '0'},
        {isDirectory: true, name: '0a'},
        {isDirectory: false, name: '11'},
        {isDirectory: false, name: 'y'},
        {isDirectory: false, name: 'r'},
        {isDirectory: true, name: 'u'},
        {isDirectory: false, name: 'o'},
        {isDirectory: false, name: 'l'},
        {isDirectory: true, name: 'c'},
        {isDirectory: false, name: '!'},
        {isDirectory: false, name: 'd'},
        {isDirectory: false, name: 'c'},
        {isDirectory: false, name: 'g'},
        {isDirectory: true, name: 'i'},
        {isDirectory: true, name: 'h'},
        {isDirectory: false, name: 'a'},
        {isDirectory: true, name: 'a'},
        {isDirectory: true, name: 'y'},
        {isDirectory: false, name: '你好'},
        {isDirectory: false, name: 'h'},
        {isDirectory: true, name: 'o'},
        {isDirectory: true, name: 's'},
        {isDirectory: true, name: 'b'},
    ]

    expect(file.sortFoldersOnTopAndAlphabetically(shuffled)).toEqual([
        {isDirectory: true, name: '!'},
        {isDirectory: true, name: '0'},
        {isDirectory: true, name: '01'},
        {isDirectory: true, name: '0a'},
        {isDirectory: true, name: '1'},
        {isDirectory: true, name: '11'},
        {isDirectory: true, name: '2'},
        {isDirectory: true, name: 'a'},
        {isDirectory: true, name: 'b'},
        {isDirectory: true, name: 'c'},
        {isDirectory: true, name: 'd'},
        {isDirectory: true, name: 'e'},
        {isDirectory: true, name: 'f'},
        {isDirectory: true, name: 'g'},
        {isDirectory: true, name: 'h'},
        {isDirectory: true, name: 'i'},
        {isDirectory: true, name: 'j'},
        {isDirectory: true, name: 'k'},
        {isDirectory: true, name: 'l'},
        {isDirectory: true, name: 'm'},
        {isDirectory: true, name: 'my filename'},
        {isDirectory: true, name: 'n'},
        {isDirectory: true, name: 'o'},
        {isDirectory: true, name: 'p'},
        {isDirectory: true, name: 'q'},
        {isDirectory: true, name: 'r'},
        {isDirectory: true, name: 's'},
        {isDirectory: true, name: 't'},
        {isDirectory: true, name: 'u'},
        {isDirectory: true, name: 'v'},
        {isDirectory: true, name: 'w'},
        {isDirectory: true, name: 'x'},
        {isDirectory: true, name: 'y'},
        {isDirectory: true, name: 'z'},
        {isDirectory: true, name: '你好'},
        {isDirectory: false, name: '!'},
        {isDirectory: false, name: '0'},
        {isDirectory: false, name: '01'},
        {isDirectory: false, name: '0a'},
        {isDirectory: false, name: '1'},
        {isDirectory: false, name: '11'},
        {isDirectory: false, name: '2'},
        {isDirectory: false, name: 'a'},
        {isDirectory: false, name: 'b'},
        {isDirectory: false, name: 'c'},
        {isDirectory: false, name: 'd'},
        {isDirectory: false, name: 'e'},
        {isDirectory: false, name: 'f'},
        {isDirectory: false, name: 'g'},
        {isDirectory: false, name: 'h'},
        {isDirectory: false, name: 'i'},
        {isDirectory: false, name: 'j'},
        {isDirectory: false, name: 'k'},
        {isDirectory: false, name: 'l'},
        {isDirectory: false, name: 'm'},
        {isDirectory: false, name: 'my filename'},
        {isDirectory: false, name: 'n'},
        {isDirectory: false, name: 'o'},
        {isDirectory: false, name: 'p'},
        {isDirectory: false, name: 'q'},
        {isDirectory: false, name: 'r'},
        {isDirectory: false, name: 's'},
        {isDirectory: false, name: 't'},
        {isDirectory: false, name: 'u'},
        {isDirectory: false, name: 'v'},
        {isDirectory: false, name: 'w'},
        {isDirectory: false, name: 'x'},
        {isDirectory: false, name: 'y'},
        {isDirectory: false, name: 'z'},
        {isDirectory: false, name: '你好'},
    ])
})
