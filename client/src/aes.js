// var aes256 = require('aes256')
var secret_key = "1qazxsw23edcvfr45tgbnhy67ujm,ki8"

export const to_Encrypt = text => {
    // var encrypted = aes256.encrypt(secret_key, text);
    // return encrypted;
    return text;
}
export const to_Decrypt = (cipher, username) => {
    if (cipher.startsWith("Hello")) {
        return cipher;
    }
    if (cipher.startsWith(username)) {
        return cipher;
    }
    //var decrypted = aes256.decrypt(secret_key, cipher)
    //return decrypted;
    return cipher;
}


