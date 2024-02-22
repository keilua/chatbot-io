function getCurrentDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default (message) => (`
<div class="card-body shadow-lg p-3 mb-5 mx-5 bg-body-tertiary rounded mt-5">
  <div class="bot-picture">
    <img src="https://freesvg.org/img/1538298822.png" width="90px">
  </div>
  <h5 class="card-title">Bot Response</h5>
  <p class="card-text container-fluid">${message}</p>
  <span>${getCurrentDate()}</span>
</div>
`);
