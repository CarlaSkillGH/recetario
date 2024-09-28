import Header from "../../components/Header"

const Register = () => {
    return (
        <section>
            <Header />
        <form>
            <section>
                <label htmlFor="">Usuario</label>
                <input type="text" />
            </section>
            <section>
                <label htmlFor="">Contraseña</label>
                <input type="password" />
            </section>
            <section>
                <label htmlFor="">Correo</label>
                <input type="email" />
            </section>
            <button type="button">Registrar</button>

        </form>
        </section>
    )
}
 export default Register