export class SignInData {

// yaha muhjey ek masla aa raha hai wo mai solve karunga shayed mai ney sign indata ko import nh kiya
// is liay error aa raha hai
// this.email ka mtlb ye hai ik is ko api wali email k equal krney k liay hamey 
// is tarah lkiikhna hota hai 

    private email: string;
    private password : string;
constructor(email : string , password : string ){
this.email = email;
this.password = password
}

getEmail():string {
    return this.email
}
getPassword(): string {
    return this.password;
}

}