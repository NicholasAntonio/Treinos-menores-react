import { Sun } from 'lucide-react';

export default  function Header(){
    return(
        <header className="w-full h-14 flex justify-between items-center p-4  bg-zinc-900">
            <h1 className="text-xl text-white font-sans font-bold ">React Form App</h1>
            <Sun color='white' size={24} className='cursor-pointer'/>
        </header>
    )
}