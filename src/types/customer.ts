export type Customer = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "MANAGER";
};

export type CustomersResponse = {
  listZellerCustomers: {
    items: Customer[];
  };
};
