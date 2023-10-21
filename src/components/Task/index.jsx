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
              <label className='checkbox-label'>{task.task}</label>
              
              <span>
                {/*Boton borrar tarea*/}
                <button className="btn-delete"
                  onClick={()=>onBorrarTarea(task.id)}
                  ><FaTrashAlt maxwidth='50%' color='white' />
                </button>
              </span>
              <span>
                {/*Boton compartir tarea*/}
                <button className="btn-share"
                  ><BsFillShareFill maxwidth='80%' color='white' />
                </button>
              </span>
              <span>
                {/*Boton copiar tarea*/}
                <button className="btn-clipboard"
                  ><FaRegClipboard maxwidth='100%' height='auto' color='white' />
                </button>
            </span>
          </div>

        </>
        
    );
  }

  export default Task;