function _createBookToshow() {

    gBooks = [
        { id: ++gId, tittle: 'harry po', price: 20, rate: 0},
        { id: ++gId, tittle: 'jacky', price: 30, rate: 0},
        { id: ++gId, tittle: 'allui', price: 40, rate: 0}

    ]

    _saveBooksToStorage()

}

function addRaiting(bookId){

    if(gBooks[bookId].rate>9) return
    gBooks[bookId].rate++
    _saveBooksToStorage()
    renderBooks()
    onReadBook(gBooks[bookId].tittle)

}

function minRaiting(bookId){
    
    if(gBooks[bookId].rate<1) return
    gBooks[bookId].rate--
    _saveBooksToStorage()
    renderBooks()
    onReadBook(gBooks[bookId].tittle)

}

function _saveBooksToStorage() {
    saveToStorage('booksDB', gBooks)


}

function deleteBook(bookname){
    _deleteBook(bookname)
}


function _deleteBook(bookname){
    var idx = gBooks.findIndex(book => book.tittle === bookname)
    gBooks.splice(idx,1)
    _saveBooksToStorage()
    renderBooks()


}

function addBook(name,price){

    var newBook = { id: ++gId, tittle: name, price: price, rate: 0}
    gBooks.push(newBook)
    _saveBooksToStorage()
    renderBooks()
    


}

function UpdateBook(id){
    var bookToUpdate = gBooks.find(book => book.id === id)

    bookToUpdate.price = +prompt('add new price')
    _saveBooksToStorage()
    renderBooks()




}






