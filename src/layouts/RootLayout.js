import { Outlet } from "react-router-dom"

const RootLayout = ({NavLink}) => {
    return (
    <>
        <header>
            <nav className="flex" id="nav_bar">
                <h1>Varun</h1>
                <ul className="link_container">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/help'>Help</NavLink>
                <NavLink to='/career'>Career</NavLink>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
    )
}

export default RootLayout