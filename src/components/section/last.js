import { lazy } from "react"

const Last=()=>{
    return(
        <>
       <div className="last-is flex w-full h-screen mb-5">
        <div className="one w-1/2 ml-5 bg-center bg-cover bg-no-repeat mr-5">
           <h2 className="text-white pl-7 py-7 text-2xl font-extrabold">Iphone 15 Pro</h2>
           <h3 className="text-white pl-7  text-lg font-mono">Titanium.So Strong.So Light. So Pro</h3>
           <div className="meet ml-5">
                        <button className="hidden flex sm:flex bg-slate-100 py-4 px-8 text-base font-medium text-black mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full hover:bg-white">Learn More</button>
                        <button className="hidden flex sm:flex bg-slate-100 py-4 px-8 text-base font-medium text-black mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full hover:bg-white ml-3">Buy</button>
                        </div>
        </div>
        <div className="two w-1/2 ml-5 bg-center bg-cover bg-no-repeat mr-5">
        <h2 className="text-white pl-7 py-7 text-2xl font-extrabold">MacBook Pro</h2>
           <h3 className="text-white pl-7 text-lg font-mono">Mind Blowing.Head-Turning</h3>
           <div className="meet ml-5">
                        <button className="hidden flex sm:flex bg-slate-100 py-4 px-8 text-base font-medium text-black mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full hover:bg-white">Learn More</button>
                        <button className="hidden flex sm:flex bg-slate-100 py-4 px-8 text-base font-medium text-black mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full hover:bg-white ml-3">Buy</button>
                        </div>
        </div>
        
       </div>
        </>
    )
}
export default Last