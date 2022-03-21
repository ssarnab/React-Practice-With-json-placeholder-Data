import { Link } from "react-router-dom";
const User = ({ users,title }) => {
  return (
    <div className="row">
        <h3 className="text-center py-3">{title} users List</h3>
        {users &&
          users.map((user) => {
            return <div className="col-md-6 p-1" key={user.id}>
               <div className="user m-1 px-3 py-3 shadow bg-body rounded">
              
                  <h5 className="d-inline"> {user.name}</h5> - <span> {user.username}</span>
                  <p> {user.email}</p>
                  <h6>
                      {user.address.street},
                      {user.address.suite},
                      {user.address.city}
                  </h6>
                  <Link to={'posts/'+user.id} className="btn btn-sm btn-secondary">All Post of {user.username}</Link>
               </div>
             </div>;
          })}
    </div>
  );
};

export default User;
