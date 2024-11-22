import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";
import { Avatar } from "flowbite-react/lib/cjs/components/Avatar";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import axios from "axios";
import config from "../constants";

export default function Header(props) {
  const isAuthenticated = useIsAuthenticated();
  const currentPath = useLocation();
  const signOut = useSignOut();
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [courseScience, setScienceCourses] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isScienceCoursesOpen, setScienceCoursesOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API_BASE_URL}courses`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${config.REACT_APP_API_BASE_URL}courses/science`)
      .then((res) => {
        setScienceCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Navbar fluid rounded className="bg-gray-200">
      {/* Desktop Menu */}
      <div className="hidden md:flex w-full justify-between items-center">
        <Navbar.Brand href="#">
          <img src="/logo.png" className="mr-3 h-[100px] w-[100px]" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link
            style={{ fontSize: "20px" }}
            href="/"
            active={currentPath.pathname === "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link
            style={{ fontSize: "20px" }}
            href="/about-us"
            active={currentPath.pathname === "/about-us"}>
            About Us
          </Navbar.Link>
          <Navbar.Link
            style={{ fontSize: "20px" }}
            href="/contact"
            active={currentPath.pathname === "/contact"}>
            Contact
          </Navbar.Link>
          <Dropdown inline label={<span className="text-gray-900 text-[20px]">Courses</span>}>
            {courses.map((course) => (
              <Dropdown.Item key={course.id} href={`/courses/${course.id}`}>
                {course.title}
              </Dropdown.Item>
            ))}
          </Dropdown>
          <Dropdown inline label={<span className="text-gray-900 text-[20px]">Science Courses</span>}>
            {courseScience.map((scienceCourse) => (
              <Dropdown.Item key={scienceCourse.id} href={`/courses/${scienceCourse.id}`}>
                {scienceCourse.title}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </Navbar.Collapse>
        <div className="flex gap-4">
          <Button className="bg-royal">
            <Link to={"/register"}>Free Trial</Link>
          </Button>
          {isAuthenticated() ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="/path-to-avatar.jpg" rounded />
              }>
              <Dropdown.Item>
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={handleSignOut}>Sign Out</button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Button className="bg-royal">
              <Link to={"/login"}>Login</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex w-full justify-between items-center">
        <Navbar.Brand href="#">
          <img src="/logo.png" className="mr-3 h-[50px] w-[50px]" alt="Logo" />
        </Navbar.Brand>
        <button
          className="text-gray-700 text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`block p-2 rounded ${currentPath.pathname === "/" ? "bg-blue-500 text-white" : "text-gray-700"}`}
                onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`block p-2 rounded ${currentPath.pathname === "/about-us" ? "bg-blue-500 text-white" : "text-gray-700"}`}
                onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block p-2 rounded ${currentPath.pathname === "/contact" ? "bg-blue-500 text-white" : "text-gray-700"}`}
                onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <div>
                <button
                  className="w-full text-left p-2 rounded bg-gray-200"
                  onClick={() => setCoursesOpen(!isCoursesOpen)}>
                  Courses
                </button>
                {isCoursesOpen && (
                  <ul className="ml-4 space-y-2">
                    {courses.map((course) => (
                      <li key={course.id}>
                        <Link
                          to={`/courses/${course.id}`}
                          className="block text-gray-600"
                          onClick={() => setMobileMenuOpen(false)}>
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div>
                <button
                  className="w-full text-left p-2 rounded bg-gray-200"
                  onClick={() => setScienceCoursesOpen(!isScienceCoursesOpen)}>
                  Science Courses
                </button>
                {isScienceCoursesOpen && (
                  <ul className="ml-4 space-y-2">
                    {courseScience.map((scienceCourse) => (
                      <li key={scienceCourse.id}>
                        <Link
                          to={`/courses/${scienceCourse.id}`}
                          className="block text-gray-600"
                          onClick={() => setMobileMenuOpen(false)}>
                          {scienceCourse.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Button className="bg-royal w-full">
                <Link to={"/register"}>Free Trial</Link>
              </Button>
            </li>
            {isAuthenticated() ? (
              <li>
                <Button className="bg-gray-500 w-full" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </li>
            ) : (
              <li>
                <Button className="bg-royal w-full">
                  <Link to={"/login"}>Login</Link>
                </Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </Navbar>
  );
}
