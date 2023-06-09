import axios, * as others from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "86f5c68f-6f83-44d6-b492-88098694a338" },
});

export const usersAPI = {
  getUsers(currentPage , pageSize ) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => 
        response.data
      );
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId){
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },

   login(email, password, rememberMe = false) {
      return instance.post(
         `auth/login`,
         {email, password, rememberMe} );
   },

   logout() {
      return instance.delete( `auth/login` );
   }
};
