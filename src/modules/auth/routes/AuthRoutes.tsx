import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { startGoogleSignIn, StatusType } from '../../../store/auth';
import { LoginPage, RegisterPage } from '../pages';


export const AuthRoutes = () => {

    const dispatch = useAppDispatch();

    const signInWithGoogle = () => {
        dispatch(startGoogleSignIn());
    };

    const { status } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (status == StatusType.AUTHENTICATED && !import.meta.env.DEV) {
            navigate('/');
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
