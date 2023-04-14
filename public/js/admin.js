const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;
  //console.log(prodId, csrf);
  const productElment = btn.closest("article");
  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((message) => {
      productElment.remove();
      console.log(message);
    })
    .catch((err) => console.log(err));
};
