const readXlsxFile = require('read-excel-file/node')
const validator = require('validator')
var testeNome
var testeEmail
var testeIdade
var testeMatricula
var rowNome
var rowEmail
var rowIdade
var rowMatricula

readXlsxFile("C:/Users/Arthur/Desktop/Exercicios Flit/Modulo 3/Exercicio 1/Alunos.xlsx").then((rows) => {
    for (let i = 1; i < 11; i++) {
        for (let u = 0; u < 4; u++) {
            switch (u) {
                case 0:
                    testeNome = validator.isEmpty(rows[i][u])
                    rowNome = rows[i][u]
                break;
                case 1:
                    testeEmail = validator.isEmail(rows[i][u])
                    rowEmail = rows[i][u]
                break;
                case 2:
                    if (rows[i][u] > 0) {
                        testeIdade = true
                        rowIdade = rows[i][u]
                    }
                break;
                case 3:
                    testeMatricula = validator.isAlphanumeric(rows[i][u])
                    rowMatricula = rows[i][u]
                break;
                default:
                break;
            }
            if (testeNome == false && testeEmail == true && testeIdade == true && testeMatricula == true && u == 3) {
                console.log(rowNome, "/",rowEmail, "/",rowIdade, "/",rowMatricula
                    )
            }
        }
    }
})
