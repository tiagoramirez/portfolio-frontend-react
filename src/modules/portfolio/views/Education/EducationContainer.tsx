import { startDeletingEducation, useAppDispatch } from '../../../../store';
import { Education } from '../../models';
import { DeleteButton, EditButton } from '../components';

const educationTypeToString = (type: number) => {
    switch (type) {
        case 0:
            return 'High School';
        case 1:
            return 'College';
        case 2:
            return 'Graduate School';
        case 3:
            return 'Tertiary Degree';
    }
};

const formatedStartDate = (start: string): string => {
    const startDate = new Date(start);
    return `${startDate.getUTCMonth() + 1}/${startDate.getUTCFullYear()}`;
};

const formatedEndDate = (end: string | undefined, isActual: boolean): string => {
    if (!isActual && end) {
        const endDate = new Date(end);
        return `${endDate.getUTCMonth() + 1}/${endDate.getUTCFullYear()}`;
    }
    return 'Actualidad';
};

interface Props {
    education: Education;
    isEnglishMode: boolean;
    showActionButtons?: boolean;
}

export const EducationContainer = ({ education, isEnglishMode, showActionButtons }: Props) => {
    const dispatch = useAppDispatch();

    const onDelete = () => {
        dispatch(startDeletingEducation(education.id as string));
    };

    return (
        <div className='relative text-secondary py-2'>
            {
                showActionButtons
                &&
                <>
                    <EditButton to={education.id as string} />
                    <DeleteButton onDelete={onDelete} />
                </>
            }
            <h1 className='text-base sm:text-lg'>{education.titleName}</h1>
            <h2 className='mb-1 italic text-sm sm:text-base font-light text-right'>{education.institute}</h2>
            <p className='mb-1 text-sm sm:text-base text-justify font-light'>
                {
                    education.hasEnglishDesc && isEnglishMode
                        ?
                        education.englishDesc
                        :
                        education.nativeDesc
                }
            </p>
            <div className='flex flex-row justify-between'>
                <h3 className='text-sm sm:text-base text-accent font-semibold'>{formatedStartDate(education.start)} - {formatedEndDate(education.end, education.isActual)}</h3>
                <h3 className='text-sm sm:text-base text-accent font-semibold text-center'>{educationTypeToString(education.type)}</h3>
            </div>
        </div>
    );
};

