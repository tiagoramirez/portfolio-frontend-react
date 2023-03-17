import { useAppDispatch } from '../../../../store';
import { startDeletingProject } from '../../../../store/portfolio';
import { Project } from '../../models';
import { DeleteButton, EditButton } from '../components';
import ParagraphWithBreakLine from '../components/ParagraphWithBreakLine';

interface Props {
    project: Project;
    isEnglishMode: boolean;
    showActionButtons?: boolean;
}

export const ProjectContainer = ({ project, isEnglishMode, showActionButtons }: Props) => {
    const dispatch = useAppDispatch();

    const onDelete = () => {
        dispatch(startDeletingProject(project.id as string));
    };

    return (
        <div className='relative text-secondary py-2'>
            {
                showActionButtons
                &&
                <>
                    <EditButton to={project.id as string} />
                    <DeleteButton onDelete={onDelete} />
                </>
            }
            <h2 className='font-semibold'>{project.name}</h2>
            {
                project.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='my-3 text-sm sm:text-base text-justify font-light' str={project.englishDesc as string} />
                    :
                    <ParagraphWithBreakLine className='my-3 text-sm sm:text-base text-justify font-light' str={project.nativeDesc as string} />
            }
            <a href={project.url} target='_blank' rel='noreferrer' className='italic hover:text-primary text-lg text-accent font-semibold'>Link</a>
        </div>
    );
};
