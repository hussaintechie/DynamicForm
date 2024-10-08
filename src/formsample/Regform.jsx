import { useState } from 'react';

export const Regform = () => {
  const [user, setUser] = useState({
    name: "raj hussain",
    age: 21,
    gender: "male",
    ismarried: true,
    country: "india",
    bio: "Tell about yourself"
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marriage status</td>
            <td>{user.ismarried ? "Married" : "Not married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form>
        <input
          type='text'
          placeholder='Enter Your Full Name'
          name='name'
          onChange={handleChange}
          value={user.name}
        />
        <input
          type='text'
          placeholder='Enter Your Age'
          name='age'
          onChange={handleChange}
          value={user.age}
        />
        <div className="gender">
          <label htmlFor="Male">
            <input
              type='radio'
              name='gender'
              onChange={handleChange}
              checked={user.gender === "male"}
              value="male"
            /> Male
          </label>
          <label htmlFor="Female">
            <input
              type='radio'
              name='gender'
              onChange={handleChange}
              checked={user.gender === "female"}
              value="female"
            /> Female
          </label>
        </div>
        <label htmlFor="ismarried">
          <input
            type='checkbox'
            name='ismarried'
            onChange={handleChange}
            checked={user.ismarried}
          /> Is married
        </label>
        <div className="select">
          <label>Select Country</label>
          <select name="country" onChange={handleChange} value={user.country}>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
        </div>
        <textarea
          name="bio"
          cols={30}
          rows={5}
          placeholder='Tell about yourself'
          onChange={handleChange}
          value={user.bio}
        ></textarea>
      </form>
    </>
  );
};
