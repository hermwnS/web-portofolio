import type React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl: string;
}

export interface Skill {
  name: string;
  // FIX: Resolved "Cannot find namespace 'JSX'" error by importing React and using React.ReactElement.
  icon: React.ReactElement;
}
