import React, { useState } from "react";
import axios from "axios";
import Color from './Color';
import EditMenu from './EditMenu';

const ColorList = (props) => {
  const { colors, editing, toggleEdit, saveEdit, deleteColor } = props;
  const [ editColor, setEditColor] = useState({ color: "", code: { hex: "" }});

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} setEditColor={setEditColor} color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)}
      </ul>
      
      {editing && <EditMenu editColor={editColor} setEditColor={setEditColor} toggleEdit={toggleEdit} saveEdit={saveEdit}/>}
    </div>
  );
};

export default ColorList;

console.log(e)
axiosWithAuth()
  .put(`/colors/${colorToEdit.id}`, colorToEdit)
  .then(res=>{
    updateColors([res.data]);
  })
  .catch(err=>{
    console.log(err);
    })
    console.log(colors)
};

const deleteColor = color => {
  axiosWithAuth()
     .delete(`/colors/${colorToEdit.id}`)
     .then(res=> {
       updateColors(res.data);
     })
     .catch(err=>{
       console.log(err);
     })
};

console.log(colorToEdit)

return (
  <div className="colors-wrap">
    <p>colors</p>
    <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }
  </div>
  );
};

export default ColorList;