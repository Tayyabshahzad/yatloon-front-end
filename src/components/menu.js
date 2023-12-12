import { Link } from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'

export default function HeaderMenu(props)
{
    return(
        <Menu>
            <Link to={'#'}> Hello </Link>
        </Menu>
    )
}