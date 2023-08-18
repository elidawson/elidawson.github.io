export default function Links() {
  const links = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/elidawson/'
    },
    {
      title: 'GitHub',
      href: 'https://github.com/elidawson'
    },
    {
      title: 'Medium',
      href: 'https://medium.com/@elidawson'
    }
  ]

  return (
    <>
      {links.map((link) => {
        return (
          <a href={link.href} key={link.title}>{link.title}</a>
        )
      })}
    </>
  )
}
