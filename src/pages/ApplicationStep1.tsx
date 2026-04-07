import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, MapPin, Phone, Mail, Calendar, CreditCard, ArrowRight, ArrowLeft, Upload, FileText } from 'lucide-react';

export default function ApplicationStep1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cccd: '012345678901',
    fullName: 'NGUYỄN VĂN A',
    dob: '1995-10-12',
    gender: 'Nam',
    phone: '0901234567',
    email: 'nguyenvana@gmail.com',
    address: '123 Lê Lợi, Quận 1, TP. Hồ Chí Minh',
    province: 'TP. Hồ Chí Minh',
    district: 'Quận 1',
    ward: 'Phường Bến Nghé'
  });

  const steps = [
    { id: 1, name: 'Thông tin cá nhân', status: 'current' },
    { id: 2, name: 'Trình độ đào tạo', status: 'upcoming' },
    { id: 3, name: 'Hồ sơ đính kèm', status: 'upcoming' },
    { id: 4, name: 'Thanh toán lệ phí', status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex-1 relative">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    step.status === 'current' ? 'bg-primary text-white' : 
                    step.status === 'complete' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.id}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${
                    step.status === 'current' ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="bg-primary p-6 text-white">
            <h2 className="text-xl font-bold">Bước 1: Thông tin định danh</h2>
            <p className="text-blue-100 text-sm">Vui lòng kiểm tra kỹ thông tin cá nhân của bạn</p>
          </div>

          <form className="p-8 space-y-8">
            {/* Personal Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex items-center space-x-2 text-primary font-semibold border-b pb-2">
                <User className="w-5 h-5" />
                <span>Thông tin cơ bản</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số CCCD / Hộ chiếu</label>
                <div className="relative">
                  <input 
                    type="text" 
                    readOnly 
                    value={formData.cccd}
                    className="input-field bg-gray-50 cursor-not-allowed pl-12" 
                  />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="input-field" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngày sinh</label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    className="input-field pl-12" 
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Giới tính</label>
                <select 
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="input-field"
                >
                  <option>Nam</option>
                  <option>Nữ</option>
                  <option>Khác</option>
                </select>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex items-center space-x-2 text-primary font-semibold border-b pb-2">
                <Phone className="w-5 h-5" />
                <span>Thông tin liên lạc</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="input-field pl-12" 
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-field pl-12" 
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ thường trú</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="input-field pl-12" 
                  />
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tỉnh / Thành phố</label>
                <select className="input-field">
                  <option>TP. Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Xã / Phường</label>
                <select className="input-field">
                  <option>Phường Bến Nghé</option>
                  <option>Phường Đa Kao</option>
                  <option>Phường Tân Định</option>
                </select>
              </div>
            </div>

            {/* Document Upload Section */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-2 text-primary font-semibold border-b pb-2">
                <Upload className="w-5 h-5" />
                <span>Hồ sơ đính kèm (PDF)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-primary transition-colors">
                  <label className="block cursor-pointer">
                    <span className="block text-sm font-medium text-gray-700 mb-2">Bằng tốt nghiệp Đại học</span>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 text-primary rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <input type="file" accept=".pdf" className="hidden" id="diploma-upload" />
                        <label htmlFor="diploma-upload" className="text-xs text-primary font-bold hover:underline cursor-pointer">Chọn tệp PDF...</label>
                        <p className="text-[10px] text-gray-400">Dung lượng tối đa 5MB</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-primary transition-colors">
                  <label className="block cursor-pointer">
                    <span className="block text-sm font-medium text-gray-700 mb-2">Bảng điểm Đại học</span>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 text-primary rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <input type="file" accept=".pdf" className="hidden" id="transcript-upload" />
                        <label htmlFor="transcript-upload" className="text-xs text-primary font-bold hover:underline cursor-pointer">Chọn tệp PDF...</label>
                        <p className="text-[10px] text-gray-400">Dung lượng tối đa 5MB</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-primary transition-colors">
                  <label className="block cursor-pointer">
                    <span className="block text-sm font-medium text-gray-700 mb-2">Chứng chỉ Ngoại ngữ</span>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 text-primary rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <input type="file" accept=".pdf" className="hidden" id="lang-upload" />
                        <label htmlFor="lang-upload" className="text-xs text-primary font-bold hover:underline cursor-pointer">Chọn tệp PDF...</label>
                        <p className="text-[10px] text-gray-400">Dung lượng tối đa 5MB</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-primary transition-colors">
                  <label className="block cursor-pointer">
                    <span className="block text-sm font-medium text-gray-700 mb-2">Sơ yếu lý lịch</span>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 text-primary rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <input type="file" accept=".pdf" className="hidden" id="cv-upload" />
                        <label htmlFor="cv-upload" className="text-xs text-primary font-bold hover:underline cursor-pointer">Chọn tệp PDF...</label>
                        <p className="text-[10px] text-gray-400">Dung lượng tối đa 5MB</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-8 border-t">
              <button 
                type="button"
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Hủy bỏ</span>
              </button>
              <button 
                type="button"
                onClick={() => navigate('/candidate/dashboard')}
                className="flex items-center space-x-2 px-8 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
