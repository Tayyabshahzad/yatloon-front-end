import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";

export default function TeacherDashboardLayout(props)
{
    return(
        <div className="flex">
            <Sidebar>
                <Menu
                    menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                        backgroundColor: '#13395e',
                        color: '#b6c8d9',
                        },
                    },
                    }}

                    className="bg-zinc-900 text-white min-h-[100vh] h-full"
                >
                    <MenuItem  component={<Link className="hover:bg-mud" to="/teacher/dashboard" />}> Dashboard</MenuItem>
 
                    <MenuItem className="bg-zinc-900 text-white" component={<Link to="/teacher/requests" />}>My Requests</MenuItem>
                </Menu>
                </Sidebar>

            <Outlet />
        </div>
    )
}