import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { removeErrorMessage, RootState } from '../../../store';
export const ErrorPage = () => {
    const dispatch = useDispatch();

    const { errorMessage } = useSelector((state: RootState) => state.portfolio);

    Swal.fire('Portfolio', errorMessage, 'error');

    const onReload = () => {
        dispatch(removeErrorMessage());
    };

    return (
        <div className='grid grid-rows-2 gap-2'>
            <p>Recarga la pagina o intentalo mas tarde</p>
            <button onClick={onReload} className='w-auto bg-btnPrimary'>Volver</button>
        </div>
    );
};
