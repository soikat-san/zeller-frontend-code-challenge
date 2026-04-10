export type Role = "ADMIN" | "MANAGER";

export type Customer = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type CustomersResponse = {
  listZellerCustomers: {
    items: Customer[];
  };
};
