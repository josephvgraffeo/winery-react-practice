import { useEffect, useState } from "react"
import ListingCard from "./ListingCard"

export default function Listing() {
    const [wines, setWines] = useState();
    const [type, setType] = useState("whites");

    useEffect (() => {
        fetch(`https://api.sampleapis.com/wines/${type}`)
            .then( res => res.json() )
            .then( setWines )
            .catch( err => console.error(err) )
    },[type])

    return (
        <>
        <div id="top-header">
            <header>
                <h1>Boca Code Winery</h1>
            </header>

            <nav>
                <button onClick={ () => setType("whites")}>White</button>
                <button onClick={ () => setType("reds")}>Red</button>
            </nav>
        </div>    

            <div>
                {!wines
                ? (<h2>Welcome to the site, choose above.</h2>)
                : (<section>
                    {wines.map( wine => (
                        <ListingCard key={wine.id} wine={wine} />
                    ))}
                </section>)
                };
            </div>
        </>
    )
}