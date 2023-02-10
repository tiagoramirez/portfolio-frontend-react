import { Education } from '../../models';
import { DeleteButton, EditButton } from '../components';

const educationTypeToString = (type: number) => {
    switch (type) {
        case 0:
            return 'HighSchool';
        case 1:
            return 'College';
        case 2:
            return 'GraduateSchool';
        case 3:
            return 'TertiaryDegree';

    }
};

const formatedStartDate = (start: Date): string => {
    const startDate = new Date(start);
    return `${startDate.getUTCMonth()}/${startDate.getUTCFullYear()}`;
};

const formatedEndDate = (end: Date | undefined, isActual: boolean): string => {
    if (!isActual && end) {
        const endDate = new Date(end);
        return `${endDate.getUTCMonth()}/${endDate.getUTCFullYear()}`;
    }
    return 'Actualidad';
};

interface Props {
    education: Education;
    isEnglishMode: boolean;
    isEdit?: boolean;
}

export const EducationContainer = ({ education, isEnglishMode, isEdit }: Props) => {
    return (
        <div className='relative text-secondary'>
            {isEdit && <EditButton to={education.id as string} />}
            {isEdit && <DeleteButton />}
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

