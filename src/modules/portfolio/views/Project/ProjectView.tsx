import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Project } from '../../models';
import { SectionContainer } from '../components';

export const ProjectView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <SectionContainer title='Proyectos'>
            {activeUser.projects.map(proj => <ProjectContainer key={proj.id} isEnglishMode={isEnglishMode} project={proj} />)}
        </SectionContainer>
    );
};

interface Props {
    project: Project;
    isEnglishMode: boolean;
}

const ProjectContainer = ({ project, isEnglishMode }: Props) => {

    return (
        <div className='text-secondary'>
            <h1 className='text-base sm:text-lg'>{project.name}</h1>
            <p className='mb-1 text-sm sm:text-base text-justify font-light'>
                {
                    project.hasEnglishDesc && isEnglishMode
                        ?
                        project.englishDesc
                        :
                        project.nativeDesc
                }
            </p>
            <a href={project.url} target='_blank' rel='noreferrer' className='italic hover:text-primary text-sm sm:text-base text-accent font-semibold'>Link</a>
        </div>
    );
};
