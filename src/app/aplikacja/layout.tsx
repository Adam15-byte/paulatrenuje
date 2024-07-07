import React from 'react';
import AppNavigationBar from './AppNavigationBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 mt-4">
      <AppNavigationBar />
      {children}
    </div>
  );
}
