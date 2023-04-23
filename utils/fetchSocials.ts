import { Social } from "../typings"

export const constfetchSocials = async () => {
    const respose = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await respose.json()
    const socials: Social[] = data.socials;

    // console.log ("fetching", socials);

    return socials;
}