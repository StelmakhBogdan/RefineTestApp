import {FC, useCallback} from 'react';

import {useTranslation} from 'react-i18next';
import {useGetLocale, useSetLocale, } from '@pankod/refine-core';
import {Avatar, Menu} from '@pankod/refine-antd';
import {MenuInfo} from 'rc-menu/lib/interface';
import {languageKey} from './constants';

const RenderMenu: FC = () => {
  const { i18n } = useTranslation();
  const locale = useGetLocale();
  const changeLanguage = useSetLocale();

  const currentLocale = locale();

  const menuItems = [...(i18n.languages || [])].sort().map((lang: string) => (
    {
      key: lang,
      icon: <Avatar size={16} src={`/images/flags/${lang}.svg`} />,
      label: languageKey[lang],
    })
  );

  const handleMenu = useCallback((info: MenuInfo) => {
    changeLanguage(info.key)
  },[changeLanguage]);

    return (
        <Menu
          selectedKeys={currentLocale ? [currentLocale] : []}
          onClick={handleMenu}
          items={menuItems}
        />
    )
};

export default RenderMenu;
