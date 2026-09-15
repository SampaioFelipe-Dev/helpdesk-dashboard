function Sidebar({ perfil, setPerfil }) {
    return (
        <aside className="sidebar">
            <h2>Barra Lateral</h2>
            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <button onClick={() => setPerfil('admin')}>Admin</button>
                    <button onClick={() => setPerfil('user')}>User</button>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar