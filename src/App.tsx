import { useMemo, useState } from "react";
import { useCustomers } from "./hooks/useCustomers";

type Role = "ADMIN" | "MANAGER";

function App() {
  const { customers, loading, error } = useCustomers();
  const [selectedRole, setSelectedRole] = useState<Role>("ADMIN");

  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => c.role === selectedRole);
  }, [customers, selectedRole]);

  console.log(customers, "==");

  return <p className="text-3xl text-blue-500">zeller</p>;
}

export default App;
