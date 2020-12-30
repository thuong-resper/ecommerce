import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@exmple.com",
    password: bcrypt.hashSync("qweqwe", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@exmple.com",
    password: bcrypt.hashSync("qweqwe", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@exmple.com",
    password: bcrypt.hashSync("qweqwe", 10),
  },
];

export default users;
