import React from "react";
import {
  Briefcase,
  Users,
  Zap,
  Eye,
  SmileIcon as Tooth,
  Heart,
  Umbrella,
  Clock,
  Calendar,
  Coins,
  Building,
  GraduationCap,
  Dumbbell,
  Brain,
  Home,
  Bitcoin,
  UserCircle,
  PieChart,
  MonitorOff,
  Shield,
  UserPlus,
} from "lucide-react";

interface Benefit {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const benefits: Benefit[] = [
  {
    id: "job_security",
    label: "Job security",
    icon: <Briefcase className="w-3 h-3" />, // Represents professional stability
  },
  {
    id: "team_culture",
    label: "Collaborative team culture",
    icon: <Users className="w-3 h-3" />, // Represents teamwork
  },
  {
    id: "flexible_hours",
    label: "Flexible working hours",
    icon: <Zap className="w-3 h-3" />, // Represents dynamic flexibility
  },
  {
    id: "vision_coverage",
    label: "Vision coverage",
    icon: <Eye className="w-3 h-3" />, // Represents vision-related benefits
  },
  {
    id: "dental_coverage",
    label: "Dental coverage",
    icon: <Tooth className="w-3 h-3" />, // Represents dental benefits
  },
  {
    id: "health_insurance",
    label: "Health insurance",
    icon: <Heart className="w-3 h-3" />, // Represents health and care
  },
  {
    id: "paid_vacation",
    label: "Paid vacation leave",
    icon: <Umbrella className="w-3 h-3" />, // Represents relaxation and vacation
  },
  {
    id: "paid_leave",
    label: "Paid time off",
    icon: <Clock className="w-3 h-3" />, // Represents paid time management
  },
  {
    id: "short_workweek",
    label: "Shortened workweek",
    icon: <Calendar className="w-3 h-3" />, // Represents time-related benefits
  },
  {
    id: "retirement_benefits",
    label: "Retirement benefits",
    icon: <Coins className="w-3 h-3" />, // Represents financial stability
  },
  {
    id: "team_events",
    label: "Team-building events",
    icon: <Building className="w-3 h-3" />, // Represents group activities
  },
  {
    id: "workspace_budget",
    label: "Workspace setup allowance",
    icon: <Building className="w-3 h-3" />, // Represents workspace benefits
  },
  {
    id: "education_allowance",
    label: "Education and training budget",
    icon: <GraduationCap className="w-3 h-3" />, // Represents learning opportunities
  },
  {
    id: "wellness_programs",
    label: "Wellness programs",
    icon: <Dumbbell className="w-3 h-3" />, // Represents physical wellness
  },
  {
    id: "mental_health",
    label: "Mental health support",
    icon: <Brain className="w-3 h-3" />, // Represents mental health and wellness
  },
  {
    id: "remote_setup",
    label: "Remote office budget",
    icon: <Home className="w-3 h-3" />, // Represents home office support
  },
  {
    id: "crypto_salary",
    label: "Option for crypto payments",
    icon: <Bitcoin className="w-3 h-3" />, // Represents modern payment methods
  },
  {
    id: "anonymous_work",
    label: "Anonymous work option",
    icon: <UserCircle className="w-3 h-3" />, // Represents privacy and anonymity
  },
  {
    id: "profit_sharing",
    label: "Profit-sharing programs",
    icon: <PieChart className="w-3 h-3" />, // Represents shared financial success
  },
  {
    id: "equity_shares",
    label: "Equity opportunities",
    icon: <Coins className="w-3 h-3" />, // Represents financial ownership
  },
  {
    id: "simple_interviews",
    label: "Simplified interviews",
    icon: <MonitorOff className="w-3 h-3" />, // Represents streamlined processes
  },
  {
    id: "no_tracking",
    label: "No activity tracking",
    icon: <Shield className="w-3 h-3" />, // Represents freedom from monitoring
  },
  {
    id: "diverse_hiring",
    label: "Inclusive hiring practices",
    icon: <UserPlus className="w-3 h-3" />, // Represents diversity and inclusion
  },
];
