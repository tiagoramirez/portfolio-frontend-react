import { useAppDispatch } from '../../../../store';
import { startDeletingProject } from '../../../../store/portfolio';
import { DeleteButton, EditButton, ParagraphWithBreakLine } from '../../components';
import { Project } from '../../models';

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
        <div className='text-secondary py-2'>
            {
                showActionButtons
                &&
                <>
                    <EditButton to={project.id as string} />
                    <DeleteButton onDelete={onDelete} />
                </>
            }
            <h2>{project.name}</h2>
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
