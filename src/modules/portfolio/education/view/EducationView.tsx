import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { EducationComponent } from '../components';
import { Education } from '../../models';
import { dateComparer } from '../../helpers';

export const EducationView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const orderEducations = ({ end: endA }: Education, { end: endB }: Education): number => {
        if (endA === null || endA === undefined) return -1;
        if (endB === null || endA === undefined) return 1;
        return dateComparer(new Date(endA as string), new Date(endB as string));
    };

    const educations = (new Array<Education>().concat(activeUser.educations).sort(orderEducations));

    return (
        <ViewContainer title='Educacion' to='edit/educations'>
            <div className='divide-y divide-dashed divide-primary'>
                {educations.map(educ => <EducationComponent key={educ.id} education={educ} isEnglishMode={isEnglishMode} />)}
            </div>
        </ViewContainer>
    );
};