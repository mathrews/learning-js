import { Link, Outlet } from "react-router-dom"

const PageLayout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contacts</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default PageLayout