import HeaderMenu from "../components/menu";
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";
import { Avatar } from "flowbite-react/lib/cjs/components/Avatar";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

export default function Header(props)
{
    const isAuthenticated = useIsAuthenticated();
    const currentPath = useLocation();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const handleSignOut = (e) => {
      signOut();
      navigate('/')
    }

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
          <div className="flex gap-4">
            <div>
              <Button className="bg-royal">Free Trial</Button>
            </div>
            { isAuthenticated() ? 
                <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Aslam Khan</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
              </Dropdown> :  <Button className="bg-teal-800"><Link to={'/register'}>Register</Link></Button>
          }
          </div>
        </Navbar>
        
      );
}