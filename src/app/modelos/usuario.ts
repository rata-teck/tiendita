export interface Usuario {
  id? : string,
  firstName : string,
  lastName : string,
  age : number,
  username : string,
  password : string,
  birthDate : number,
  gender : 'male'|'female',
  token? : string
}
