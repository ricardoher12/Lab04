const stringInput ={
    alias: 'd',
    demand: true,
    desc: "Input a analizar"
}

const argv = require('yargs')
.command('analizar', "Analizar input", {stringInput})
.help()
.argv;


let getComando = () => argv.d;


module.exports = {argv, getComando}