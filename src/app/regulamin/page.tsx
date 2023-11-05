import React from 'react';
import { termsConditionsConfig } from '@/configs/termsConditionsConfig';

const page = () => {
  return (
    <div className="flex flex-col gap-8 px-4">
      <h1 className="font-bold text-5xl mx-auto">Regulamin</h1>
      {termsConditionsConfig.map((paragraph) => (
        <div key={paragraph.title} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-1 bg-orange h-[100]" />
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              {paragraph.title}
            </h2>
          </div>
          {paragraph.subtitle ? <p>{paragraph.subtitle}</p> : null}
          <div className="flex flex-col gap-4 px-4">
            {paragraph.content.map((contentItem, index) => (
              <p key={index}>
                <span className="font-semibold">
                  {contentItem.introduction}
                </span>{' '}
                {contentItem.text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
