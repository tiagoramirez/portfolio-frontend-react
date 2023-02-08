import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Education } from '../../models';
import { AddBUtton, EditButton, SectionContainer } from '../components';

export const EducationView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <SectionContainer title='Educacion'>
            <AddBUtton />
            <>
                {activeUser.educations.map(educ => <EducationContainer key={educ.id} isEnglishMode={isEnglishMode} education={educ} />)}
            </>
        </SectionContainer>
    );
};

interface Props {
    education: Education;
    isEnglishMode: boolean;
}

const EducationContainer = ({ education, isEnglishMode }: Props) => {
    const educationTypeToString = () => {
        switch (education.type) {
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

    const formatedStartDate = (): string => {
        const startDate = new Date(education.start);
        return `${startDate.getUTCMonth()}/${startDate.getUTCFullYear()}`;
    };

    const formatedEndDate = (): string => {
        if (!education.isActual && education.end) {
            const endDate = new Date(education.end);
            return `${endDate.getUTCMonth()}/${endDate.getUTCFullYear()}`;
        }
        return 'Actualidad';
    };

    return (
        <div className='text-secondary'>
            <EditButton />
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
                <h3 className='text-sm sm:text-base text-accent font-semibold'>{formatedStartDate()} - {formatedEndDate()}</h3>
                <h3 className='text-sm sm:text-base text-accent font-semibold text-center'>{educationTypeToString()}</h3>
            </div>
        </div>
    );
};

