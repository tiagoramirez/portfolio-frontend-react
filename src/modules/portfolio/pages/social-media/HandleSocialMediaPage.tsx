import { useState } from 'react';
import { getSocialMedia, portfolioApi } from '../../../../api';
import { useAppDispatch } from '../../../../store';
import { startGettingSocialMediasInfo } from '../../../../store/portfolio';
import { UserSocialMedia } from '../../models';
import { SocialMedia } from '../../models/SocialMedia';
import { useHandleSocialMedia } from './hook';

export const HandleSocialMediaPage = () => {
    const { onSubmit, loading, register, socialMedias } = useHandleSocialMedia();







    return (
        <div className='main-container'>
            <form onSubmit={onSubmit}>
                <select className='input-select'
                    {...register('socialMediaId', {
                        required: true
                    })}
                >
                    {socialMedias.map(sm => <option key={sm.id} value={sm.id}>{sm.name}</option>)}
                </select>
                <input type='text' placeholder='Link:  https://' maxLength={255} className='input-text col-span-2'
                    {...register('url', {
                        required: true,
                        maxLength: 255,
                        pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
                    })}
                />
                {
                    loading
                        ?
                        <span className='loader'></span>
                        :
                        <button className='btn w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
                }
            </form>
        </div>
    );


};

// <div className='main-container'>
//     <h1 className='mb-2 text-center text-lg font-semibold'>PROYECTO</h1>
//     <form onSubmit={handleSubmit(onSubmitProject)} className='grid grid-cols-4 gap-4'>
//         <input type='text' placeholder='Nombre del proyecto' maxLength={50} className='input-text col-span-2'
//             {...register('name', {
//                 required: true,
//                 maxLength: 50
//             })}
//         />
//
//         <textarea placeholder='Descripcion...' maxLength={255} className='input-textarea col-span-4'
//             {...register('nativeDesc', {
//                 required: true,
//                 maxLength: 255
//             })}
//         />
//         <div className='flex justify-center items-center col-span-4'>
//             <label className='mr-2'>Ingles</label>
//             <input type='checkbox' className='input-check'
//                 {...register('hasEnglishDesc')}
//             />
//         </div>
//         {hasEnglishDesc &&
//             <textarea placeholder='English description...' maxLength={255} className='input-textarea col-span-4'
//                 {...register('englishDesc', {
//                     required: true,
//                     maxLength: 255
//                 })} />
//         }
//         {
//             loading
//                 ?
//                 <span className='loader col-span-4'></span>
//                 :
//                 <button className='btn col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
//         }
//     </form>
// </div>