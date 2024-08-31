import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="border-b pb-4">
                <nav className="flex items-center justify-between">
                    <h1 className="font-bold text-indigo-600">My Blog</h1>
                    <div>
                        <Link 
                            to="/"
                            className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            to="/create"
                            className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white ml-4"
                        >
                            New Post
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="py-8 px-2">
                <Outlet/>
            </main>
        </>
    ) 
}
export default Layout;