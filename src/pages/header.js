import HeaderMenu from "../components/menu";
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button";
import { useLocation } from "react-router-dom";

export default function Header(props)
{
    const currentPath = useLocation()
    return (
        <Navbar fluid rounded className="bg-gray-200">
            <div className="relative md:hidden">
                <HeaderMenu />
            </div>

          <Navbar.Brand href="#">
            <img src="/logo.png" className="mr-3 h-[100px] w-[100px]" alt="Flowbite React Logo" />
          </Navbar.Brand>
         
          <Navbar.Collapse >
            <Navbar.Link style={{fontSize: "20px"}} href="/" active={currentPath.pathname === '/' ? true : false}>
              Home
            </Navbar.Link>
            <Navbar.Link style={{fontSize: "20px"}} href="/about-us" active={currentPath.pathname === '/about-us' ? true : false}>About Us</Navbar.Link>
            <Navbar.Link style={{fontSize: "20px"}} href="#">Services</Navbar.Link>
            <Navbar.Link style={{fontSize: "20px"}} href="/login" active={currentPath.pathname === '/login' ? true : false}>Login</Navbar.Link>
            <Navbar.Link style={{fontSize: "20px"}} href="/contact" active={currentPath.pathname === '/contact' ? true : false}>Contact</Navbar.Link>
          </Navbar.Collapse>

          <div>
            <Button className="bg-royal">Free Trial</Button>
          </div>
        </Navbar>
        
      );
}