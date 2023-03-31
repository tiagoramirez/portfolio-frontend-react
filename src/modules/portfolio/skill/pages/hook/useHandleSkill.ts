import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../../../store';
import { useSelector } from 'react-redux';
import { UserSkill } from '../../../models';
import { SubmitHandler, useForm } from 'react-hook-form';
import { startAddingSkill, startUpdatingSkill } from '../../../../../store/portfolio';
import { useEffect, useState } from 'react';
import { getSkill } from '../../../../../api';
import { Skill } from '../../../models/Skill';

export const useHandleSkill = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const [availableSkills, setAvailableSkills] = useState<Skill[]>([]);

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    const disable: boolean = id ? true : false;

    if (id && activeUser.skills.find(skl => skl.id === id) === undefined) {
        navigate(`/${username}`);
    }

    useEffect(() => {
        !disable && getSkill().then(({ data: skills }) => {
            const usedSkillIds: string[] = activeUser.skills.map(skl => skl.skillInfo.id);
            const availableSkls = skills.filter((skl => !usedSkillIds.includes(skl.id)));
            setAvailableSkills(availableSkls);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const skill = id ? activeUser.skills.find(skl => skl.id === id) as UserSkill : new UserSkill();

    const { register, handleSubmit } = useForm<UserSkill>({ defaultValues: { ...skill } });

    const onRedirect = () => navigate(`/${username}/edit/skills`);

    const onSubmitSkill: SubmitHandler<UserSkill> = data => {
        if (!disable) {
            data.skillInfo = availableSkills.find(skl => skl.id === data.skillInfo.id) as Skill;
        }

        console.log(data);

        if (id) {
            return dispatch(startUpdatingSkill(data, onRedirect));
        }
        return dispatch(startAddingSkill(data, onRedirect));
    };

    const onSubmit = handleSubmit(onSubmitSkill);

    return {
        loading,
        availableSkills,
        disable,
        skill,
        onSubmit,
        register
    };
};