import { ParagraphWithBreakLine } from '../../components';
import { Project } from '../../models';

export const ProjectComponent = ({ project, isEnglishMode }: { project: Project, isEnglishMode: boolean }) => {
    return (
        <div className='text-secondary mb-1'>
            <h2 className='mt-1'>{project.name}</h2>
            {
                project.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='my-3 text-justify' str={project.englishDesc as string} />
                    :
                    <ParagraphWithBreakLine className='my-3 text-justify' str={project.nativeDesc as string} />
            }
            <a href={project.url} target='_blank' rel='noreferrer' className='italic text-primary opacity-75 font-semibold'>Link</a>
        </div>
    );
};
