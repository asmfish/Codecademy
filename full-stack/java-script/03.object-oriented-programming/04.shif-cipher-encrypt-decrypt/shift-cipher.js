/**
 * Shift cipher shifts each letter forward by a given number.
 * Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:
 *  encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
 *  decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
 * But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
 */
class ShiftCipher {
     
    constructor(shiftValue) {
        this.shiftValue = shiftValue;
    }
        
    encrypt(plainText){
        let textToEncrypt = plainText.toUpperCase();
        let encryptedText = [];
        let charCodeAt;
        let encryptedCode;
        let startCode = 65; //A
        let endCode = 90; //Z

        for(let i = 0; i < textToEncrypt.length; i++){
            charCodeAt = textToEncrypt.charCodeAt(i);
            if(charCodeAt >= startCode && charCodeAt <= endCode){
                if((charCodeAt + this.shiftValue) > endCode){
                    encryptedCode = startCode - 1 + this.shiftValue - (endCode - charCodeAt);
                }
                else{
                    encryptedCode = charCodeAt + this.shiftValue;
                }
                
                encryptedText.push(String.fromCharCode(encryptedCode));
        
            }
            else{
                encryptedText.push(textToEncrypt[i]); 
            }
        }
        
        return encryptedText.join('');
    }
 
    decrypt(encryptedText){
        let textToDecrypt = encryptedText.toLowerCase();
        let decryptedText = [];
        let charCodeAt;
        let startCode = 97; //a
        let endCode = 122; //z
        let decryptedCode;

        for(let i = 0; i < textToDecrypt.length; i++){
            charCodeAt = textToDecrypt.charCodeAt(i);
            if(charCodeAt >= startCode && charCodeAt <= endCode){
                if((charCodeAt - this.shiftValue) < startCode){
                    decryptedCode = endCode + 1 - this.shiftValue - (startCode - charCodeAt);
                }
                else{
                    decryptedCode = charCodeAt - this.shiftValue;
                }
                
                decryptedText.push(String.fromCharCode(decryptedCode));
                
            }
            else{
                decryptedText.push(textToDecrypt[i]); 
            }
        }
        
        return decryptedText.join('');
    }
}


 const cipher = new ShiftCipher(2);
 console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
 console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'