import React, { useEffect, useImperativeHandle } from "react";

function CategoryDisplay(props, ref) {
    const categories = ["Fruits", "Books", "Movies/Films", "Games", "Sports", "Famous People", "Artists", "Animals", "Activities to Kill Time", "Coding Languages", "Places to Hang Out", "Dishes", "Musical Instruments", "Countries", "Cities"];
    const [category, setCategory] = React.useState("");

    function generateCategory() {
        setCategory(categories[Math.floor(Math.random() * categories.length)]);
        console.log(category);
    };

    React.useEffect(() => {
    
        window.addEventListener('load', generateCategory);

        return (() => {
            window.removeEventListener('load', generateCategory);
        })

    });

    React.useImperativeHandle(ref, () => ({
        generateCategory
    }));

    return (
        <div>
            <h1 className="category-heading">Category: {category}</h1>
        </div>
    );
}

export default React.forwardRef(CategoryDisplay);