
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Tweet from './Tweet'
import Post from './post'
import Post3 from './Post3'
import Trends from './Trends'

function App() {
  return (
    <>
      <div className='bg-black flex justify-center'>
        <div id='container1' className=' w-1/5 h-screen border-solid border-2 space-x-2'>
          <div className="Sidebar">
            <Sidebar src="images/Twitter.svg"/>
            <Sidebar src="images/Home-Fill.svg" name="Home"/>
            <Sidebar src="images/Explore.svg" name="Explore"/>
            <Sidebar src="images/Notifications.svg" name="Notification"/>
            <Sidebar src="images/Messages.svg" name="Messages"/>
            <Sidebar src="images/Bookmarks.svg" name="Bookmarks"/>
            <Sidebar src="images/Lists.svg" name="Listes"/>
            <Sidebar src="images/Profile.svg" name="Profile"/>
            <Sidebar src="images/More.svg" name="More"/>
          </div>
          <section id='boutontweet'>
            <button className='bg-blue-500 rounded-3xl h-12 w-28' >Tweet</button>
          </section>
          <div id='test' className='flex space-x-5'>
            <img src="images/Profile-Photo.svg" alt="" />
            <div>
              <h2 className='font-bold m-2 text-white'>Bradley Ortiz</h2>
              <p className='text-white'>@bradley_</p>
              <img src="images/Private.svg" alt="" />
              <img src="images/More-2.svg" alt="" />
            </div>
          </div>
        </div>
        <div id='' className=' border-solid border-2'>
          <Header/>
          <Tweet/>
          <Post/>
          <Post3/>

        </div>
        <div className='w-2/5 h-screen  border-solid border-2 border-white'>
          <input class="w-44 h-10 rounded-3xl border-solid border-2 border-black" type="text" placeholder="Serach Twitter"/>
          <Trends/>
        </div>
      </div>
    </>
  )
}

export default App
