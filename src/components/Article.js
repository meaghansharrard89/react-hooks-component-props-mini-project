import React from "react";

function Article( { title, date = "January 1, 1970", preview, minutes } ) {

    //Determine the number of coffee cup or bento boxes based on the minutes, define the helper function within the component

    const getEmojis = () => {
        if (minutes < 30) {
    //calculates number of coffee cups by rounding up mins and dividing by 5
            const numCoffeeCups = Math.ceil(minutes / 5);
    //repeat method: repeats a string a num of times specified as string.repeat(count)
            return "☕️". repeat(numCoffeeCups);
        } else {
            const numBentoBoxes = Math.ceil(minutes / 10);
            return "🍱". repeat(numBentoBoxes);
        }
    }

    //add the getEmojis function to what's returned concatenated with the minutes prop
    return(
        <>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>
                {getEmojis()} {minutes} min read
            </p>
            <p>{preview}</p>
        </article>
        </>
    )
}

export default Article;