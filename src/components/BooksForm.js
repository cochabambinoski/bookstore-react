/* Define a constant with a collection containing the book categories:
["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]. */


import React from 'react';

export default function BooksForm() {
    const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return (
        <div>
            <form>
                <input type="text" />
                <select>
                    <option value="volvo">{ bookCategories[0] }</option>
                    <option value="volvo">{ bookCategories[1] }</option>
                    <option value="volvo">{ bookCategories[2] }</option>
                    <option value="volvo">{ bookCategories[3] }</option>
                    <option value="volvo">{ bookCategories[4] }</option>
                    <option value="volvo">{ bookCategories[5] }</option>
                    <option value="volvo">{ bookCategories[6] }</option>
                </select>
            </form>
        </div>
    );
}