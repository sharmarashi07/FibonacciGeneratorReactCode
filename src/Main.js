/**
 Challenge: Build the main section!

 Skip 2 aspects of the design for now:
 1. The colored bullets in the list
 2. The larger React logo on the side

 Those will be separate challenges coming up.
 */

import React from "react"


export default function Main() {
    return <main>
        <h1>Fibonacci Sequence Generator</h1>
        <h2>About the Fibonacci Sequence</h2>
        <p>The first mention of the Fibonacci Sequence was seen in Indian mathematics and Sanskrit poetry. It was later
            rediscovered by Leonardo of Pisa (AKA Fibonacci) and was published in <i>Liber Abaci</i> (1202). The
            Fibonacci Sequence is a sequence where each number is the sum of the two preceding ones. It's seen often in
            mathematics and in nature, and is also known as the Golden Ratio.</p>
        <p>Type an integer into the text entry box to choose the length of your Fibonacci Sequence. For example, typing
            "10" in the text entry box and clicking "Generate" will generate the first 10 numbers of the Fibonacci
            Sequence.</p>
    </main>
}