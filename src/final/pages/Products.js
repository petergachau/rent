import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <section className='section'>
      <div className='card'>
        carlendar
        <input type='date'></input>
      </div>
      <form className='form' >
        <h5>fill your details</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='text' className='form-label'>
            month
          </label>
          <input
            type='text'
            className='form-input'
            id='email'
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
       <div className='buttons'>
         <button type='submit' style={{color:'black', fontSize:'1.3rem'}} className='btn btn-block'>
          submit
        </button>
        <button type='submit' style={{color:'black', fontSize:'1.3rem'}} className='btn btn-block'>
          get reciept
        </button>
       </div>
        
      </form>
            {/* <Link to='/products' className="btn">products</Link> */}

    </section>
  );
};

export default Products;
