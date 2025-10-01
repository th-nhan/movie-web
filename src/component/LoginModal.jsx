

const Login = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onCloseLogin();
        }
    }
  return (
    <div onClick={handleOverlayClick} className='fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50'>
        <div className="w-[800px] h-[600px] bg-white rounded-lg flex">
            <div className="bg-login w-[400px] h-full relative bg-cover bg-center rounded-l-lg">
                <div className="absolute bottom-8 left-8">
                    <h1 className='text-white text-4xl font-extrabold '>LÀNG PHIM</h1>
                </div>
            </div>
            <div className="w-[400px] h-full bg-white rounded-r-lg ">
                <div className="text-black flex flex-col justify-center items-center h-full p-8">
                    <h2 className='font-extrabold text-4xl mb-8 text-red-700 uppercase'>Đăng nhập</h2>
                    <input type="text" placeholder='Tên đăng nhập...'  className='mb-2 w-full p-4  border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition duration-300'/>
                    <input type="text" placeholder='Mật khẩu...'  className='mb-2 w-full p-4  border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition duration-300'/>
                    <input type="button" value="Login" className='w-full py-3  text-lg font-semibold text-white bg-red-700 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-[1.01]' />
                    <a href="" className='w-full text-black text-right pr-2 py-2 hover:text-red-700 '>Quên mật khẩu</a>

                    <p className='text-center w-full mt-8'>Chưa có tài khoản, <a href="" className='text-red-700'>đăng ký tại đây!</a> </p>
                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login