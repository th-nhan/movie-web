import { FaEye,FaEyeSlash } from "react-icons/fa"
import { useState } from 'react'; 

const Login = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleLogin = (e) => {
        e.preventDefault();
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
                    <form onSubmit={handleLogin} className="text-black flex flex-col justify-center items-center h-full p-8">
                        <h2 className='font-extrabold text-4xl mb-8 text-red-700 uppercase'>Đăng nhập</h2>
                        <input type="text" placeholder='Tên đăng nhập...' name="username"
                            className='mb-2 w-full p-4  border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition duration-300' />
                        <div className="w-full flex relative items-center">
                            <input type={showPassword ? 'text' : 'password'}
                                placeholder='Mật khẩu...'
                                name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='mb-2 w-full p-4   border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition duration-300' />
                            <button type="button" className="absolute right-0 mr-4" onClick={toggleShowPassword}> 
                                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>

                        </div>
                        <input type="submit" value="Login" 
                            className='w-full py-3  text-lg font-semibold text-white bg-red-700 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-[1.01]' />
                        <a href="" className='w-full text-black text-right pr-2 py-2 hover:text-red-700 '>Quên mật khẩu</a>

                        <p className='text-center w-full mt-8'>Chưa có tài khoản, <a href="" className='text-red-700'>đăng ký tại đây!</a> </p>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login