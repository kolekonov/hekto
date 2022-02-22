import classes from "./BasketButton.module.scss";
/**
 * TODO:
 * В Create React App шаблоне можно импортировать .svg файлы как компоненты
 * таким образом.
 * В других проектам в зависимости от webpack конфига svg могут импортироваться по разному
 */
import { ReactComponent as BusketSvg } from "assets/busket.svg";

const BasketButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className={classes.button}>
        <BusketSvg />
      </button>
    </>
  );
};

export { BasketButton };
