export const validateEmail =(email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
    return regex.test(email);
}
// export const validatePassword = (password) => {
//   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/;
//   return regex.test(password);
// };

export const getInitials =(name)=>{
    if(!name) return "";
    const words = name.split(" ");
    let initails ="";
       for (let  i=0; i< Math.min(words.length,2);i++){
                 initails += words[i][0];
       }

       return initails.toUpperCase();
}