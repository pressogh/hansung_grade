import { atom } from 'recoil';

const username = atom({
    key: "username",
    default: ''
})

const password = atom({
    key: "password",
    default: ''
})

const gradeData = atom({
    key: "gradeData",
    default: '',
});

export { gradeData, username, password };