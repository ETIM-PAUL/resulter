import React from 'react'
const AddFormButton = ({onAdd,holder}) => {
    return (
        <div>
          <button 
          class="btn btn-primary" 
          style={{}} onClick={onAdd}>{holder}
          </button>
        </div>
    )
}

export default AddFormButton