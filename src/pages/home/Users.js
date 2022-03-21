import useFetch from "../../hooks/useFetch";
import User from "./User";
const Users = () => {
const {data:users,loading,error} = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <>
      {loading && (
      <div className="loading text-center">Loading........Please wait! </div>
      )}
      { error && <div className="text-danger text-center"> {error}</div> }
      {users && <User users={users} title="All" />}
    </>
  );
};

export default Users;
