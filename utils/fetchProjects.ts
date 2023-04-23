import { Project } from "../typings"

export const constfetchProjects = async () => {
    const respose = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await respose.json()
    const projects: Project[] = data.projects;

    // console.log ("fetching", projects);

    return projects;
}