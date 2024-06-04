export const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
  ];

export interface ValidacionClave {
    esValida: boolean;
    error?: string;
  }

  export const mostrarError = (mensajeError: string) :ValidacionClave => {
    return {
        esValida: false,
        error: mensajeError
    }
  }

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    if(!clave){
        throw new Error("No se ha proporcionado una clave")
    }
    if(clave.match(/[A-Z]/) && clave.match(/[a-z]/)) {
        return {
            esValida: true
        }
    } else {
        return mostrarError("La contraseña debe contener mayusculas y minusculas")
    }
  };

export const tieneNumeros = (clave: string): ValidacionClave => {
    if(!clave){
        throw new Error("No se ha proporcionado una clave")
    }
    if(clave.match(/\d/)) {
        return {
            esValida: true
        }
    } else {
        return mostrarError("La contraseña debe contener al menos 1 numero")
    }
  };

  export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if(!clave){
        throw new Error("No se ha proporcionado una clave")
    }
    if(clave.match(/[^A-Za-z\d]/)) {
        return {
            esValida: true
        }
    } else {
        return mostrarError("La contraseña debe contener al menos 1 caracter especial")
    }
  };

  export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if(!clave){
        throw new Error("No se ha proporcionado una clave")
    }
    if(clave.length < 8) {
        return mostrarError("La contraseña tiene una longitud menos a 8 caracteres")
    } else {
        return {esValida: true}
    }
  };

  export const tieneNombreUsuario = (
    nombreUsuario: string,
    clave: string,
  ): ValidacionClave => {
    if(!clave && !nombreUsuario) {
        throw new Error("No se han proporcionado datos")
    }
    if(!clave ){
        throw new Error("No se ha proporcionado una clave")
    }
    if(!nombreUsuario) {
        throw new Error("No se ha proporcionado un nombre de usuario")
    }
    if(clave.match(nombreUsuario)) {
        return mostrarError("La contraseña no puede contener el nombre de usuario")
    } else {
        return {
            esValida: true
        }
    }
  };

  export const tienePalabrasComunes = (
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    if(!clave && !commonPasswords) {
        throw new Error("No se han proporcionado datos")
    }
    if(!clave ){
        throw new Error("No se ha proporcionado una clave")
    }
    let resultado: ValidacionClave = {
        esValida: true
    }
    const contienePalabrasComunes = () => commonPasswords.some((commonPassword, numeroArray) => {
        return clave.includes(commonPassword[numeroArray]) === true
    })

    if(contienePalabrasComunes() !== true) {
        resultado = {
            esValida: true
        }
    } else {
        return mostrarError("La contraseña contiene palabras comunes")
    }
    return resultado
};