import { useAppDispatch } from '../../../../store';
import { startDeletingExperience } from '../../../../store/portfolio';
import { Experience } from '../../models';
import { DeleteButton, EditButton } from '../components';
import ParagraphWithBreakLine from '../components/ParagraphWithBreakLine';

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
            <h2 className='font-semibold'>{experience.position}</h2>
            <h3 className='mb-1 italic text-sm font-light text-right'>{experience.company} - {experienceTypeToString(experience.type)}</h3>
            {
                experience.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='mb-3 text-sm sm:text-base text-justify font-light' str={experience.englishDesc as string} />
                    :
                    <ParagraphWithBreakLine className='mb-3 text-sm sm:text-base text-justify font-light' str={experience.nativeDesc as string} />
            }
            <h4 className='font-semibold'>{formatedStartDate(experience.start)} - {formatedEndDate(experience.end, experience.isActual)}</h4>
        </div>
    );
};
