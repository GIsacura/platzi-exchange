// Lo filtros son funciones que reciven valores y los devuelven formateados segun los criterios de lo que se quiera hacer
import numeral from "numeral";

const dollarFilter = function (value) {
  if (!value) {
    return "$0";
  }
  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function (value) {
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`; //Number() se utiliza para transformar el dato en int si veien como string, y el toFixed() redondea segun el numero de decimales que especifiquemos en el parametro
};

export { dollarFilter, percentFilter };
