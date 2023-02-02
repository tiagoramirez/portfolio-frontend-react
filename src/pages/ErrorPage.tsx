import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {

    Swal.fire('Portfolio', errorMessage, 'error');

    const navigate = useNavigate();

    const onReturn = () => {
        navigate('/');
    };

    return (
        <div className='grid grid-rows-2 gap-2'>
            <p>Recarga la pagina o intentalo mas tarde</p>
            <button onClick={onReturn} className='w-auto bg-btnPrimary'>Volver</button>
        </div>
    );
};
