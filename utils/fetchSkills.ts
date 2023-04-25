import { Skill } from "../typings"

export const fetchSkills = async () => {
    const respose = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    const data = await respose.json()
    const skills: Skill[] = data.skills;

    // console.log ("fetching", skills);

    return skills;
}