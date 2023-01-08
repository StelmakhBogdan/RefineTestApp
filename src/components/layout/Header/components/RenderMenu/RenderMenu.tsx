import {useTranslation} from 'react-i18next';
import {useGetLocale, useSetLocale} from '@pankod/refine-core';
import {Avatar, Menu} from '@pankod/refine-antd';

import {TRenderMenu} from './types';

const RenderMenu: TRenderMenu = () => {
  const { i18n } = useTranslation();
  const locale = useGetLocale();
  const changeLanguage = useSetLocale();

  const currentLocale = locale();

    return (
        <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
          {[...(i18n.languages || [])].sort().map((lang: string) => (
            <Menu.Item
              key={lang}
              onClick={() => changeLanguage(lang)}
              icon={
                <span style={{ marginRight: 8 }}>
                  <Avatar size={16} src={`/images/flags/${lang}.svg`} />
                </span>
              }
            >
              {lang === "en" ? "English" : "Ukraine"}
            </Menu.Item>
          ))}
      </Menu>
    )
};

export default RenderMenu;
