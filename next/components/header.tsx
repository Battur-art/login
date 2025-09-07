// Header.jsx
export default function Header() {
  return (
    <header className='bg-white shadow-md text-black-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='#' className='text-2xl font-bold !no-underline !text-black'>
              Apple
            </a>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex space-x-8 text-white'>
            <a
              href='#'
              className='!no-underline !text-black hover:text-indigo-600 font-medium'
            >
              Home
            </a>
            <a
              href='#'
              className='!no-underline !text-black hover:text-indigo-600 font-medium'
            >
              About
            </a>
            <a
              href='#'
              className='!no-underline !text-black hover:text-indigo-600 font-medium'
            >
              Services
            </a>
            <a
              href='#'
              className='!no-underline !text-black hover:text-indigo-600 font-medium'
            >
              Contact
            </a>
          </nav>

          {/* Search + Button */}
          <div className='hidden md:flex items-center space-x-4'>
            <input
              type='text'
              placeholder='Search...'
              className='px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <button className='bg-black text-white px-4 py-1 rounded-md hover:bg-indigo-700 transition'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
