export const formatDate = (date: Date) => {
  const nd = new Date(date)
  const dp = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(nd)

  return dp.replace('de', '')
}
