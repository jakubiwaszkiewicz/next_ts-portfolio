import { Experience } from "../typings"

export const fetchExperience = async () => {
    const respose = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await respose.json()
    const experiences: Experience[] = data.experiences;

    console.log ("fetching", experiences);

    return experiences;
}

