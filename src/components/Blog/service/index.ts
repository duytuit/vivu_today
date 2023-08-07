import { listPost } from '../api';

export async function fetchListPost(params:any) {
    const res = await fetch( `${process.env.REACT_APP_API_URL}system/post/blog/v2/list?projectId=1`)
    return res.json()
};
// export async function fetchListPost(params:any) {
//     const response = await listPost(params);
//     console.log(response);
    
//     if (response.data?.code == 200) return response.data;
// };