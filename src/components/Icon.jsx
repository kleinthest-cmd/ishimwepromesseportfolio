import {
  Activity,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Mail,
  MonitorSmartphone,
  Network,
  Phone,
  Server,
  ShoppingBag,
  Wrench,
} from 'lucide-react'
import { InstagramIcon, TelegramIcon } from './BrandIcons'

const iconMap = {
  activity: Activity,
  bag: ShoppingBag,
  code: Code2,
  dashboard: LayoutDashboard,
  database: Database,
  globe: Globe,
  instagram: InstagramIcon,
  mail: Mail,
  monitor: MonitorSmartphone,
  network: Network,
  phone: Phone,
  server: Server,
  telegram: TelegramIcon,
  wrench: Wrench,
}

export default function Icon({ name, ...props }) {
  const Component = iconMap[name] ?? Code2
  return <Component {...props} />
}
