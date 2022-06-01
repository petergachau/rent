import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [apartment, setApartment] = useState('');
  // const [houseNo, setHouseNo] = useState('');
  // const [amount, setAmount] = useState('');
  // const [location, setLocation] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email ) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>fill your details</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Apartment name
          </label>
          <input
            type='text'
            className='form-input'
            id='apartment'
            // value={apartment}
            // onChange={(e) => setApartment(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='text' className='form-label'>
            House number
          </label>
          <input
            type='text'
            className='form-input'
            id='houseNo'
            // value={houseNo}
            // onChange={(e) => setHouseNo(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='amount' className='form-label'>
            amount
          </label>
          <input
            type='number'
            className='form-input'
            id='amount'
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='location' className='form-label'>
            location
          </label>
          <input
            type='text'
            className='form-input'
            id='location'
            // value={location}
            // onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
};
export default Login;
