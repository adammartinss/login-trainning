import { Routes, Route, useRoutes } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/HomePage';
import { HomeLayout } from './components/HomeLayout';
import { ProtectedLayout } from './components/ProtectedLayout';
export default function App() {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout />}>
                {/* <Route path="profile" element={<ProfilePage />} /> */}
                {/* <Route path="settings" element={<SettingsPage />} /> */}
            </Route>
        </Routes>
    );
}
