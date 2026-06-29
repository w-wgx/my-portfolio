'use client';

import { useEffect, useState, type ComponentProps, type ElementType } from 'react';

export function ClientIcon<T extends ElementType>({
  as: Icon,
  ...props
}: {
  as: T;
} & ComponentProps<T>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Icon {...props} />;
}