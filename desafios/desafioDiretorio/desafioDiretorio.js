const fs = require("fs");
const path = require("path");

const contarArquivosEDiretorios = (diretorio) => {
  let arquivos = 0;
  let diretorios = 0;

  // Lê o conteúdo do diretório
  const conteudo = fs.readdirSync(diretorio);

  conteudo.forEach((item) => {
    const caminhoItem = path.join(diretorio, item);

    // Verifica se o item é um arquivo ou diretório
    if (fs.statSync(caminhoItem).isFile()) {
      arquivos++;
    } else {
      diretorios++;
      // Se for um diretório, chama recursivamente a função para contar os arquivos/diretórios dentro dele
      const { arquivos: arquivosSubDir, diretorios: diretoriosSubDir } =
        contarArquivosEDiretorios(caminhoItem);
      arquivos += arquivosSubDir;
      diretorios += diretoriosSubDir;
    }
  });

  return { arquivos, diretorios };
};

const calcularTamanhoDiretorio = (diretorio) => {
  let totalTamanhoBytes = 0;

  const conteudo = fs.readdirSync(diretorio);

  conteudo.forEach((item) => {
    const caminhoItem = path.join(diretorio, item);
    const stats = fs.statSync(caminhoItem);

    if (stats.isFile()) {
      totalTamanhoBytes += stats.size;
    } else if (stats.isDirectory()) {
      const subDirTamanho = calcularTamanhoDiretorio(caminhoItem);
      totalTamanhoBytes += subDirTamanho;
    }
  });

  return totalTamanhoBytes;
}

const formatarTamanho = (tamanhoBytes) => {
  const KB = (tamanhoBytes / 1024).toFixed(1);
  const MB = (KB / 1024).toFixed(1);
  const GB = (MB / 1024).toFixed(1);

  return {
    bytes: tamanhoBytes,
    kilobytes: KB,
    megabytes: MB,
    gigabytes: GB,
  };
}
const { arquivos, diretorios } = contarArquivosEDiretorios("C:\\Mateus");
console.log(`Total de arquivos: ${arquivos}`);
console.log(`Total de diretórios: ${diretorios}`);

const tamanhoBytes = calcularTamanhoDiretorio("C:\\Mateus");
const tamanhoFormatado = formatarTamanho(tamanhoBytes);

console.log(`Tamanho total: ${tamanhoFormatado.kilobytes} KB`);
console.log(`Tamanho total: ${tamanhoFormatado.megabytes} MB`);
console.log(`Tamanho total: ${tamanhoFormatado.gigabytes} GB`);