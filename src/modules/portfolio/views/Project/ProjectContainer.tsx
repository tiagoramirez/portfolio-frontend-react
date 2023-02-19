import { startDeletingProject, useAppDispatch } from '../../../../store';
import { Project } from '../../models';
import { DeleteButton, EditButton } from '../components';

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
