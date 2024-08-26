import { Link } from "react-router-dom"
import  styles from "./style.module.css"

export const Page1=()=>{

    return <>
    <h1 className={styles.title}>Page1</h1>
    <Link to={"/other"}>page2</Link>
    </>
}