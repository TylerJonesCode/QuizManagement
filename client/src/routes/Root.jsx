import { useEffect } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import "../styles/Root.css"
export default function Root() {
    
    const [cookies] = useCookies(['user'])
    const navigate = useNavigate()

    useEffect(() => {
        if (cookies['user'] === undefined && window.location.pathname != "/login" && window.location.pathname != "/register"){
            console.log(navigate("/login"))
        }

    }, [])
    
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