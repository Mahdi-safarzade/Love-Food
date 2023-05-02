import { useEffect, useState } from "react";
import Card from "../modules/Card";
import styles from "./MenuPage.module.css"

const MenuPage = ({ data }) => {
  const [state, setState] = useState()

  useEffect(() => {
    setState(data)
  }, [data])

  return (
    <div className={styles.container}>
      <h3>Menu</h3>
      <div className={styles.subContainer}>
        {state?.map(food => (
          <Card {...food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;


