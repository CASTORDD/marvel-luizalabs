export const isMobile = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 480) return true
  }
  return false
}
