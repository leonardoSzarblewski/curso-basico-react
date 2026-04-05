import './AppLayout.css'

export function AppLayout({ children }: React.PropsWithChildren) {
    return(
        <div className='layout-base'>
            <div className='layout-header'>
                <a>Página inicial</a>
                <a>Sobre</a>
            </div>

            { children }
        </div>
    )
}