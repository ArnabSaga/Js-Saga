// Object based getter & setter (rare)
const user = {
    _email: 'joyBoy@jb.com',
    _password: 'abc',


    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const zoro = Object.create(user);
console.log(zoro.email);