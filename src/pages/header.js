import HeaderMenu from "../components/menu";
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";
import { Avatar } from "flowbite-react/lib/cjs/components/Avatar";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useEffect, useState } from "react";
import axios from "axios"; 
import config from '../constants';
export default function Header(props)
{
    const isAuthenticated = useIsAuthenticated();
    const currentPath = useLocation();
    const signOut = useSignOut();
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [courseScience, setScienceCourses] = useState([]);

    const handleSignOut = (e) => {
      signOut();
      navigate('/')
    } 

    useEffect(() => { 
      axios.get(`${config.REACT_APP_API_BASE_URL}courses`)
      .then((res) => { 
          setCourses(res.data)
      }).catch((err) => {
          console.log(err)
      })


      axios.get(`${config.REACT_APP_API_BASE_URL}courses/science`)
      .then((res) => { 
        setScienceCourses(res.data)
      }).catch((err) => {
          console.log(err)
      })

    }, [])

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
            <Navbar.Link style={{fontSize: "20px"}} href="/contact" active={currentPath.pathname === '/contact' ? true : false}>Contact</Navbar.Link> 
            <Dropdown
              inline
              label={  <span className="text-gray-900 text-[20px]">Courses</span> }
            >
              {
                courses.map((course) => {
                  return (
                    <Dropdown.Item key={course.id} href={`/courses/${course.id}`}>{course.title}</Dropdown.Item>
                  )
                })
              }
            </Dropdown>
            <Dropdown inline  label={  <span className="text-gray-900 text-[20px]"> Science Courses </span> }
            >
              {
                courseScience.map((scienceCourse) => {
                  return (
                    <Dropdown.Item key={scienceCourse.id} href={`/courses/${scienceCourse.id}`}>{scienceCourse.title}</Dropdown.Item>
                  )
                })
              }
            </Dropdown>
           
           
          </Navbar.Collapse>
          <div className="flex gap-4">
          <div>
              
            </div>
            <div>
              <Button className="bg-royal"><Link to={'/register'}>Free Trial</Link></Button>
            </div>
            { isAuthenticated() ? 
                <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={`data:image/jpeg;base64,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`} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Aslam Khan</span>
                </Dropdown.Header>
                <Dropdown.Item href={'/student/dashboard'}>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
              </Dropdown> :  <Button className="bg-teal-800"><Link to={'/register'}>Register</Link></Button>
          }
          </div>
        </Navbar>
        
      );
}