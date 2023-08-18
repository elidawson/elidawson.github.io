import Header from './Header'
import About from './About'
import Links from './Links'
import '../stylesheets/App.css'

export default function App() {
  return (
    <>
      <Header />
      <div className="intro">
        <h1>Hi! I'm Eli Dawson</h1>
        <p>I'm a software developer and musician</p>
        <button className='button'>About Me</button>
      </div>
      <About />
      <Links />
    </>
  )
}
