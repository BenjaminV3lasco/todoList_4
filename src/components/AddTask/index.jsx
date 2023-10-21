import Input from "../AddInput";
import Button from "../AddButton";
import {FaCheck} from 'react-icons/fa'

export default function AddTask(props) {
  const {task,handleSubmit, handleChange} = props;
  return (
    //<Input>
      <form className= 'formulario' onSubmit={handleSubmit}>
        <input
        className="input"
        type="text" 
        onChange = {handleChange}
        value={task}
        />
        <button
        className="btn"
        type="submit"
        onClick = {handleSubmit}
        ><FaCheck maxwidth='100%' height='auto' color='white'/>
        </button>
    </form>
    //</Input>
      
  )
}
