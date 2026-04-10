import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p className="text-3xl text-blue-500 dark:text-white">soikat's code</p>
      <Link to="/customers" className="text-blue-500">
        Customers
      </Link>
    </div>
  );
};

export default Home;
