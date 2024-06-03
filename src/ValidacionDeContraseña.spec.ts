import { validarClave } from "./ValidacionDeContraseña";
import { ValidacionClave, tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./ValidacionDeContraseña.helper"

describe("comprobarTieneMayusculasYMinusculas", () => {
    it("Deberia devolver un throw en caso de que la clave sea undefined", () => {
        //Arrange
        const clave: any = undefined
        //Act
        const resultado = () => tieneMayusculasYMinusculas(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que la clave sea null", () => {
        //Arrange
        const clave: any = null
        //Act
        const resultado = () => tieneMayusculasYMinusculas(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });
    it("Deberia devolver esValida a true si contiene mayusculas y minusculas", () => {
        //Arrange
        const clave:string = "Hola"
        const resultadoEsperado:ValidacionClave = {
            esValida:true
        }
        //Act
        const resultado = tieneMayusculasYMinusculas(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
    it("Deberia devolver esValida a false y el motivo del error si no contiene numeros", () => {
        //Arrange
        const clave:string = "hola"
        const resultadoEsperado:ValidacionClave = {
            esValida:false,
            error: "La contraseña debe contener mayusculas y minusculas"
        }
        //Act
        const resultado = tieneMayusculasYMinusculas(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
})

describe("comprobarTieneNumeros", () => {
    it("Deberia devolver un throw en caso de que la clave sea undefined", () => {
        //Arrange
        const clave: any = undefined
        //Act
        const resultado = () => tieneNumeros(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que la clave sea null", () => {
        //Arrange
        const clave: any = null
        //Act
        const resultado = () => tieneNumeros(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });
    it("Deberia devolver esValida a true si contiene numeros", () => {
        //Arrange
        const clave:string = "hola1"
        const resultadoEsperado:ValidacionClave = {
            esValida:true
        }
        //Act
        const resultado = tieneNumeros(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
    it("Deberia devolver esValida a false y el motivo del error si no contiene numeros", () => {
        //Arrange
        const clave:string = "hola"
        const resultadoEsperado:ValidacionClave = {
            esValida:false,
            error: "La contraseña debe contener al menos 1 numero"
        }
        //Act
        const resultado = tieneNumeros(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
})

describe("comprobarTieneCaracteresEspeciales", () => {
    it("Deberia devolver un throw en caso de que la clave sea undefined", () => {
        //Arrange
        const clave: any = undefined
        //Act
        const resultado = () => tieneCaracteresEspeciales(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que la clave sea null", () => {
        //Arrange
        const clave: any = null
        //Act
        const resultado = () => tieneCaracteresEspeciales(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });
    it("Deberia devolver esValida a true si contiene caracteres especiales", () => {
        //Arrange
        const clave:string = "hola_"
        const resultadoEsperado:ValidacionClave = {
            esValida:true
        }
        //Act
        const resultado = tieneCaracteresEspeciales(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
    it("Deberia devolver esValida a false y el motivo del error si no contiene numeros", () => {
        //Arrange
        const clave:string = "hola"
        const resultadoEsperado:ValidacionClave = {
            esValida:false,
            error: "La contraseña debe contener al menos 1 caracter especial"
        }
        //Act
        const resultado = tieneCaracteresEspeciales(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
})

describe("comprobarTieneLongitudMinima", () => {
    it("Deberia devolver un throw en caso de que la clave sea undefined", () => {
        //Arrange
        const clave: any = undefined
        //Act
        const resultado = () => tieneLongitudMinima(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que la clave sea null", () => {
        //Arrange
        const clave: any = null
        //Act
        const resultado = () => tieneLongitudMinima(clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });
    it("Deberia devolver esValida a true si contiene al menos 8 caracteres", () => {
        //Arrange
        const clave:string = "12345678"
        const resultadoEsperado:ValidacionClave = {
            esValida:true
        }
        //Act
        const resultado = tieneLongitudMinima(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
    it("Deberia devolver esValida a false y el motivo del error si no tiene al menos 8 caracteres", () => {
        //Arrange
        const clave:string = "1234567"
        const resultadoEsperado:ValidacionClave = {
            esValida:false,
            error: "La contraseña tiene una longitud menos a 8 caracteres"
        }
        //Act
        const resultado = tieneLongitudMinima(clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
})

describe("comprobarTieneNombreUsuario", () => {
    it("Deberia devolver un throw en caso de que la clave y el nombreUsuario sea undefined", () => {
        //Arrange
        const clave: any = undefined
        const nombreUsuario: any = undefined
        //Act
        const resultado = () => tieneNombreUsuario(nombreUsuario, clave)
        //Assert
        expect(resultado).toThrowError("No se han proporcionado datos")
    });

    it("Deberia devolver un throw en caso de que la clave y el nombreUsuario sea null", () => {
        //Arrange
        const clave: any = null
        const nombreUsuario: any = null
        //Act
        const resultado = () => tieneNombreUsuario(nombreUsuario, clave)
        //Assert
        expect(resultado).toThrowError("No se han proporcionado datos")
    });

    it("Deberia devolver un throw en caso de que la clave sea undefined", () => {
        //Arrange
        const clave: any = undefined
        const nombreUsuario: any = "Luis"
        //Act
        const resultado = () => tieneNombreUsuario(nombreUsuario, clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que la clave sea null", () => {
        //Arrange
        const clave: any = null
        const nombreUsuario: any = "Luis"
        //Act
        const resultado = () => tieneNombreUsuario(nombreUsuario, clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que el nombreUsuario sea undefined", () => {
        //Arrange
        const clave: any = "1234"
        const nombreUsuario: any = undefined
        //Act
        const resultado = () => tieneNombreUsuario(nombreUsuario, clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado un nombre de usuario")
    });

    it("Deberia devolver un throw en caso de que el nombreUsuario sea null", () => {
        //Arrange
        const clave: any = "1234"
        const nombreUsuario: any = null
        //Act
        const resultado = () => tieneNombreUsuario(nombreUsuario, clave)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado un nombre de usuario")
    });

    it("Deberia devolver esValida a true si la clave no contiene el nombreUsuario", () => {
        //Arrange
        const clave:string = "1234"
        const nombreUsuario:string = "Jose"
        const resultadoEsperado:ValidacionClave = {
            esValida:true
        }
        //Act
        const resultado = tieneNombreUsuario(nombreUsuario,clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
    it("Deberia devolver esValida a false y el motivo del error si la clave contiene el nombreUsuario", () => {
        //Arrange
        const clave:string = "Jose1234"
        const nombreUsuario:string = "Jose"
        const resultadoEsperado:ValidacionClave = {
            esValida:false,
            error: "La contraseña no puede contener el nombre de usuario"
        }
        //Act
        const resultado = tieneNombreUsuario(nombreUsuario,clave)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
})

describe("comprobarTienePalabrasComunes", () => {
    it("Deberia devolver un throw en caso de que la clave y las commonPasswords sean undefined", () => {
        //Arrange
        const clave: any = undefined
        const commonPasswords: any = undefined
        //Act
        const resultado = () => tienePalabrasComunes(clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se han proporcionado datos")
    });

    it("Deberia devolver un throw en caso de que la clave y las commonPasswords sean null", () => {
        //Arrange
        const clave: any = null
        const commonPasswords: any = null
        //Act
        const resultado = () => tienePalabrasComunes(clave, commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se han proporcionado datos")
    });

    it("Deberia devolver un throw en caso de que la clave sea undefined", () => {
        //Arrange
        const clave: any = undefined
        const commonPasswords: any = "Luis"
        //Act
        const resultado = () => tienePalabrasComunes(clave, commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que la clave sea null", () => {
        //Arrange
        const clave: any = null
        const commonPasswords: any = "Luis"
        //Act
        const resultado = () => tienePalabrasComunes(clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    });

    it("Deberia devolver un throw en caso de que las commonPasswords sean undefined", () => {
        //Arrange
        const clave: any = "1234"
        const commonPasswords: any = undefined
        //Act
        const resultado = () => tienePalabrasComunes(clave, commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado la lista de palabras comunes")
    });

    it("Deberia devolver un throw en caso de que las commonPasswords sean null", () => {
        //Arrange
        const clave: any = "1234"
        const commonPasswords: any = null
        //Act
        const resultado = () => tienePalabrasComunes(clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado la lista de palabras comunes")
    });

    it("Deberia devolver esValida a true si la clave no contiene palabras de la lista commonPasswords", () => {
        //Arrange
        const clave:string = "1234"
        const commonPasswords:string[] = ["Jose","Luis"]
        const resultadoEsperado:ValidacionClave = {
            esValida:true
        }
        //Act
        const resultado = tienePalabrasComunes(clave, commonPasswords)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
    it("Deberia devolver esValida a false y el motivo del error si la clave contiene palabras en la lista commonPasswords", () => {
        //Arrange
        const clave:string = "Jose1234"
        const commonPasswords:string[] = ["Jose","Luis"]
        const resultadoEsperado:ValidacionClave = {
            esValida:false,
            error: "La contraseña contiene palabras comunes"
        }
        //Act
        const resultado = tienePalabrasComunes(clave,commonPasswords)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    });
})

describe("comprobarValidarClave", () => {
    it("Deberia devolver un throw si nombreUsuario es undefined", () => {
        // Arrange
        const clave: string = "1234"
        const commonPasswords :string[] = ["hola"]
        const nombreUsuario: any = undefined
        //Act
        const resultado = () => validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado un nombre de usuario")
    })

    it("Deberia devolver un throw si nombreUsuario es null", () => {
        // Arrange
        const clave: string = "1234"
        const commonPasswords :string[] = ["hola"]
        const nombreUsuario: any = null
        //Act
        const resultado = () => validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado un nombre de usuario")
    })

    it("Deberia devolver un throw si clave es undefined", () => {
        // Arrange
        const clave: any = undefined
        const commonPasswords :string[] = ["hola"]
        const nombreUsuario: string = "Jose"
        //Act
        const resultado = () => validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    })

    it("Deberia devolver un throw si clave es null", () => {
        // Arrange
        const clave: any = null
        const commonPasswords :string[] = ["hola"]
        const nombreUsuario: string = "Jose"
        //Act
        const resultado = () => validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una clave")
    })

    it("Deberia devolver un throw si commonPasswords es undefined", () => {
        // Arrange
        const clave: string = "123"
        const commonPasswords: any = undefined
        const nombreUsuario: string = "Jose"
        //Act
        const resultado = () => validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una lista de palabras comunes")
    })

    it("Deberia devolver un throw si commonPasswords es null", () => {
        // Arrange
        const clave: string = "123"
        const commonPasswords: any = null
        const nombreUsuario: string = "Jose"
        //Act
        const resultado = () => validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toThrowError("No se ha proporcionado una lista de palabras comunes")
    })

    it("Deberia devolver el error de no contener numero en caso de que la clave no tenga numeros", () => {
        // Arrange
        const clave: string = "Hola*"
        const commonPasswords: string[] = ["Luis"]
        const nombreUsuario: string = "Jose"
        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La contraseña debe contener al menos 1 numero"
        }
        //Act
        const resultado: ValidacionClave = validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    })

    it("Deberia devolver el error de contener nombre usuario en caso de que la clave tenga el nombre de usuario", () => {
        // Arrange
        const clave: string = "Jose1234*"
        const commonPasswords: string[] = ["Luis"]
        const nombreUsuario: string = "Jose"
        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La contraseña no puede contener el nombre de usuario"
        }
        //Act
        const resultado: ValidacionClave = validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    })

    it("Deberia devolver el error de contener palabras comunes en caso de que la clave tenga palabras comunes", () => {
        // Arrange
        const clave: string = "Luis1234*"
        const commonPasswords: string[] = ["Luis"]
        const nombreUsuario: string = "Jose"
        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La contraseña contiene palabras comunes"
        }
        //Act
        const resultado: ValidacionClave = validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    })

    it("Deberia devolver esValida a true en caso de que la contraseña cumpla todos los requisitos", () => {
        // Arrange
        const clave: string = "Manuel1234*"
        const commonPasswords: string[] = ["Luis"]
        const nombreUsuario: string = "Jose"
        const resultadoEsperado: ValidacionClave = {
            esValida: true
        }
        //Act
        const resultado: ValidacionClave = validarClave(nombreUsuario,clave,commonPasswords)
        //Assert
        expect(resultado).toEqual(resultadoEsperado)
    })
})