export const floatToBRL = (float) => {
  if (float === null) return 'R$ -';
  const valorFormatado = Number(float).toFixed(2).replace('.', ',');
  return `R$ ${valorFormatado}`;
};
