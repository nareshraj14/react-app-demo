import React from 'react'

import Book from './Book'

const booksData = [
    {
        id: 1,
        bookName: "Hello",
    },
    {
        id: 2,
        bookName: "World",
    },
    {
        id: 3,
        bookName: "Again",
    },
]

const Books = () => {
    return (
        <div>
            {booksData.map((item) => (
                <Book key={item.id} bookName={item.bookName} />
            ))}
        </div>
    )
}

export default Books
