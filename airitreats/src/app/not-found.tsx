// imports
import Link from "next/link";

export default function Notfound() {
    return(
        <div>
            <h2> Page not found</h2>
            <p>could not find the page you where looking for</p>
            <Link href={"/"}> 
                Go back home
            </Link>
        </div>
        
    )
}