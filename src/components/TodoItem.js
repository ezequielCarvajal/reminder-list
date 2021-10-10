import '../styles/main.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        ✅
      </span>
      <p className={`${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        ⛔
      </span>
    </li>
  );
}

export { TodoItem };
