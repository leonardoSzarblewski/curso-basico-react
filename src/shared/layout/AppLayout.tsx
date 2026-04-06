import { NavLink } from 'react-router'
import './AppLayout.css'

export function AppLayout({ children }: React.PropsWithChildren) {
    return(
        <div className='layout-base'>
            <div className='layout-header'>
                <NavLink to='/'>
                    Página inicial
                </NavLink>
                <NavLink to='/sobre'>
                    Sobre
                </NavLink>
            </div>

            { children }
        </div>
    )
}