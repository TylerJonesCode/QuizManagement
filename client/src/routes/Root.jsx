import { useEffect } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import "../styles/Root.css"
export default function Root() {
    
    const [cookies] = useCookies(['user'])
    const navigate = useNavigate()

    useEffect(() => {
        if (cookies['user'] === undefined && window.location.pathname != "/login" && window.location.pathname != "/register"){
            //navigate("/login")
        }
        else{
            //get classes
        }

    }, [])
    
    return( 
    <>
    <header>
        <aside>
            <ul>
                <li>
                    <Link to="/test">Link1</Link>
                </li>
                <li>
                    <Link to="">Link2</Link>
                </li>
                <li>
                    <Link to="">Link3</Link>
                </li>
            </ul>
        </aside>
    </header>
    <Outlet />
    </>)
}