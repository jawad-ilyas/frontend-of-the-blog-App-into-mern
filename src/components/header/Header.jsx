import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* === Logo Section === */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-300 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow">
                        B
                    </div>
                    <h1 className="text-2xl font-serif text-rose-900 tracking-wide">
                        BloomBlog
                    </h1>
                </div>

                {/* === Navigation Links (Desktop) === */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-rose-800/80">
                    <a href="#" className="hover:text-rose-600 transition">Home</a>
                    <a href="#" className="hover:text-rose-600 transition">Categories</a>
                    <a href="#" className="hover:text-rose-600 transition">Writers</a>
                    <a href="#" className="hover:text-rose-600 transition">About</a>
                    <a href="#" className="hover:text-rose-600 transition">Contact</a>
                </nav>

                {/* === Right Side Actions === */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="signin" className="px-4 py-1.5 rounded-lg border border-rose-300/60 bg-white/50 text-rose-800 font-medium hover:bg-white hover:shadow transition">
                        Sign In
                    </Link>
                    <Link to="signup" className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white font-semibold shadow-md hover:opacity-90 transition">
                        Get Started
                    </Link>
                </div>

                {/* === Mobile Menu Icon === */}
                <button className="md:hidden text-rose-800/80 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.6"
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}
export default Header;