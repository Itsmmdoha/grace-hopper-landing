import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export interface EventConfig {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
  };
  event: {
    name: string;
    host: string;
    date: string;
    deadline: string;
    venue: string;
    registration_url: string;
    eligibility: string;
    certification: boolean;
    certification_text: string;
    highlights: string[];
  };
  past_event: {
    name: string;
    participants: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  sponsors: {
    title: string;
    contact_email: string;
    list: { name: string; logo_url?: string; url?: string }[];
  };
  footer: {
    credit: string;
    year: number;
    website: string;
  };
}

export function getEventConfig(): EventConfig {
  const configPath = path.join(process.cwd(), "config", "event.yaml");
  const fileContents = fs.readFileSync(configPath, "utf8");
  const data = yaml.load(fileContents) as EventConfig;
  return data;
}
