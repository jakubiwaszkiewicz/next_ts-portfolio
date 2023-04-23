import { PageInfo } from "../typings"

const constfetchPageInfo = async () => {
    const respose = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await respose.json()
    const pageInfo: PageInfo[] = data.pageInfo;

    console.log ("fetching", pageInfo);

    return pageInfo;
}
export default constfetchPageInfo;