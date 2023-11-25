function isArray(element: any) {
  return element?.push ? true : false;
}

function getFromMultiLevelString(path: string, pool: any): any {
  if (!path) return null;
  const pieces = path.split(".");
  let data: any = pool;

  for (let i = 0; i < pieces.length; i++) {
    // if( data[pieces[i]] === undefined ) {
    if (!data[pieces[i]] && data[pieces[i]] !== 0) {
      return null;
    }

    data = data[pieces[i]];
  }
  return data;
}

function deepen(key: string, value: any): Object {
  var obj: any = {};
  var parts = key.split(".");
  if (parts.length == 1) {
    obj[parts[0]] = value;
  } else if (parts.length > 1) {
    // concat all but the first part of the key
    var remainingParts = parts.slice(1, parts.length).join(".");
    obj[parts[0]] = deepen(remainingParts, value);
  }
  return obj;
}

function removeAccents(strAccents: any) {
  strAccents = strAccents.split("");
  const strAccentsOut = [];
  const strAccentsLen = strAccents.length;
  const accents =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  const accentsOut =
    "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  for (let y = 0; y < strAccentsLen; y++) {
    if (accents.indexOf(strAccents[y]) !== -1) {
      strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
    } else strAccentsOut[y] = strAccents[y];
  }

  return strAccentsOut.join("");
}

const removeDuplicatesArr = (arr: any[]) => {
  const seenKeys = new Set();
  const uniqueArr = arr.filter((obj) => {
    if (seenKeys.has(obj.key)) {
      return false; // retorna false se a chave já foi vista antes
    } else {
      seenKeys.add(obj.key);
      return true; // retorna true se a chave ainda não foi vista
    }
  });

  return uniqueArr;
};

export {
  deepen,
  getFromMultiLevelString,
  isArray,
  removeAccents,
  removeDuplicatesArr,
};
