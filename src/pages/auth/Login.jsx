import Header from "../../components/Header"
import './Login.css'
import { useState } from "react"
import { users } from "../../data/dataUsers"
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [getUser, setUser] = useState('')
    const [getPassword, setPassword] = useState('')
    let redireccion = useNavigate()
    console.log(users[0])
    function login() {
        if (buscarUsuario()) {
            let timerInterval;
            Swal.fire({
                title: "¡Ventana de bienvenida!",
                icon: 'success',
                html: "¡Oh vaya! Serás redireccionado en <b></b> milliseconds.",
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    redireccion('/dashboard')
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        } else {
            Swal.fire({
                title: '¡Oh no!',
                text: 'Esas credenciales son incorrectas',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
    function buscarUsuario() {
        let auth = users.some((user) => getUser == user.email && getPassword == user.password)
        return auth
    }

    return (
        <section className="sectionLogin">
            <Header />
            <form>
                <section>
                    <label htmlFor="">Usuario</label>
                    {/* <input value ={getUser} onChange={(e)=> console.log(e)} type="text" />*/}
                    <input value={getUser} onChange={(e) => setUser(e.target.value)} type="text" />

                </section>
                <section>
                    <label htmlFor="">Contraseña</label>
                    <input value={getPassword} onChange={(e) => setPassword(e.target.value)} type="text" />
                </section>
                <button onClick={login} type="button">Iniciar sesión</button>
            </form>
        </section>
    )
}
export default Login