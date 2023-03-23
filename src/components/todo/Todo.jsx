import React from 'react';

const Todo = ({isdone, title}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg h-72 ">
  <div className="card-body space-y-10">
    <div className="card-actions justify-end">
      <button className={isdone ?  "btn btn-outline btn-success" :  "btn btn-outline btn-warning"}>
        {isdone ? "Completed" : "Not Completed"}
      </button>
    </div>
    <p>{title}</p>
  </div>
</div>
        </div>
    );
};

export default Todo;