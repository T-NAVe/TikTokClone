import './App.css'
import { Route } from 'wouter'
import VideoFeed from './components/VideoFeed'
import Upload from './pages/Upload'

function App () {
  return (
    <div className='App'>
      <main>
        <Route path='/'>
          <VideoFeed />
        </Route>
        <Route path='/upload'>
          <Upload />
        </Route>
      </main>
    </div>
  )
}

export default App
