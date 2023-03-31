import { useHandleSkill } from './hook';

export const HandleSkillPage = () => {
    const { availableSkills, loading, disable, skill, register, onSubmit } = useHandleSkill();

    return (
        <section>
            <h1 className='text-center'>SKILL</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-4 gap-4'>
                <select disabled={disable} className='col-span-4' {...register('skillInfo.id', { required: true })}>
                    {
                        disable
                            ?
                            <option value={skill.skillInfo.id}>{skill.skillInfo.name}</option>
                            :
                            availableSkills.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)
                    }
                </select>
                <input type='number' max={100} min={0} className='col-span-4 text-center w-1/3 mx-auto'
                    {...register('percentage', {
                        required: true,
                        max: 100,
                        min: 0
                    })}
                />
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span>
                        :
                        <button className='col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
                }
            </form>
        </section>
    );
};
