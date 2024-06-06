
const UserForm = () => {
  return (
    <form className="text-start">
      <h4 className="mb-5 text-center">User Form</h4>
      <div className="form-group mb-4">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          required/>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          required/>
      </div>
      <div className="form-group mb-4">
        <p className="mb-2">Activity</p>
        <div className="form-check">
          <input className="checkbox form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="form-check-input">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input className="checkbox form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
          <label className="form-check-label" htmlFor="form-check-input">
            No
          </label>
        </div>
      </div>
      <div className="form-group mb-4">
        <select className="form-select" aria-label="Default select example">
          <option selected>Role</option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="submit">Create</button>
      </div>
    </form>
  );
};

export default UserForm;