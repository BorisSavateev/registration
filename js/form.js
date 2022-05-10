/* form.js */


export function isPasswordValid(password) {

  password = password.trim()
  console.log(password)
  console.log(password.trim().length)

  if (password.length>=10){
  return true  
  } 
  return false 
}



