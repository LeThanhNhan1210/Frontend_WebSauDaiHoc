/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import ApplicationStep1 from './pages/ApplicationStep1';
import Dashboard from './pages/Dashboard';
import Security from './pages/Security';
import AuditLogs from './pages/AuditLogs';
import Verification from './pages/Verification';
import Approvals from './pages/Approvals';
import Analytics from './pages/Analytics';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="application/step-1" element={<ApplicationStep1 />} />
          
          {/* Admin Routes */}
          <Route path="admin/dashboard" element={<Dashboard role="admin" />} />
          <Route path="admin/security" element={<Security />} />
          <Route path="admin/audit-logs" element={<AuditLogs />} />
          <Route path="admin/approvals" element={<Approvals />} />
          <Route path="admin/analytics" element={<Analytics />} />
          
          {/* Candidate Routes */}
          <Route path="candidate/dashboard" element={<Dashboard role="candidate" />} />
          <Route path="candidate/application" element={<ApplicationStep1 />} />
          
          {/* Validator Routes */}
          <Route path="validator/dashboard" element={<Dashboard role="validator" />} />
          <Route path="validator/verification" element={<Verification />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
