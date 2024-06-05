// function fetch() {
//     return 'api data'
// }

// let info = null

// fetch('https://randomuser.me/api?results=10')  //fecth the data from api
//  .then(data => data.json()) //convert data to json data
//  .then(data => {
//     info = data

//  }) // now we can do whatever we want with the data
// //  .catch(errorCatch => console.log(errorCatch)) //error handling
// .catch(err => {
//     throw new Error('yhoo') // error message -- error/ err / e
// })

//async and await

// async function fetchData() {
//     let data = await fetch('https://randomuser.me/api?results=10')
//     // let convertedData = await data.json()
//     let {results} = await data.json() // de-structuring  
//     // info = convertedData.results
//     console.log(results);
// }

// fetchData()


//Destructuring - use it to set variables - only work when the variable name is the same as the property name inside the object
//for objects
// let person = {
//     name: 'bob',
//     age: 40
// }


// let name = person.name // dot notation
// let {name} = person // destructuring 

// let age = person.age
// let {age} = person

// can also write it in one line 
// let {name, age} = person


// console.log(age, name);


//for arrays - use the destructing based on the order of the array
// let people = ['bob', 'john', 'garth']

// let [first, second, third] = people

// console.log(first, second, third);

// let result

// async function fetchData() {
//     let {results} = await (await fetch('https://randomuser.me/api?results=10')).json()

//     // let {results} = await data.json() // object destructuring 
//     result = results
//     console.log(results);
//     writeData()
// }

// fetchData()

// let tbody = document.querySelector('tbody')

// function writeData() {
//     result.forEach(item =>{
//         tbody.innerHTML += `
//                 <tr>
//                     <td>${item.id.value}</td>
//                     <td>${item.name.first}</td>
//                     <td>${item.name.last} </td>
//                     <td>${item.location.city}</td>
//                     <td><img src="${item.picture.large}"></td>
//                     <td>${item.dob.age}</td>
//                     <td>${item.dob.date}</td>
//             </tr>
        
//                 `
//     })
// }

const books = [  {    title: "The Great Gatsby",    author: "F. Scott Fitzgerald",    year: 1925,    genre: "Literary Fiction",    pages: 180,    publisher: "Charles Scribner's Sons",    isbn: "978-0743273565"  },
                {    title: "To Kill a Mockingbird",    author: "Harper Lee",    year: 1960,    genre: "Southern Gothic",    pages: 281,    publisher: "J. B. Lippincott & Co.",    isbn: "978-0446310789"  },  
                {    title: "1984",    author: "George Orwell",    year: 1949,    genre: "Dystopian Fiction",    pages: 328,    publisher: "Secker & Warburg",    isbn: "978-0451524935"  },  
                {    title: "Pride and Prejudice",    author: "Jane Austen",    year: 1813,    genre: "Romance",    pages: 279,    publisher: "Thomas Egerton",    isbn: "978-0141439513"  },  
                {    title: "The Catcher in the Rye",    author: "J.D. Salinger",    year: 1951,    genre: "Coming-of-age Fiction",    pages: 214,    publisher: "Little, Brown and Company",    isbn: "978-0316769488"  }
            ]; 


localStorage.setItem('books', JSON.stringify(books))

let tbody = document.querySelector('tbody')
function displayData(books){
    books.map((item) =>{
    tbody.innerHTML += `
                     <tr>
                         <td>${item.title}</td>
                         <td>${item.author}</td>
                         <td>${item.year}</td>
                         <td>${item.genre}</td>
                         <td>${item.pages}</td>
                         <td>${item.publisher}</td>
                        <td>${item.isbn}</td>
               </tr>
            
                   `
}
)}

displayData(books)

let input = document.querySelector('input')
let button = document.querySelector('button')


const search = searchBook =>{
    return books.filter(item => item.title.includes(searchBook))
}


button.addEventListener('click', ()=>{
    tbody.innerHTML = ' '
    displayData(search(input.value))
})



localStorage.setItem('name', 'Asanda')