import Logo from "../assets/logo.png";


export default function Nav(){
    return (
        <nav className= "mt-5 mr-30 ml-30">
            <div className="container mx-auto flex justify-between items-center p-6">
            <img src={Logo} alt="Logo"/>

            <ul className="flex items-center gap-15 text-lg text-gray-500 font-[Open_Sans] mr-15">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Fixture</a></li>
                <li><a href="/contact">Team</a></li>
                <li><a href="/schedule">Schedule</a></li>
            </ul>
            
            </div>
        </nav>
    );
}