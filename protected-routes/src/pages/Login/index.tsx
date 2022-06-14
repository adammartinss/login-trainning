import { useAuth } from '../../context/auth';
import { useContext } from 'react';

const Login: React.FC = () => {
    const { signed, Login } = useAuth();

    console.log(signed);
    async function handleLogin() {
        await Login({
            email: 'adammartinssantos@hotmail.com',
            password: '123456',
        });
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;
