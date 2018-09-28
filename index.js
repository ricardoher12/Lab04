const {argv, getComando} = require('./yargs');

let cmd = getComando();

let comando = cmd.toString();


    var stack = [];

     for (let i = 0; i < comando.length; i++) {

         if(comando.charAt(i) == "{" || comando.charAt(i) == "(" || comando.charAt(i) == "["){
            stack.push(comando.charAt(i));
         }
         
         if(comando.charAt(i) == "}" || comando.charAt(i) == ")" || comando.charAt(i) == "]"){
            try {

                let chr = stack.pop();
                
            switch(comando.charAt(i))
            {
                case "}":
                if(chr != "{"){
                    console.log("Cadena invalida se esperaba {");
                    return;
                }
                break;

                case ")":
                if(chr != "("){
                    console.log("Cadena invalida se esperaba (");
                    return;
                }
                break;

                case "]":
                if(chr != "["){
                    console.log("Cadena invalida se esperaba [");
                    return;
                }
                break;
            }
                
            } catch (error) {
             console.log("Cadena invalida");
            }      
     }
    }

    if(stack.length != 0)
    {
        console.log("Cadena invalida");
    }