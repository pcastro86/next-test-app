export async function checkNewData() {
  const res = await fetch("https://chequeado.github.io/vivo-api/eventos.json");
  let new_data = await res.json();

  return { new_data: new_data };
}
