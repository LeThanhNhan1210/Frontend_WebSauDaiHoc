import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, UserPlus, Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [cccd, setCccd] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = cccd;
    const pass = password;

    // 1. Applicant (Thí sinh)
    if (user === '079123456789' && pass === 'Candidate@2024') {
      navigate('/candidate/dashboard', { state: { role: 'candidate', username: 'Thí sinh (079123456789)' } });
    }
    // 2. Reviewer (Chuyên viên Tuyển sinh)
    else if (user === 'reviewer_dhsp_01' && pass === 'Reviewer@Secure') {
      navigate('/validator/dashboard', { state: { role: 'reviewer', username: 'Chuyên viên TN (reviewer_dhsp_01)' } });
    }
    // 3. Validator (Chuyên viên Thẩm định)
    else if (user === 'validator_dhsp_01' && pass === 'Validator@Verify') {
      navigate('/validator/dashboard', { state: { role: 'validator', username: 'Thẩm định viên (validator_dhsp_01)' } });
    }
    // 4. Approver (Trưởng phòng)
    else if (user === 'approver_dhsp_head' && pass === 'Approver@Final') {
      navigate('/admin/approvals', { state: { role: 'approver', username: 'Trưởng phòng (approver_dhsp_head)' } });
    }
    // 5. Viewer (Ban Giám hiệu)
    else if (user === 'bgh_viewer_01' && pass === 'Leader@Dashboard') {
      navigate('/admin/analytics', { state: { role: 'viewer', username: 'Ban Giám hiệu (bgh_viewer_01)' } });
    }
    // 6. Admin System (Quản trị Danh mục)
    else if (user === 'admin_system_01' && pass === 'Admin@System') {
      navigate('/admin/dashboard', { state: { role: 'admin', username: 'Quản trị Hệ thống (admin_system_01)' } });
    }
    // 6b. Admin Security (Quản lý Tài khoản)
    else if (user === 'admin_security_01' && pass === 'Admin@Security') {
      navigate('/admin/security', { state: { role: 'admin', username: 'Quản lý Tài khoản (admin_security_01)' } });
    }
    // 7. Audit (Kiểm tra Nhật ký)
    else if (user === 'auditor_dhsp_01' && pass === 'Audit@Trace') {
      navigate('/admin/audit-logs', { state: { role: 'auditor', username: 'Kiểm toán viên (auditor_dhsp_01)' } });
    }
    // Fallback for demo
    else if (pass === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/candidate/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Image and Info */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/hcmue/1200/1200" 
            alt="HCMUE" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
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
                src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/30/Logo_HCMUE.png/200px-Logo_HCMUE.png" 
                alt="HCMUE Logo" 
                className="w-16 h-16"
                referrerPolicy="no-referrer"
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
              src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/30/Logo_HCMUE.png/200px-Logo_HCMUE.png" 
              alt="HCMUE Logo" 
              className="w-16 h-16 mx-auto mb-4"
              referrerPolicy="no-referrer"
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

          <p className="mt-8 text-center text-sm text-gray-500">
            &copy; 2026 Trường Đại học Sư phạm TP. Hồ Chí Minh. <br />
            Phát triển bởi Phòng Công nghệ Thông tin.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
