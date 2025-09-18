import axios from 'axios';
import { PostResponse } from '@/types/post';

export function fetchPosts() {
    return axios.get<PostResponse>('https://dummyjson.com/posts')
        .then(response => response.data);
}