import {
  Briefcase, Users, Zap, Target, Layers, Gauge, Brain, Smartphone, Server, Cloud,
  Database, Network, Workflow, Bot, Sparkles, FileCode2, Home, Rocket, ShieldCheck,
  GraduationCap, Trophy, Users2, BadgeCheck, Mic, Award,
} from "lucide-react";
import {
  SiReact, SiTypescript, SiRedux, SiApollographql, SiTailwindcss, SiWebpack, SiSpringboot,
  SiSpring, SiNodedotjs, SiExpress, SiGraphql, SiPython, SiGooglecloud, SiDocker,
  SiKubernetes, SiTerraform, SiHelm, SiArgo, SiGithubactions, SiApachekafka, SiMysql,
  SiMongodb, SiRedis, SiFirebase, SiLangchain, SiClaude, SiGithubcopilot, SiTensorflow,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const map = {
  Briefcase, Users, Zap, Target, Layers, Gauge, Brain, Smartphone, Server, Cloud, Database,
  Network, Workflow, Bot, Sparkles, FileCode2, Home, Rocket, ShieldCheck, GraduationCap,
  Trophy, Users2, BadgeCheck, Mic, Award,
  SiReact, SiTypescript, SiRedux, SiApollographql, SiTailwindcss, SiWebpack, SiSpringboot,
  SiSpring, SiNodedotjs, SiExpress, SiGraphql, SiPython, SiGooglecloud, SiDocker,
  SiKubernetes, SiTerraform, SiHelm, SiArgo, SiGithubactions, SiApachekafka, SiMysql,
  SiMongodb, SiRedis, SiFirebase, SiLangchain, SiClaude, SiGithubcopilot, SiTensorflow,
  FaJava, FaAws,
};

// Brand colours for tech logos (used by the skills dashboard)
export const brandColor = {
  SiReact: "#61DAFB", SiTypescript: "#3178C6", SiRedux: "#764ABC", SiApollographql: "#a78bfa",
  SiTailwindcss: "#38BDF8", SiWebpack: "#8DD6F9", SiSpringboot: "#6DB33F", SiSpring: "#6DB33F",
  SiNodedotjs: "#5FA04E", SiExpress: "#e5e7eb", SiGraphql: "#E10098", SiPython: "#3776AB",
  SiGooglecloud: "#4285F4", SiDocker: "#2496ED", SiKubernetes: "#326CE5", SiTerraform: "#844FBA",
  SiHelm: "#7fb3ff", SiArgo: "#EF7B4D", SiGithubactions: "#2088FF", SiApachekafka: "#e5e7eb",
  SiMysql: "#4479A1", SiMongodb: "#47A248", SiRedis: "#FF4438", SiFirebase: "#FFCA28",
  SiLangchain: "#7dd3c0", SiClaude: "#D97757", SiGithubcopilot: "#e5e7eb", SiTensorflow: "#FF6F00",
  FaJava: "#f89820", FaAws: "#FF9900",
};

export default function Icon({ name, size = 20, ...rest }) {
  const C = map[name] || Sparkles;
  return <C size={size} {...rest} />;
}
