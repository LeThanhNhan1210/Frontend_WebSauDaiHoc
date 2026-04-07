import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, MapPin, Shield, Edit2, Camera, ShieldCheck } from 'lucide-react';

export default function CandidateProfile() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Thông tin cá nhân</h1>
          <p className="text-gray-500">Quản lý tài khoản và thông tin liên hệ của bạn</p>
        </div>
        <button className="btn-primary flex items-center space-x-2 bg-cerulean hover:bg-blue-800">
          <Edit2 className="w-4 h-4" />
          <span>Cập nhật thông tin</span>
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl font-bold text-gray-400 overflow-hidden shadow-inner">
              NVA
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-gray-100 text-gray-600 hover:text-primary transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Nguyễn Văn A</h2>
          <p className="text-gray-500 mb-6">Thí sinh tự do</p>
          
          <div className="w-full pt-6 border-t border-gray-100 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Trạng thái xác thực</span>
              <span className="inline-flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-md font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Đã xác thực CCCD</span>
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Ngày đăng ký</span>
              <span className="text-gray-900 font-medium">12/10/2026</span>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Số CCCD / Hộ chiếu</label>
                <div className="flex items-center space-x-3 text-gray-900 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span>079123456789</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Họ và tên</label>
                <div className="flex items-center space-x-3 text-gray-900 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <User className="w-5 h-5 text-gray-400" />
                  <span>Nguyễn Văn A</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Địa chỉ Email</label>
                <div className="flex items-center space-x-3 text-gray-900 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span>nva123@example.com</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Số điện thoại</label>
                <div className="flex items-center space-x-3 text-gray-900 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>0901234567</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Địa chỉ thường trú</label>
                <div className="flex items-center space-x-3 text-gray-900 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6">Bảo mật tài khoản</h3>
            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
              <div>
                <h4 className="font-bold text-gray-900">Mật khẩu đăng nhập</h4>
                <p className="text-sm text-gray-500 mt-1">Cập nhật lần cuối: 15 ngày trước</p>
              </div>
              <button className="px-4 py-2 text-sm font-bold text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                Đổi mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
