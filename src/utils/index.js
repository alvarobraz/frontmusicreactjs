export function transformarEmArray(str) {
  let splitEspaco =  str.split(' ')

  console.log(splitEspaco)
  let array=[]
  array.push(splitEspaco)
  console.log(array)
  return array
}

export const trasformDateToDateFormatUTC = (date) => {
  const year            = date.split('/')[2]
  const month           = date.split('/')[1]
  const day             = date.split('/')[0]
  const dateFormatedUTC = year+'-'+month+'-'+day+'T00:00:00.000Z'
  return dateFormatedUTC;
}

export const dateMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1') // captura 4 numeros seguidos e não deixa ser digitado mais nada
}

export function espacoVirgula(str) {
  console.log(str)
  let lista = str[0].split(",");
  let resultado = lista.join(", ");
  return resultado;
}