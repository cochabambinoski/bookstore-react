import React from 'react';

export default function BooksForm() {
    const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return (
        <div>
            <form>
                <input type="text" />
                <select>
                    {
                      bookCategories.map(category => 
                        <option>{category}</option>
                      )
                    }
                </select>
            </form>
        </div>
    );
}