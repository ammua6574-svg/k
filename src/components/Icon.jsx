import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Database,
  Eye,
  Globe2,
  GraduationCap,
  Hammer,
  MessagesSquare,
  MonitorPlay,
  Presentation,
  Rocket,
  School,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'

const ICONS = {
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Database,
  Eye,
  Globe2,
  GraduationCap,
  Hammer,
  MessagesSquare,
  MonitorPlay,
  Presentation,
  Rocket,
  School,
  Sparkles,
  Target,
  TrendingUp,
  Users,
}

/**
 * Renders a lucide icon from a data-driven name so sections can stay
 * declarative. `className` is passed straight through to the svg.
 */
export default function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = ICONS[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
