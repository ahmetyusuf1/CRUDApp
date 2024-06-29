const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newUser = Object.fromEntries(formData.entries());

    addUser(newUser);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
      <div className="d-flex flex-column">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          className="form-control"
          type="text"
          required
        />
      </div>

      <div className="d-flex flex-column">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          className="form-control"
          type="number"
          required
        />
      </div>

      <div className="d-flex flex-column">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          className="form-control"
          type="email"
          required
        />
      </div>
      <div className="d-flex justify-content-center mt-1">
        <button className="btn btn-outline-light">Add User</button>
      </div>
    </form>
  );
};

export default Form;
