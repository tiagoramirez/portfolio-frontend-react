import { startDeletingExperience, useAppDispatch } from '../../../../store';
import { Experience } from '../../models';
import { DeleteButton, EditButton } from '../components';

const experienceTypeToString = (type: number) => {
    switch (type) {
        case 0:
            return 'FullTime';
        case 1:
            return 'PartTime';
        case 2:
            return 'Freelance';
        case 3:
            return 'Volunteer';
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
    experience: Experience;
    isEnglishMode: boolean;
    showActionButtons?: boolean;
}

export const ExperienceContainer = ({ experience, isEnglishMode, showActionButtons }: Props) => {
    const dispatch = useAppDispatch();

    const onDelete = () => {
        dispatch(startDeletingExperience(experience.id as string));
    };

    return (
        <div className='relative text-secondary py-2'>
            {
                showActionButtons
                &&
                <>
                    <EditButton to={experience.id as string} />
                    <DeleteButton onDelete={onDelete} />
                </>
            }
            <h1 className='text-base sm:text-lg'>{experience.position}</h1>
            <h2 className='mb-1 italic text-sm sm:text-base font-light text-right'>{experience.company} - {experienceTypeToString(experience.type)}</h2>
            <p className='mb-1 text-sm sm:text-base text-justify font-light'>
                {
                    experience.hasEnglishDesc && isEnglishMode
                        ?
                        experience.englishDesc
                        :
                        experience.nativeDesc
                }
            </p>
            <h3 className='text-sm sm:text-base text-accent font-semibold text-left'>{formatedStartDate(experience.start)} - {formatedEndDate(experience.end, experience.isActual)}</h3>
        </div>
    );
};
