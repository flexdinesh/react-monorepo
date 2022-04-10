import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[960px] px-4">{children}</div>;
}
