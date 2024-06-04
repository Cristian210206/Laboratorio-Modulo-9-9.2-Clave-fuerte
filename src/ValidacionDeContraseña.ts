import {
  ValidacionClave,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./ValidacionDeContraseña.helper";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if(!nombreUsuario) {
    throw new Error("No se ha proporcionado un nombre de usuario")
  }

  if(!clave) {
    throw new Error("No se ha proporcionado una clave")
  }

  if(!commonPasswords) {
    throw new Error("No se ha proporcionado una lista de palabras comunes")
  }
  const comprobacionesContraseña: ValidacionClave[] = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

 let resultado :ValidacionClave = {
    esValida: true
  }

  for(let i = 0; i < comprobacionesContraseña.length; i++) {
    if(comprobacionesContraseña[i].esValida === true) {
      resultado = {
        esValida: true
      }
    } else {
      resultado = comprobacionesContraseña[i]
      break
    } 
  }
  return resultado
};
