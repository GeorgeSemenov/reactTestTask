const ask       = require(`./ask.js`);
const wtf       = require(`./writeToFile.js`);
const cf        = require(`./createFolder.js`);
const scfl      = require(`./setCaseFirstLetter.js`);

let answer      = ask(`What would we create: `);
let compName    = scfl(answer);//Имя компонента всегда должно быть с большой буквы, иначе реакт не будет с ним работать
let parentName  = ``;//Если в блоке нужно будет создать элемент, то имя блока будет храниться в этой переменной.

if(process.argv[2]){//Если скрипт вызван с аргументом, т.е. в блоке нужно создать элемент
  parentName    = scfl(process.argv[2]);
}

cf(`./${compName}`);//В папке где будет запущен скрипт вызывающий main.js будет создана папка с именем {answer}
wtf(`./${compName}/${parentName + compName}.js`,
    `import './${parentName + compName}.css';
function ${parentName + compName}(props){
  return(
    <div class="${scfl(parentName + compName,"lower")}">

    </div>
  )
}
export default ${parentName + compName};`
  );/*Создаём файлик js и наполняем его смыслом*/

wtf(`./${compName}/${parentName + compName}.css`,
    `.${scfl(parentName + compName,`lower`)}{

}`
  );//Создаём и наполняем файлик .css

if (!parentName.length){//Если это блок, то переменная parentName будет содержать пустую строку, значит нужно будет создать sh скрипт, чтобы создавать элементы
  wtf(`./${compName}/crelement.sh`,
    `node ../../BEMscript/main.js ${compName}`
  );//Создаём sh скрипт с аргументом, который будет хранить имя блока
}