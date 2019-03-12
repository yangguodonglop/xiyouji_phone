//import { get, post } from './http'
import axios from 'axios';

let ownbase='http://192.168.0.182:9999'//本地接口
let ownbase1='http://192.168.0.182:8089'//本地接口


export const queryAllNodesProfiles= params => { return axios.post(`${ownbase}/PTFSNodeManage/queryAllNodesProfiles`, params).then(res => res.data); };
export const login= params => { return axios.post(`${ownbase1}/login/getCode`, params).then(res => res.data); };

