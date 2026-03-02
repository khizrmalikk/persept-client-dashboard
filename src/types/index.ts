export type AgentName = "Sarah" | "Marcus" | "Olivia" | "Alex";

export type AgentStatus = "online" | "offline";

export interface Agent {
  name: AgentName;
  role: string;
  status: AgentStatus;
  lastActivity: string;
  todayMessages: number;
  avatar: string;
  color: string;
}

export interface KPIData {
  label: string;
  value: number;
  formattedValue: string;
  trend: {
    direction: "up" | "down" | "neutral";
    percentage: number;
  };
  icon: string;
}

export interface MessageVolumeData {
  date: string;
  messages: number;
  escalations: number;
}

export interface AgentActivityData {
  name: AgentName;
  value: number;
  color: string;
}

export interface AgentLog {
  id: string;
  timestamp: string;
  agentName: AgentName;
  actionType: string;
  guestName: string;
  messagePreview: string;
  channel: string;
  status: "handled" | "escalated" | "pending";
  responseTimeSeconds: number;
}

export interface Escalation {
  id: string;
  createdAt: string;
  agentName: AgentName;
  priority: "high" | "medium" | "low";
  guestName: string;
  message: string;
  reason: string;
  status: "pending" | "resolved" | "archived";
}

export type UserRole = "admin" | "manager" | "viewer";
