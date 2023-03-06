

export const signinValidate = (mail,pass,setError) => {

    let validate = true;

    if(mail.length === 0){
        validate = false;
    }

    if(pass.length === 0){
        validate= false;
    }

    if(!validate) setError('MAIL OR PASSWORD INCORRECT');

    return validate;
}
