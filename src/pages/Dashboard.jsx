import {Link, Outlet} from 'react-router-dom'
import Header from "../components/Header"
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div>
        <Header />
        <h1>Este es el Dashboard :) </h1>
        <section className="panel-control">
            <aside>
                <nav>
                    <Link to='vegetarian'>Recetas vegetarianas </Link>
                    <Link to='non-vegetarian'>Recetas no vegetarianas</Link>
                </nav>
            </aside>
           <div>
        <Outlet />
           </div>
        </section>
    </div>
  )
}

export default Dashboard