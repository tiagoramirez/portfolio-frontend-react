import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Experience } from '../../models';
import { SectionContainer } from '../components';

export const ExperienceView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <SectionContainer title='Experiencia'>
            {activeUser.experiences.map(exp => <ExperienceContainer key={exp.id} isEnglishMode={isEnglishMode} experience={exp} />)}
        </SectionContainer>
    );
};

interface Props {
    experience: Experience;
    isEnglishMode: boolean;
}

const ExperienceContainer = ({ experience, isEnglishMode }: Props) => {
    const experienceTypeToString = () => {
        switch (experience.type) {
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

    const formatedStartDate = (): string => {
        const startDate = new Date(experience.start);
        return `${startDate.getUTCMonth()}/${startDate.getUTCFullYear()}`;
    };

    const formatedEndDate = (): string => {
        if (!experience.isActual && experience.end) {
            const endDate = new Date(experience.end);
            return `${endDate.getUTCMonth()}/${endDate.getUTCFullYear()}`;
        }
        return 'Actualidad';
    };

    return (
        <div className='text-secondary'>
            <h1 className='text-base sm:text-lg'>{experience.position}</h1>
            <h2 className='mb-1 italic text-sm sm:text-base font-light text-right'>{experience.company} - {experienceTypeToString()}</h2>
            <p className='mb-1 text-sm sm:text-base text-justify font-light'>
                {
                    experience.hasEnglishDesc && isEnglishMode
                        ?
                        experience.englishDesc
                        :
                        experience.nativeDesc
                }
            </p>
            <h3 className='text-sm sm:text-base text-accent font-semibold text-left'>{formatedStartDate()} - {formatedEndDate()}</h3>
        </div>
    );
};
