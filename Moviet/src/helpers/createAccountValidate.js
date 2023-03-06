import validator from 'validator';
export const createAccountValidator = (name, mail, pass, pass2, setUser, setmail, setPass,setPass2) => {
    var validate = true;
    if (validator.isEmpty(name)) {
        setUser('THE USERNAME IS EMPTY');
        validate = false;
    }else{
        setUser('noterror');
    }
    
    if (!validator.isEmail(mail)) {
        setmail('MAIL IS NOT VALID');
        validate = false;
    }else{
        setmail('noterror')
    }

    if (validator.isEmpty(pass)) {
        setPass('THE PASSWORD IS EMPTY');
        validate = false;
    }else{
        setPass('noterror')
    }


    if (pass.length < 5) {
        setPass('MUST BE LONGER THAN 5 CHARACTERS');
        validate = false;
    }else{
        setPass('noterror')
    }

    if (pass != pass2) {
        setPass2('PASSWORDS DO NOT MATCH');
        validate = false;
    }else{
        setPass2('noterror')
    }

    return validate;

}

