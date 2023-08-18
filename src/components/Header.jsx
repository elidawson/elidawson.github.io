import '../stylesheets/Header.css'

export default function Header() {
  const navLinks = ['About Me', 'Projects', 'Links']
  
    return (
      <nav>
        {navLinks.map((link) => {
          return (
            <a 
              key={link}
              className='nav-link'
            >
              {link}
            </a>
          )
        })}
      </nav>
  )
}
