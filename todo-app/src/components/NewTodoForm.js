const NewTodoForm = ({ value, updateText, handleAction }) => {
    return (
      <label className="d-flex align-items-baseline justify-content-center">
        <input 
        className="mt-5 me-2 p-1"
          placehodler='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAction}>Add to do</button>
      </label>
    );
  };
  
  export default NewTodoForm;
  