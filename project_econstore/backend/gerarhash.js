const bcrypt = require('bcrypt');

async function gerarHash() {
  const senha = 'ola3';
  const saltRounds = 10;

  try {
    const hash = await bcrypt.hash(senha, saltRounds);
    console.log('Hash gerado:', hash);
  } catch (error) {
    console.error('Erro ao gerar o hash:', error);
  }
}

gerarHash();