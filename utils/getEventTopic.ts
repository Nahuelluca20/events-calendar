import {EventTopics} from "./EventTopic";

export function getEventTopicColor(topic: string) {
  switch (topic.toUpperCase()) {
    case "FRONTEND":
      return EventTopics.FRONTEND;
    case "BACKEND":
      return EventTopics.BACKEND;
    case "DEVOPS":
      return EventTopics.DEVOPS;
    case "INFRASTRUCTURE":
      return EventTopics.INFRASTRUCTURE;
    case "MOBILE":
      return EventTopics.MOBILE;
    case "TEST":
      return EventTopics.TEST;
    default:
      return null;
  }
}
