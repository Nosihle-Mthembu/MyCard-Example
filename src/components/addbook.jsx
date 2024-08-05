function AddBook({Book}){
   
  let MyBook = JSON.parse(localStorage.getItem("BookTable"))
  console.log(Book, "This is what inside the book")
  console.log(MyBook,  "This is inside MYBook")
  MyBook.push(Book)
  localStorage.setItem("MyBook",JSON.stringify(MyBook))
  console.log("The new book " , MyBook)

    return(
        <>
            <div></div>
        </>
    )
}
export default AddBook