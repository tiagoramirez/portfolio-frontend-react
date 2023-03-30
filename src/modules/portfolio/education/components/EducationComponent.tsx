import { ParagraphWithBreakLine } from '../../components';
import { formatedEndDate, formatedStartDate } from '../../helpers';
import { Education } from '../../models';

export const EducationComponent = ({ education, isEnglishMode }: { education: Education, isEnglishMode: boolean }): JSX.Element => {
    function educationTypeToString() {
        switch (education.type) {
            case 0:
                return 'High School';
            case 1:
                return 'College';
            case 2:
                return 'Graduate School';
            case 3:
                return 'Tertiary Degree';
        }
    }

    return (
        <div className='text-secondary mb-1'>
            <h2>{education.titleName}</h2>
            <h3 className='mb-1'>{education.institute}</h3>
            {
                education.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='mb-3 text-justify' str={education.englishDesc as string} />
                    :
                    <ParagraphWithBreakLine className='mb-3 text-justify' str={education.nativeDesc as string} />
            }
            <div className='flex flex-row justify-between'>
                <h2>{formatedStartDate(education.start)} - {formatedEndDate(education.end, education.isActual)}</h2>
                <h2>{educationTypeToString()}</h2>
            </div>
        </div>
    );
};