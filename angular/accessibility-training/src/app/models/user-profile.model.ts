// Define the shape of accessible pet data
export interface PetProfile { 
  petName: string; // Renamed from displayName
  animalType: string; // Renamed from jobTitle
  profileImageUrl: string; 
  profileImageAltText: string; // The crucial accessibility field
}

// Inaccessible structure for comparison (no change needed here)
export interface CardData {
  text1: string;
  text2: string;
  imageSource: string; 
}