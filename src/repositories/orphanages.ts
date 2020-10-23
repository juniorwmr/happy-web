import { api } from './../services/api';

export const URL_USERS = `/orphanages`;

export interface IOrphanageImages {
  id?: number;
  url?: string;
  link?: string;
}

export interface IOrphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  check?: boolean;
  images: IOrphanageImages[];
}

export default {
  async index() {
    try {
      return await api.get<IOrphanage[]>(`${URL_USERS}`);
    } catch (err) {
      console.error(`Your request (GET) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async findUnChecked() {
    try {
      return await api.get<IOrphanage[]>(`${URL_USERS}/pendents`);
    } catch (err) {
      console.error(`Your request (GET) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async show(id: string) {
    try {
      return await api.get<IOrphanage>(`${URL_USERS}/${id}`);
    } catch (err) {
      console.error(`Your request (GET) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async create(data: FormData) {
    try {
      return await api.post<IOrphanage>(`${URL_USERS}`, data);
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async update(data: FormData) {
    try {
      return await api.put<IOrphanage>(`${URL_USERS}`, data);
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async delete(id: string) {
    try {
      return await api.delete<IOrphanage>(`${URL_USERS}/${id}`);
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },
};
