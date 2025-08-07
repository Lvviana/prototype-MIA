
function capturarMapa() {
  return scene.children.map(obj => ({
    nome: obj.name || "objeto",
    tipo: obj.geometry?.type || "desconhecido",
    posicao: obj.position.toArray(),
    escala: obj.scale.toArray(),
    rotacao: obj.rotation.toArray(),
    cor: obj.material?.color?.getHexString()
  }));
}

function enviarParaMia() {
  const mapa = capturarMapa();
  fetch('http://localhost:5000/mia', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mapa })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('resposta').textContent = data.resposta;
  });
}
