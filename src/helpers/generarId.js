export const generarId = () => {
  const radom = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return radom + fecha;
};
