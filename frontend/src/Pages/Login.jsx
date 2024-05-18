import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gr'>
                Login 
                <span className='text-cyan-400'> ChatApp</span>
            </h1>
            <form>
              <div>
                <label className='label p-2'>
                  <span className='label-text text-base'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" class="input input-bordered input-info w-full max-w-xs" />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='label-text text-base'>Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs" />
              </div>
              <a href="#" className='mt-2'>Dont have an account? register</a>
              <div className='btn btn-block btn-sm max-w-xs mt-5'>Login</div>
            </form>
        </div>
    </div>
  )
}

export default Login