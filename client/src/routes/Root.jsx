import { Outlet, Link } from "react-router-dom"
import "../styles/Root.css"
export default function Root() {
    console.log('Root is loaded')
    return( 
    <>
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="test">Link1</Link>
                </li>
                <li>
                    <Link to="">Link2</Link>
                </li>
                <li>
                    <Link to="">Link3</Link>
                </li>
            </ul>
        </nav>
    </header>
    
    <div>Root</div>
    <Outlet />
    </>)
}