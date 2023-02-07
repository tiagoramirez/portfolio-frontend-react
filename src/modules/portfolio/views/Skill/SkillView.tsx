import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { UserSkill } from '../../models';
import { SectionContainer } from '../components';

export const SkillView = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    return (
        <SectionContainer title='Skills'>
            <div className='flex flex-row flex-wrap justify-evenly'>
                {activeUser.skills.map(skill => <SkillContainer key={skill.id} skill={skill} />)}
            </div>
        </SectionContainer>
    );
};

interface Props {
    skill: UserSkill;
}

const SkillContainer = ({ skill }: Props) => {

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
                    <p>{skillTypeToString()}</p>
                    <p>-</p>
                    <p>{skill.percentage}%</p>
                </div>
            </div>
        </div>
    );
};