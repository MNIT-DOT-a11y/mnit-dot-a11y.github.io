// Not Accessible: Vague, confusing, and missing alt text
export interface CardData { 
  text1: string; // Is this the name? The title? 
  text2: string; 
  imageSource: string; // Alt text is missing entirely. 
} 

// EFFECTIVE: Clear, descriptive, and includes alt text
export interface UserProfile { 
  displayName: string; 
  jobTitle: string; 

  // Naming and grouping makes the relationship obvious 
  profileImageUrl: string; 
  profileImageAltText: string; 
} 
