import { Space } from 'antd';
import { InputField } from './Input';
import { Window } from './Window';

export function Chat() {
  return (
    <Space direction="vertical">
      <Window/>
      <InputField/>
    </Space>
  );
}
