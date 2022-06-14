import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';

const SignRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" element={<Login />} />
        </BrowserRouter> 
    );
};
export default SignRoutes;
