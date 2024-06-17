import React from 'react'
import results from '../../data/result.json'

function Print() {
    return (
        <div>
            {results.messages.map(o => (
                <div>
                    {o.text && !Array.isArray(o.text) ? (
                        <p>Text: {o.text}</p>
                    ) : (
                        <p></p> // Optional: Indicate that the text is an array
                    )}
                </div>
            ))}
        </div>
    )
}

export default Print