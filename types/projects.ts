export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl?: string;
  previewUrl?: string;
}

export interface ProjectContent {
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl?: string;
  previewUrl?: string;
}
