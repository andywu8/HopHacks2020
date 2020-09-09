import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <select name="Activity" id="activity">
        <option value="Select an Activity">Select an Activity</option>
          <option value="School">School</option>
          <option value="Cooking">Cooking</option>
          <option value="Learning">Learning</option>
          <option value="Relaxing">Relaxing</option>
          <option value="Family Time">Family Time</option>
        </select>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Activity"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Add Caption..."
          rows="2"
        />
        <input type="file" id="myFile" name="filename"/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
