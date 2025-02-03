import pix from "../../public/my picture.jpg"

const Home = () => {
  return (
   <div>
      <div className="flex items-center bg-black m-3 p-20 rounded-lg justify-between">
      <div className="basis-1/2"><h4 className="mb-3">Welcome!</h4>
      <h2 className="text-3xl mb-3 text-justify">I am Temitope Oladeji, a junior software engineer eager to bulid innovative solutions and turn ideas into reality.with strong foundation in python, javascript and a knack fro solving problems.</h2>
      <button className="bg-indigo-500 p-3 mb-3 border-gray-300 rounded-full">See More</button>
      </div>
      
      <div >
        <img className="rounded-full w-70 h-70 object-cover" src={pix} alt="my pix" width={500} height={500}
         />
      </div>
      </div>
      <div className="flex">

      </div>
    </div>
  )
}

export default Home
