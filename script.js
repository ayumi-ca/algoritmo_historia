function escolherPorta(porta) {
  const storyDiv = document.getElementById('story');
  const returnBtn = document.getElementById('return-button');

  if (porta === 'esquerda') {
    storyDiv.innerHTML = `
      <h2>Porta da Esquerda</h2>
      <p>Ao atravessar a porta, você encontra um corredor estreito cheio de símbolos antigos que brilham levemente. Você sente uma energia estranha, como se estivesse sendo observado. Depois de caminhar por alguns minutos, você chega a um salão com um pedestal no centro.</p>
      <p>Em cima do pedestal, há um livro flutuante. Ao tocá-lo, você é transportado para uma floresta mágica, onde criaturas falantes te dão as boas-vindas. Você decide explorar e acaba se tornando o guardião daquele reino encantado.</p>
      <p><strong>Final: Guardião do Reino Esquecido 🌿</strong></p>
    `;
  } else if (porta === 'direita') {
    storyDiv.innerHTML = `
      <h2>Porta da Direita</h2>
      <p>Você abre a porta e encontra uma escadaria que desce até uma caverna iluminada por cristais. O som da água fica mais forte e você logo encontra uma cachoeira subterrânea de tirar o fôlego.</p>
      <p>Do outro lado da caverna, uma criatura ancestral aguarda. Ela testa sua coragem com enigmas antigos. Ao resolvê-los, você ganha acesso ao conhecimento de eras passadas e se torna um sábio muito respeitado pelo povo da superfície.</p>
      <p><strong>Final: O Sábio da Caverna das Eras 🔮</strong></p>
    `;
  }

  returnBtn.style.display = 'block';
}

function reiniciar() {
  const storyDiv = document.getElementById('story');
  const returnBtn = document.getElementById('return-button');

  storyDiv.innerHTML = `
    <p>Você acorda em uma sala escura, iluminada apenas por tochas nas paredes. Diante de você, há duas portas antigas: uma à esquerda, com inscrições misteriosas, e outra à direita, com um leve som de água corrente.</p>
    <button class="choice-button" onclick="escolherPorta('esquerda')">Entrar na porta da esquerda</button>
    <button class="choice-button" onclick="escolherPorta('direita')">Entrar na porta da direita</button>
  `;

  returnBtn.style.display = 'none';
}
