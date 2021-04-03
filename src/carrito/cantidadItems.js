const cantidadItems = () => {
  const template = `
  <div>
    <h2 class="cantidadItems-interno">Carrito de Compra</h2>
    <div class="cantidadItems-interno"> n items en su carrito</div>
  </div>`;
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("cantidadItems");
  wrapperElement.innerHTML = template;
  return wrapperElement;
};

export default cantidadItems;
