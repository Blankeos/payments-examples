export const PRODUCTS = [
  { id: "prod_7KA6xfdh18ZKF3XpcY20FI", name: "Watercolor Brush (Basic)", price: 10 },
  { id: "prod_1ZKeJqltCOKT6doLixE5k5", name: "Watercolor Brush (Profesional Set)", price: 20 },
  {
    id: "prod_3X9UBDHKDZdYE4cCMG8GYQ",
    name: "Watercolor Co Premium",
    price: 7,
    recurring: true,
  },
];

export function productById(id: string) {
  return PRODUCTS.find((product) => product.id === id);
}
