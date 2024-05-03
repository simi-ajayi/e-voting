import Hero from "./Hero"
import Nominees from "./Nominees"
import SignOutButton from "./SignOutButton"


const Home = () => {
  return (
    <div>
        <SignOutButton/>
        <Hero />
        <Nominees />
    </div>
  )
}

export default Home