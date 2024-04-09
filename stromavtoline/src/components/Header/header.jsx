
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
                           <NavLink to="/stromavtoline" className={({ isActive, isPending }) =>
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
                            <NavLink to={"/stromavtoline/aboutcompany"}>
                                О компании
                            </NavLink>
                         </li>
                        <li>
                            <NavLink to={"/stromavtoline/catalog"}>
                                каталог товаров
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to={"/stromavtoline/contacts"}>
                                контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
      </>  
    )
}