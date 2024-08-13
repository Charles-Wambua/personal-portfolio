import React from 'react';
import { green, red } from '@ant-design/colors';
import { Flex, Progress } from 'antd';
const Skillls = () => (
  <Flex gap="small" vertical>
   
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    
  </Flex>
);
export default Skillls;