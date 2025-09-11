import './App.css';
import Header from '@/components/header/Header';
import { Separator } from '@/components/ui/separator';
import LatestPosts from '@/components/latestPosts/LatestPosts';

function App() {

  return (
    <>
      <Header />
      <Separator />
      <LatestPosts />
    </>
  )
}

export default App;