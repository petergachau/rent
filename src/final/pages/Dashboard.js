import { Link } from "react-router-dom";
import Products from "./Products";

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
      <Products/>
      {/* <Link to='/products' className="btn">products</Link> */}
    </section>
  );
};
export default Dashboard;
