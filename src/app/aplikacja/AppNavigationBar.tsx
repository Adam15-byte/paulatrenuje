'use client';

import { appNavigationConfig, iconParams } from '@/configs/appNavigationConfig';
import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const AppNavigationBar = () => {
  const pathname = usePathname();
  const [toggledItem, setToggledItem] = useState<string>('');
  return (
    <div className="max-w-60 w-full flex flex-col gap-1 mt-8">
      {appNavigationConfig.map((item) => {
        const isToggled = toggledItem.includes(item.path);
        return (
          <div className="w-full flex flex-col gap-1 text-sm" key={item.path}>
            <button
              className={cn(
                'w-full flex items-center justify-between rounded-lg bg-transparent text-black transition-all px-4 py-2 z-20',
                isToggled && 'bg-pink'
              )}
              onClick={() => {
                if (toggledItem === item.path) {
                  setToggledItem('');
                }
                setToggledItem(item.path);
              }}
            >
              <div className="flex gap-2">
                {item.icon}
                <div>{item.name}</div>
              </div>
              <ChevronDown
                {...iconParams}
                className={cn('transition-all', isToggled && 'rotate-180')}
              />
            </button>
            {item.children &&
              !!item.children.length &&
              isToggled &&
              item.children.map((child) => {
                console.log('child', child);
                const isPathActive = pathname.includes(child.path);
                return (
                  <Link
                    href={child.path}
                    key={child.path}
                    className={cn(
                      'w-full flex items-center justify-between rounded-lg bg-transparent text-black transition-all px-4 py-2 relative',
                      isPathActive && 'bg-pink'
                    )}
                  >
                    <div className="border-b border-l border-gray absolute bottom-4 left-6  w-4 h-12 rounded-bl z-10" />
                    <div className="flex gap-2 ml-7">
                      {!!child.icon && child.icon}
                      <div>{child.name}</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default AppNavigationBar;
