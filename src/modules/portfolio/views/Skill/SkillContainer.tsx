import { UserSkill } from '../../models';

const skillTypeToString = (type: number) => {
    switch (type) {
        case 0:
            return 'Front End';
        case 1:
            return 'Back End';
        case 2:
            return 'Developer Tool';
    }
};

interface Props {
    skill: UserSkill;
}

export const SkillContainer = ({ skill }: Props) => {
    return (
        <div className="
            group
            h-20 w-20 relative mx-1 mb-2
            flex flex-col items-center justify-center
            rounded-3xl border border-primary
            cursor-default
        ">
            <p className="text-center text-xs">{skill.skillInfo.name}</p>

            <div className="
                absolute text-secondary opacity-0
                group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)]
                group-hover:opacity-100
                transition duration-200 ease-in-out
            ">
                <div className="
                    p-2 h-20 w-20
                    flex flex-col justify-center items-center
                    bg-primary rounded-3xl text-xs border border-primary
                ">
                    <p>{skillTypeToString(skill.skillInfo.type)}</p>
                    <p>-</p>
                    <p>{skill.percentage}%</p>
                </div>
            </div>
        </div>
    );
};