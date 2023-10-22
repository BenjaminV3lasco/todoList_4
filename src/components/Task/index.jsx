import styles from './styles.modules.scss'
import {BsFillShareFill} from 'react-icons/bs'
import {FaTrashAlt} from 'react-icons/fa'
import {FaRegClipboard} from 'react-icons/fa'

function Task (props) {
  const {task,onBorrarTarea} = props;
    return(
        <>
          <div className="contenedor_tarea" id={task.id}>
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.task)} />   
              <p>{task.task}</p>
              <span>
                {/*Boton borrar tarea*/}
                <button className="btn-delete"
                  onClick={()=>onBorrarTarea(task.id)}
                  ><FaTrashAlt maxwidth='50%' color='white'/>
                </button>
              </span>
              <span>
                {/*Boton compartir tarea*/}
                <button className="btn-share"
                  ><BsFillShareFill  maxwidth='50%' color='white' />
                </button>
              </span>
              <div>
                {/*Boton copiar tarea*/}
                <button className="btn-clipboard"
                  ><FaRegClipboard position='absolute' color='white' />
                </button>
            </div>
          </div>

        </>
        
    );
  }

  export default Task;