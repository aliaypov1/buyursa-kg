export const accessToken = localStorage.getItem('accessToken')
export const seller = localStorage.getItem('seller')
const storedRoles = localStorage.getItem('role');
export const parsedRoles = JSON.parse(storedRoles);