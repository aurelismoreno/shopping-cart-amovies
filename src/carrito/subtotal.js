const subtotal = () => {
  const template = `<div>subtotal</div>`;
  const sectionElement = document.createElement("section");
  sectionElement.innerHTML = template;
  return sectionElement;
};

export default subtotal;

const renderizado = () => {
  const container = document.querySelector("#container");
  container.appendChild(subtotal());
};
renderizado();
