import { Link } from "react-router-dom";

function LoginView() {
  return (
    <>
      <div className="font-bold text-gray-400 text-xl">Iniciar sesión</div>
      <Link className="font-light text-white" to="/auth/register">
        ¿No tienes una cuenta? Registrate
      </Link>
    </>
  );
}

export default LoginView;
