//Принимает строку str и регистр
//Переводит первую букву строки в указанный регистр и возвращает копию строки.
//upper - верхний регистр(стоит по умолчанию), lower - нижний регистр
const setCaseFirstLetter = function (str, cace="upper"){
  let altStr;
  if (cace == "upper"){altStr=str[0].toUpperCase() + str.slice(1,str.length);}
  else if (cace == "lower"){altStr=str[0].toLowerCase() + str.slice(1,str.length);}
  else{ console.log(`unrecognized case = ${cace}\nIn function setCaseFirstLetter.`);}
  return altStr
};

module.exports = setCaseFirstLetter;