function showAuthorInfo() {
    console.log('showAuthorInfo')
}
function listBooks() {
    console.log('listBooks')
}

var routes = {
    '/author': showAuthorInfo,
    '/books': listBooks,
}
export default routes
