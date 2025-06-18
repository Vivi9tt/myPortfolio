import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className="navbar bg-secondary-500 ">
            <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center px-4">
                <div className="navbar-start">
                <a href="/" className="text-[24px] font-roboto font-bold name-hover-group">
                    Vivia<span className="n-letter">n</span> Che<span className="n-letter">n</span>
                </a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden lg:flex font-roboto font-bold text-[20px]">
                    {["Resume", "Contact"].map((label) => (
                        <li key={label}>
                            <Link to={`/${label}`} className={`hover:bg-transparent hover:shadow-none hover:text-primary-500`}>{label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-transparent hover:shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-secondary-500 rounded-box z- mt-3 w-25 p-2 shadow">
                        <li ><Link to={`/resume`}>Resume</Link></li>
                        <li><Link to={`/contact`}>Contact</Link></li>
                    </ul>
                </div>             
            </div>
            </div>       
        </div>
    );
}

export default NavBar;