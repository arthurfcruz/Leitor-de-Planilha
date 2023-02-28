const readXlsxFile = require('read-excel-file/node')

readXlsxFile("C:/Users/Arthur/Desktop/Exercicios Flit/Modulo 3/Exercicio 1/Alunos.xlsx").then((rows) => {
    console.log(rows[1][1])
})
