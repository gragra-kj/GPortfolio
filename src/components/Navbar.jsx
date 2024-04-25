const Navbar = () => {
  return (
    <nav className='bg-grey-400 text-white mb-20'>
      <div className='px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a href="/" className="font-extrabold font-sans text-xl">PortFolio</a>
            <div className='flex md:ml-auto'>
              <div className='flex space-x-10 text-xl font-extrabold from-neutral-300'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Projects</a>
                <a href="">Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar