import { Experience } from '../../models';

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
    experience: Experience;
    isEnglishMode: boolean;
}

export const ExperienceContainer = ({ experience, isEnglishMode }: Props) => {
    return (
        <div className='text-secondary'>
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
