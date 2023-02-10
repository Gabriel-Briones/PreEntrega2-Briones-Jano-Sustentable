import { Link } from "react-router-dom"
export const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link navbar-brand brand-logo" to={'/'}>
                    <img src='./favicon.png' alt="Logo Jano Sustentable" width="40" height="40" class="d-inline-block" /> Jano Sustentable
                    </Link>
            </li>
        </>
    );
};
