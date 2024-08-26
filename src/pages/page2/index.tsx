import { Link } from "react-router-dom"
import styles from "./style.module.css"
import { useForm } from "../../hooks"

export const Page2=()=>{

    const {handleSubmit,handleChange,errors,values}=useForm({
        initialValues:{
            name:"",
            age:""
        },
        onSubmit(values) {
            console.log(values)
        },
    })
   

    return <>
    <h1 className={styles.title}>Page2</h1>
    <Link to={"/"}>page1</Link>  

    <form onSubmit={handleSubmit}  >
            <div>
                {errors.name && <p style={{color:"red"}}>{errors.name}</p> }
                <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                
                
                />
            </div>

            <div>
            {errors.age && <p style={{color:"red"}}>{errors.age}</p> }

                <input
                type="age"
                name="age"
                value={values.age}
                onChange={handleChange}
                />
            </div>

            <button>save</button>
        </form>
    </>
}