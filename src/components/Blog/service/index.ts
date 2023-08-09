import { convertObjToParam } from '@/utils/Helper';
import { listPost } from '../api';

export async function fetchListPost(params:any) {
    params = convertObjToParam(params);
    const res = await fetch( `${process.env.REACT_APP_API_URL}system/post/blog/v2/list?${params}` ,{ next: { revalidate: 3 } })
   // const res = await fetch( `${process.env.REACT_APP_API_URL}system/post/blog/v2/list?projectId=2` ,{ next: { revalidate: 3 } })
    return res.json()
};
export async function fetchTagGroupTag(params:any) {
    params = convertObjToParam(params);
    const res = await fetch( `${process.env.REACT_APP_API_URL}system/tag/getTagGroupTag?${params}` ,{ next: { revalidate: 3 } })
    return res.json()
};
export async function fetchCountPostGroupCategory(params:any) {
    params = convertObjToParam(params);
    const res = await fetch( `${process.env.REACT_APP_API_URL}system/post/blog/countPostGroupCategory?${params}` ,{ next: { revalidate: 3 } })
    return res.json()
};
export async function fetchCategory(params:any) {
    params = convertObjToParam(params);
    const res = await fetch( `${process.env.REACT_APP_API_URL}system/categories/list?${params}` ,{ next: { revalidate: 3 } })
    return res.json()
};
// export async function fetchListPost(params:any) {
//     const response = await listPost(params);
//     console.log(response);
    
//     if (response.data?.code == 200) return response.data;
// };