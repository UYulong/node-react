import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'CMS-Admin',
          title: 'CMS-Admin',
          href: 'https://github.com/UYulong',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
