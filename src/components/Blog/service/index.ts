import { listPost } from '../api';

export async function fetchListPost(params:any) {
    const res = await fetch('http://localhost:8091/api/system/post/blog/v2/list?projectId=1')
    return res.json()
};