// Function based getter & setter (uncommon)
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value;
        }
    })
}

const luffy = new User('luffy@pirateKing.com', 'gear6')
console.log(`Luffy-san email is: ${luffy._email}`);
console.log(`password: ${luffy._password}`);