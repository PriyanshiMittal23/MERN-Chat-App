import React from 'react'
import GenderCb from './GenderCb'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gr'>
          SignUp
          <span className='text-cyan-400'> ChatApp</span>
        </h1>

        <form >
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className="input input-bordered input-info w-full max-w-xs h-8" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input input-bordered input-info w-full max-w-xs h-8" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs h-8" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full max-w-xs h-8" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Profile Pic</span>
            </label>
            <input type="file" placeholder="Upload profile pic" className='file-input file-input-bordered file-input-info w-full max-w-xs h-8' />
          </div>
          <GenderCb/>
          <a href="#" className='mt-2'>Already have an account? Login</a>
          <div className='btn btn-block btn-sm max-w-xs mt-5'>SignUp</div>
        </form>
      </div>
    </div>
  )
}

export default Register