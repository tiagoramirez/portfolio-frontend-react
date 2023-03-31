import { UserSkill } from '../../models';

export const SkillComponent = ({ skill }: { skill: UserSkill }) => {
    const skillTypeToString = () => {
        switch (skill.skillInfo.type) {
            case 0:
                return 'Front End';
            case 1:
                return 'Back End';
            case 2:
                return 'Developer Tool';
        }
    };

    return (
        <div className='
            group
            h-20 w-20 mx-1 mt-2 p-2
            relative
            flex flex-col items-center justify-center
            rounded-3xl border
            border-primary bg-primary
            cursor-default
        '>
            <p className='text-center text-xs text-secondary'>{skill.skillInfo.name}</p>
            <div className='
                absolute text-title opacity-0
                group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)]
                group-hover:opacity-100
                transition duration-200 ease-in-out
            '>
                <div className='
                    p-2 h-20 w-20
                    flex flex-col justify-center items-center
                    bg-secondary rounded-3xl border border-primary
                '>
                    <p className='text-center text-xs'>{skillTypeToString()}</p>
                    <p>-</p>
                    <p className='text-xs'>{skill.percentage}%</p>
                </div>
            </div>
        </div>
    );
};
