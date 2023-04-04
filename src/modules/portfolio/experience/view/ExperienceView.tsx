import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { ExperienceComponent } from '../components';
import { Experience } from '../../models';
import { dateComparer } from '../../helpers';

export const ExperienceView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const orderExperiences = ({ end: endA }: Experience, { end: endB }: Experience): number => {
        if (endA === null || endA === undefined) return -1;
        if (endB === null || endA === undefined) return 1;
        return dateComparer(new Date(endA as string), new Date(endB as string));
    };

    const experiences = (new Array<Experience>().concat(activeUser.experiences).sort(orderExperiences));

    return (
        <ViewContainer title='Experiencia' to='edit/experiences'>
            <>
                <div className='divide-y divide-dashed divide-primary'>
                    {experiences.map(exp => <ExperienceComponent key={exp.id} isEnglishMode={isEnglishMode} experience={exp} />)}
                </div>
            </>
        </ViewContainer>
    );
};