import LogoApp from './icons/logo.svg';
import SettingIcon from './icons/settings.svg';
import CalendarIcon from './icons/calendar.svg';
import ArrowUpIcon from './icons/arrow-up.svg';
import EllipseIcon from './icons/ellipse.svg';


const icons = {
    LogoApp: () => <img src={LogoApp} width={214} alt="logo" />,
    SettingIcon: () => <img src={SettingIcon} className="icon" width={24} alt="cogs" />,
    CalendarIcon: () => <img src={CalendarIcon} className="icon" width={16} alt="calendar" />,
    ArrowUpIcon: () => <img src={ArrowUpIcon} className="icon" width={16} alt="calendar" />,
    EllipseIcon: () => <img src={EllipseIcon} className="icon" width={16} alt="calendar" />,
}

export default icons;