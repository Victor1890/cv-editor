import Image from "next/image";
import { Fragment } from "react";

const Nav = () => {
  return (
    <Fragment>
      <header className='text-black body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              stroke-linejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl text-black'>tailblocks</span>
          </a>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a href='#' className='mr-5 hover:text-black'>
              First Link
            </a>
            <a href='#' className='mr-5 hover:text-black'>
              Second Link
            </a>
            <a href='#' className='mr-5 hover:text-black'>
              Third Link
            </a>
            <a href='#' className='mr-5 hover:text-black'>
              Fourth Link
            </a>
          </nav>
          <button
            className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white'
            id='user-menu'
            aria-haspopup='true'
          >
            <span className='sr-only'>Open user menu</span>
            <Image
              width={34}
              height={34}
              className='h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Nav;
