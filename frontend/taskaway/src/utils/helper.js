export const validateEmail =(email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
    return regex.test(email);
}
// export const validatePassword = (password) => {
//   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/;
//   return regex.test(password);
// };