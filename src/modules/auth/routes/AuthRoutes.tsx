import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { RootState, startGoogleSignIn, StatusType, useAppDispatch } from '../../../store';
import { LoginPage, RegisterPage } from '../pages';


export const AuthRoutes = () => {

    const dispatch = useAppDispatch();

    const signInWithGoogle = () => {
        dispatch(startGoogleSignIn());
    };

    const { status } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (status == StatusType.AUTHENTICATED) {
            navigate('/portfolio-frontend-react');
        }
    }, [navigate, status]);

    return (
        <Routes>
            <Route path='login' element={<LoginPage signInWithGoogle={signInWithGoogle} />} />
            <Route path='register' element={<RegisterPage signInWithGoogle={signInWithGoogle} />} />
            <Route path='*' element={<Navigate to='login' />} />
        </Routes>
    );
};
