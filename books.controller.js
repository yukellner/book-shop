var gBooks = []
var gId = 0


$(init)

function init(){
    createBooks()
    renderBooks()
}

function renderBooks(){



    var elTable = document.querySelector('table')
    elTable.innerHTML = ''

    elTable.innerHTML += `
    <thead class="thead-dark">
    <tr>
    <th  data-trans="id">id</th><th data-trans="bookName">name</th><th data-trans="price">price</th><th data-trans="rank">rate</th><th data-trans="action" colspan="3">action</th>
    </tr>
    </thead>`

    gBooks.forEach(book => {
        elTable.innerHTML += 
        `<tr><td>${book.id}</td><td>${book.tittle}</td><td>${book.price}$<td>${book.rate}</td>
        <td><button data-trans="btnRead" name="${book.tittle}" type="read" onclick="onClicked(this)" class="btn btn-primary">Read</button></td>
        <td><button data-trans="btnUpgared" name="${book.tittle}" type="upgrade" onclick="onClicked(this)" class="btn btn-warning">Upgrade</button></td>
        <td><button data-trans="btnDelete" name="${book.tittle}" type="delete" onclick="onClicked(this)" class="btn btn-danger">Delete</button></td>
        </tr>`
        
    });

}

function onClicked(btn){

    

    if(btn.className == 'btn-read') onReadBook(btn.name)
    if(btn.className == 'btn-upgrade') onUpdateBook(btn.name)
    if(btn.className == 'btn-delete') deleteBook(btn.name)





}

function createBooks(){

    _createBookToshow()

}

function onAddBook(){

    bookName = prompt('enter book name')
    bookPrice = +prompt('enter the price')


    addBook(bookName, bookPrice)
    
}

function onUpdateBook (bookName){

    var bookToUpdate = gBooks.find(book=> book.tittle === bookName)

    UpdateBook(bookToUpdate.id)
}

function onReadBook(bookName){

    elModal = document.querySelector('.modal')
    elModal.classList.add('open')

    var bookIdx = gBooks.findIndex(book => book.tittle === bookName)

    elModal.innerHTML = 
    `<h3>${bookName}</h3>
    <button onclick="addRaiting(${bookIdx})">+</button>
    ${gBooks[bookIdx].rate}
    <button onclick="minRaiting(${bookIdx})">-</button>

    <button onclick="btnCloseModal()">close</button>
    
    
    `

}

function btnCloseModal(){
    elModal = document.querySelector('.modal')
    elModal.classList.remove('open')


}

function onChangeLang(value){

    if(value === 'English') {
        var lang = 'en'
        document.body.classList.remove('rtl')

    }
    else {
        var lang = 'he'
        document.body.classList.add('rtl')

    }
    getlang(lang)

    doTranslate(lang)

    

}



