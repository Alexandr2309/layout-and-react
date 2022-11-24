import React from 'react';
import VioletIcon from 'shared/assets/icons/violet_issue.svg';
import LampIcon from 'shared/assets/icons/lamp_icon.svg';
import BookmarkIcon from 'shared/assets/icons/bookmark_icon.svg';
import TargetIcon from 'shared/assets/icons/target_icon.svg';
import FlashIcon from 'shared/assets/icons/flash_icon.svg';
import cls from '../../ui/Icon.module.scss';

export interface IIconBlock {
  Item: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string
}

export const iconsIssue: IIconBlock[] = [
  {
    Item: VioletIcon,
    className: cls.violetIcon,
  },
  {
    Item: LampIcon,
    className: cls.lampIcon,
  },
  {
    Item: BookmarkIcon,
    className: cls.bookmarkIcon,
  },
  {
    Item: TargetIcon,
    className: cls.targetIcon,
  },
  {
    Item: FlashIcon,
    className: cls.flashIcon,
  },
];
