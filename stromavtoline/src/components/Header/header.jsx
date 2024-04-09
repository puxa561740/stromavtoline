
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
    
    return (<>
        <header id='header'>
                <div id="logo">
                    <div></div>
                </div>
                <nav id="headerList">
                    <ul>
                        <li>
                           <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                                главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/aboutcompany"}>
                                О компании
                            </NavLink>
                         </li>
                        <li>
                            <NavLink to={"/catalog"}>
                                каталог товаров
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to={"/contacts"}>
                                контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
      </>  
    )
}