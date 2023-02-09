import { Project } from '../../models';

interface Props {
    project: Project;
    isEnglishMode: boolean;
}

export const ProjectContainer = ({ project, isEnglishMode }: Props) => {
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
