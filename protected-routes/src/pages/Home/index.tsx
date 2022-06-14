import { useAuth } from '../../context/auth';

const Home: React.FC = () => {
    const { signed, Logout } = useAuth()

    console.log(signed)
    async function handleLogout() {
        Logout()
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logou</button>
        </div>
    );
};
export default Home;
