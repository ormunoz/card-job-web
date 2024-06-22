export function validateRut(completeRut: string){
    const validFormat = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(completeRut)
    if(!validFormat) return false

    const tmp = completeRut.split("-")
    let digv = tmp[1]
    let rut = Number(tmp[0])
    if(digv == "K") digv = "k"

    let M=0,S=1;
    for(;rut;rut=Math.floor(rut/10))
        S=(S+rut%10*(9-M++%6))%11;
    const expectedDigv = S?S-1:'k';

    return expectedDigv == digv
}

export function checkPasswords(password: string, rePassword: string){
    return (password == rePassword)
}

export function validateEmailStructure(email: string){
    const splitted = email.split("@")

    if (splitted.length == 2){
        if (splitted[1].split(".").length > 1){
            return true
        }
    }
    return(false)
}

export function verifyPhoneNumberFormat(phoneNumber: string): boolean {
    const format = /^\+569\d{8}$/;
    return format.test(phoneNumber);
}
