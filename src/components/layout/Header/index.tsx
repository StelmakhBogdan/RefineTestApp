import {useContext} from "react";
import {
  useGetLocale,
  useGetIdentity,
} from "@pankod/refine-core";
import {
  AntdLayout,
  Space,
  Button,
  Icons,
  Dropdown,
  Avatar,
  Typography,
  Switch,
} from "@pankod/refine-antd";
import { ColorModeContext } from "contexts";

import RenderMenu from './components/RenderMenu';

const { DownOutlined } = Icons;
const { Text } = Typography;

export const Header = () => {
  const locale = useGetLocale();
  const { data: user } = useGetIdentity();
  const { mode, setMode } = useContext(ColorModeContext);

  const currentLocale = locale();

  return (
    <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
      }}
    >
      <Switch
        checkedChildren="🌛"
        unCheckedChildren="🔆"
        onChange={() => setMode(mode === "light" ? "dark" : "light")}
        defaultChecked={mode === "dark"}
      />
      <Dropdown dropdownRender={() => <RenderMenu/>}>
        <Button type="link">
          <Space>
            <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
            {currentLocale === "en" ? "English" : "German"}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Space style={{ marginLeft: "8px" }}>
        {user?.name && (
          <Text ellipsis strong>
            {user.name}
          </Text>
        )}
        {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
      </Space>
    </AntdLayout.Header>
  );
};
