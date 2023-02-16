const NewTodoForm = ({ value, updateText, handleAction }) => {
  const handleKeypress = e => {
  if (e.code === "Enter") {
    handleAction();
  }
};
    return (
      <label className="d-flex align-items-baseline justify-content-center">
        <input 
        className="mt-5 me-2 p-1"
          placehodler='new todo'
          value={value}
          onKeyPress={handleKeypress}
          onChange={(e) => updateText(e.target.value)}
        />
        <button className="btn btn-info text-light"  onClick={handleAction}>Add to do</button>
      </label>
    );
  };
  
  export default NewTodoForm;
  