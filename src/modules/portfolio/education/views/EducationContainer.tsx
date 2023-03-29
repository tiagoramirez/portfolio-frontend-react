import { useAppDispatch } from '../../../../store';
import { startDeletingEducation } from '../../../../store/portfolio';
import { DeleteButton, EditButton, ParagraphWithBreakLine } from '../../components';
import { Education } from '../../models';

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
            <h2 className='font-semibold'>{education.titleName}</h2>
            <h3 className='mb-1 italic text-sm font-light text-right'>{education.institute}</h3>
            {
                education.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='mb-3 text-sm sm:text-base text-justify font-light' str={education.englishDesc as string} />
                    :
                    <ParagraphWithBreakLine className='mb-3 text-sm sm:text-base text-justify font-light' str={education.nativeDesc as string} />
            }
            <div className='flex flex-row justify-between'>
                <h4 className='font-semibold'>{formatedStartDate(education.start)} - {formatedEndDate(education.end, education.isActual)}</h4>
                <h4 className='font-semibold'>{educationTypeToString(education.type)}</h4>
            </div>
        </div>
    );
};

