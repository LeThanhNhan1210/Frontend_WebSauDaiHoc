import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, UserPlus, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import bgHCMUE from '../lib/img/nen_sp.jpg';
import logoHCMUE from '../lib/img/SuPham.png';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [cccd, setCccd] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleQuickLogin = (roleType: string) => {
    switch(roleType) {
      case 'reviewer':
        navigate('/reviewer/dashboard', { state: { role: 'reviewer', username: 'Chuyên viên TN (Test)' } });
        break;
      case 'validator':
        navigate('/validator/dashboard', { state: { role: 'validator', username: 'Thẩm định viên (Test)' } });
        break;
      case 'approver':
        navigate('/admin/approvals', { state: { role: 'approver', username: 'Trưởng phòng (Test)' } });
        break;
      case 'viewer':
        navigate('/viewer/dashboard', { state: { role: 'viewer', username: 'Ban Giám hiệu (Test)' } });
        break;
      case 'admin':
        navigate('/admin/dashboard', { state: { role: 'admin', username: 'Quản trị viên (Test)' } });
        break;
      case 'auditor':
        navigate('/admin/audit-logs', { state: { role: 'auditor', username: 'Kiểm toán viên (Test)' } });
        break;
      default:
        navigate('/candidate/dashboard', { state: { role: 'candidate', username: 'Thí sinh (Test)' } });
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = cccd.toLowerCase();

    // Phân luồng đăng nhập dựa vào từ khóa trong username (để dễ demo)
    if (user.includes('reviewer')) {
       navigate('/reviewer/dashboard', { state: { role: 'reviewer', username: 'Chuyên viên TN (' + cccd + ')' } });
    } 
    else if (user.includes('validator') || user.includes('thamdinh')) {
       navigate('/validator/dashboard', { state: { role: 'validator', username: 'Thẩm định viên (' + cccd + ')' } });
    } 
    else if (user.includes('approver') || user.includes('truongphong')) {
       navigate('/admin/approvals', { state: { role: 'approver', username: 'Trưởng phòng (' + cccd + ')' } });
    } 
    else if (user.includes('viewer') || user.includes('bgh')) {
       navigate('/viewer/dashboard', { state: { role: 'viewer', username: 'Ban Giám hiệu (' + cccd + ')' } });
    } 
    else if (user.includes('admin')) {
       navigate('/admin/dashboard', { state: { role: 'admin', username: 'Quản trị viên (' + cccd + ')' } });
    } 
    else if (user.includes('auditor') || user.includes('kiemtoan')) {
       navigate('/admin/audit-logs', { state: { role: 'auditor', username: 'Kiểm toán viên (' + cccd + ')' } });
    } 
    else {
       // Mặc định cho Thí sinh
       navigate('/candidate/dashboard', { state: { role: 'candidate', username: cccd ? 'Thí sinh (' + cccd + ')' : 'Nguyễn Văn A' } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Image and Info */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={bgHCMUE} 
            alt="HCMUE" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-12 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <img 
                src={logoHCMUE}
                alt="HCMUE Logo" 
                className="w-16 h-16"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Hệ thống Tuyển sinh <br /> Sau đại học - HCMUE
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-md">
              Chào mừng bạn đến với cổng thông tin tuyển sinh chính thức của Trường Đại học Sư phạm TP. Hồ Chí Minh.
            </p>
            <div className="flex items-center space-x-4 text-blue-200">
              <ShieldCheck className="w-6 h-6" />
              <span>Hệ thống bảo mật & tin cậy</span>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="md:hidden text-center mb-8">
            <img 
              src={logoHCMUE}
              alt="HCMUE Logo" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-primary">Tuyển sinh Sau đại học</h2>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Đăng nhập</h2>
            <p className="text-gray-600">Vui lòng nhập thông tin tài khoản của bạn</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Số CCCD / Hộ chiếu</label>
              <input 
                type="text" 
                required
                value={cccd}
                onChange={(e) => setCccd(e.target.value)}
                className="input-field"
                placeholder="Nhập số CCCD hoặc Hộ chiếu"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <Link to="/forgot-password" size="sm" className="text-sm text-primary hover:underline">Quên mật khẩu?</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</label>
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2 h-12">
              <LogIn className="w-5 h-5" />
              <span>Đăng nhập</span>
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Hoặc</span>
              </div>
            </div>

            <Link 
              to="/register" 
              className="w-full flex items-center justify-center space-x-2 h-12 border-2 border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              <span>Đăng ký tài khoản mới</span>
            </Link>
          </form>

          {/* Quick Demo Login Panel */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Bảng điều khiển nhanh (Dành cho Test)</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              <button type="button" onClick={() => handleQuickLogin('admin')} className="text-xs py-2 px-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">Quản trị Hệ thống</button>
              <button type="button" onClick={() => handleQuickLogin('viewer')} className="text-xs py-2 px-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">Ban Giám hiệu</button>
              <button type="button" onClick={() => handleQuickLogin('approver')} className="text-xs py-2 px-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">Trưởng phòng</button>
              <button type="button" onClick={() => handleQuickLogin('validator')} className="text-xs py-2 px-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">Thẩm định viên</button>
              <button type="button" onClick={() => handleQuickLogin('reviewer')} className="text-xs py-2 px-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">Chuyên viên</button>
              <button type="button" onClick={() => handleQuickLogin('candidate')} className="text-xs py-2 px-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors">Thí sinh</button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            &copy; 2026 Trường Đại học Sư phạm TP. Hồ Chí Minh. <br />
            Phát triển bởi Phòng Công nghệ Thông tin.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
