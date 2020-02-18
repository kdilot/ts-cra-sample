import files from 'assets/User';
let userList = JSON.parse(localStorage.getItem('user') || '{}');
userList = userList.length > 0 ? userList : files;

export const UserCheck = ({ username }) => {
    const user = userList.filter((f: any) => f.username === username)[0];
    return user;
};

export const LoginCheck = ({ username, password }) => {
    const user = userList.filter(
        (f: any) => f.username === username && f.password === password,
    )[0];
    return user;
};
