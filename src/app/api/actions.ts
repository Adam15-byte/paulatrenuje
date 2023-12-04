'use server';

import crypto from 'crypto';

export const generateTransactionId = () => {
  const uuid = crypto.randomUUID();
  return uuid;
};