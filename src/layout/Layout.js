// files 
import { Header } from '../components'

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
