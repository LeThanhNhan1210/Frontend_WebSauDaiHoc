import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { UserPlus, ArrowLeft, ShieldCheck, Mail, Phone, User } from 'lucide-react';

export default function Register() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple logic for demo: go to step 1 of application
    navigate('/application/step-1');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Info */}
      <div className="hidden md:flex md:w-1/3 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://storage.googleapis.com/static.antigravity.dev/b5094ebe-f2f9-454b-9a0e-be3994071cb9/input_file_1.png" 
            alt="HCMUE" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 p-12 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/static.antigravity.dev/b5094ebe-f2f9-454b-9a0e-be3994071cb9/input_file_0.png" 
                alt="HCMUE Logo" 
                className="w-12 h-12"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4">Đăng ký tài khoản</h1>
            <p className="text-lg text-blue-100 mb-8">
              Bắt đầu hành trình học tập tại HCMUE. Vui lòng cung cấp thông tin chính xác để khởi tạo hồ sơ.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="font-semibold">Bảo mật thông tin</h3>
                  <p className="text-sm text-blue-200">Thông tin cá nhân của bạn được bảo vệ nghiêm ngặt theo quy định.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="font-semibold">Xác thực Email</h3>
                  <p className="text-sm text-blue-200">Chúng tôi sẽ gửi thông báo quan trọng qua địa chỉ email đăng ký.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-xl"
        >
          <Link to="/login" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại đăng nhập
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tạo tài khoản mới</h2>
            <p className="text-gray-600">Vui lòng điền đầy đủ các thông tin bắt buộc dưới đây</p>
          </div>

          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên (như trong CCCD)</label>
              <div className="relative">
                <input type="text" required className="input-field pl-12" placeholder="NGUYỄN VĂN A" />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Số CCCD / Hộ chiếu</label>
              <input type="text" required className="input-field" placeholder="012345678901" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
              <div className="relative">
                <input type="tel" required className="input-field pl-12" placeholder="0901234567" />
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ Email</label>
              <div className="relative">
                <input type="email" required className="input-field pl-12" placeholder="example@email.com" />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
              <input type="password" required className="input-field" placeholder="••••••••" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu</label>
              <input type="password" required className="input-field" placeholder="••••••••" />
            </div>

            <div className="md:col-span-2">
              <div className="flex items-start">
                <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  Tôi đồng ý với các <Link to="/terms" className="text-primary hover:underline">Điều khoản sử dụng</Link> và <Link to="/privacy" className="text-primary hover:underline">Chính sách bảo mật</Link> của HCMUE.
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2 h-12">
                <UserPlus className="w-5 h-5" />
                <span>Đăng ký tài khoản</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
