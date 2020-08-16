import React from 'react';

export default function BooksForm() {
    const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter a new book" />
                <select>
                    {
                      bookCategories.map((category, id) => 
                        <option key={id} value = {category}>{category}</option>
                      )
                    }
                </select>
                <button>Save Book</button>
            </form>
        </div>
    );
}