const url = "https://api.coincap.io/v2";

async function getAssets() {
  try {
    let res = await fetch(`${url}/assets?limit=20`);
    res = await res.json();
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getAsset(coin) {
  try {
    let res = await fetch(`${url}/assets/${coin}`);
    res = await res.json();
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getAssetHistory(coin) {
  const now = new Date(); //Obtenemos la fecha de hoy
  const end = now.getTime(); //Con la propiedad getTime obtenemos el timeStamp del dia de hoy y lo guardamos en la variable end
  now.setDate(now.getDate() - 1); //actualizamos el valor de la variable now con el getdate y restandole 1 que significaria restandole un dia
  const start = now.getTime(); //Luego a es fecja del dia anteriro le obtenemos el timeStamp y lo guaramos en la variable start

  try {
    let res = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    res = await res.json();
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getMarkets(coin) {
  try {
    let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    res = await res.json();
    return res.data;
  } catch (error) {
    console.error("Error en el request");
  }
}

async function getExchange(id) {
  try {
    let res = await fetch(`${url}/exchanges/${id}`);
    res = await res.json();
    return res.data;
  } catch (error) {
    console.error("Error en el request");
  }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
