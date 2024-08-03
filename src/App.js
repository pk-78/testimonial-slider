import './App.css';
import Testimonials from './components/Testimonials';
import reviews from "./data";

function App() {
  console.log(reviews);
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 text-center'>
      <h1 className='text-center font-bold capitalize text-4xl' >Our Testimonials</h1>
      <div className='bg-violet-400 h-[4px] w-[200px] mb-10 ' ></div>
      <Testimonials reviews={reviews} />
    </div>
  );
}

export default App;
