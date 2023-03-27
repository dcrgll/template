export default function sitemap() {
  const routes = [''].map((route) => ({
    url: `https://www.cargill.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes]
}
