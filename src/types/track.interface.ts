export interface DeliveryDetailsProps {
  sender: string;
  consignee: string;
  origin: string;
  destination: string;
  service: string;
  total: string;
}

export interface TimelineEvent {
  time: string;
  description: string;
  actor: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
}