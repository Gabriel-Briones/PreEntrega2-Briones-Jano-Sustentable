export const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Conocenos
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Sobre Nosotros</a></li>
                <li><a className="dropdown-item" href="#">Consejos Sustentables</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Se parte de Jano</a></li>
            </ul>
        </li>
    )
}