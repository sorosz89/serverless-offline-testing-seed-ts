import axios from 'axios';

const create = (baseURL: string) => axios.create({ baseURL })

export const devServer = create(`http://localhost:${process.env.SLS_PORT}/`);
export const server = create("https://1vziag46w6.execute-api.us-east-1.amazonaws.com/");
