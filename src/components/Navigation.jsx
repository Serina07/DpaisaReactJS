const Navigation = () => {

    return (
         <nav className="container">
                <div
                    className="logo">
                    <img src="/images/Dpaisa 1.png" alt="logo" />
                </div>
                <ul>
                    <li href="#"> Home</li>
                    <li href="#"> Services</li>
                    <li href="#"> Privacy Policy</li>
                    <li href="#"> FAQs</li>
                    <li href="#"> Support </li>
                    <li href="#"> About Us </li>
                </ul>
                <div className = "b">  
                    <button className = "b1">
                        Login
                    </button>
                    <button className = "b2">
                        Sign Up
                    </button>
                </div>

            </nav>
    )
}

export default Navigation