import { ParagraphWithBreakLine } from '../../components';
import { formatedEndDate, formatedStartDate } from '../../helpers';
import { Experience } from '../../models';

export const ExperienceComponent = ({ experience, isEnglishMode }: { experience: Experience, isEnglishMode: boolean }): JSX.Element => {
    function experienceTypeToString() {
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
    }

    return (
        <div className='text-secondary mb-2'>
            <h2 className='mt-2 underline'>{experience.position}</h2>
            <h3 className='mb-1'>{experience.company} - {experienceTypeToString()}</h3>
            {
                experience.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='mb-3 text-justify' str={experience.englishDesc as string} />
                    :
                    <ParagraphWithBreakLine className='mb-3 text-justify' str={experience.nativeDesc as string} />
            }
            <h2>{formatedStartDate(experience.start)} - {formatedEndDate(experience.end, experience.isActual)}</h2>
        </div>
    );
};