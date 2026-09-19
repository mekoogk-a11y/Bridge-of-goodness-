export type Language = 'ar' | 'en';

export type PageId =
  | 'home'
  | 'about'
  | 'story'
  | 'vision'
  | 'mission'
  | 'philosophy'
  | 'bridge-model'
  | 'area-education'
  | 'area-health'
  | 'area-relief'
  | 'area-youth'
  | 'area-food'
  | 'area-water'
  | 'area-social'
  | 'south-sudan'
  | 'map'
  | 'communities'
  | 'articles'
  | 'featured-article'
  | 'news'
  | 'hope-stories'
  | 'initiatives'
  | 'partnerships'
  | 'volunteers'
  | 'advisors'
  | 'team'
  | 'concept-doc'
  | 'transparency'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'safeguarding'
  | 'press'
  | 'admin';

export type ArticleCategory =
  | 'humanitarian'
  | 'education'
  | 'health'
  | 'youth'
  | 'development'
  | 'south-sudan'
  | 'water'
  | 'food-security'
  | 'community';

export interface Article {
  id: string;
  titleAr: string;
  titleEn: string;
  slug?: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  authorAr: string;
  authorEn: string;
  authorRoleAr?: string;
  authorRoleEn?: string;
  date?: string;
  publishedDate?: string;
  category: ArticleCategory | string;
  readTime?: string;
  readTimeAr?: string;
  readTimeEn?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

export type ProjectStatus = 'Proposed' | 'Planning' | 'Active' | 'Completed';

export interface ProposedProject {
  id: string;
  code: string;
  titleAr: string;
  titleEn: string;
  areaId?: string;
  badgeAr: string;
  badgeEn: string;
  status: ProjectStatus;
  summaryAr: string;
  summaryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  objectiveAr?: string;
  objectiveEn?: string;
  targetFocusAr: string;
  targetFocusEn: string;
  proposedLocationsAr: string[];
  proposedLocationsEn: string[];
  icon?: string;
  imageUrl?: string;
  disclaimerAr?: string;
  disclaimerEn?: string;
}

export interface SouthSudanState {
  id: string;
  nameAr: string;
  nameEn: string;
  capitalAr: string;
  capitalEn: string;
  regionAr: string;
  regionEn: string;
  overviewAr: string;
  overviewEn: string;
  developmentNeedsAr: string[];
  developmentNeedsEn: string[];
  proposedInterventionsAr: string[];
  proposedInterventionsEn: string[];
  populationEst?: string;
  climateAndGeographyAr: string;
  climateAndGeographyEn: string;
  keyChallengesAr: string[];
  keyChallengesEn: string[];
  svgPath?: string;
  coordinates: { x: number; y: number };
}

export interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone?: string;
  country: string;
  specialization?: string;
  specialty?: string;
  experienceYears?: string;
  volunteerField?: string;
  interestArea?: string;
  message: string;
  submittedAt: string;
  status: 'Pending Review' | 'Reviewed' | 'Contacted' | 'Under Review' | 'Verified';
}

export type Volunteer = VolunteerApplication;

export interface PartnershipInquiry {
  id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  partnerType: string;
  country: string;
  collaborationScope: string;
  notes: string;
  submittedAt: string;
  status: 'Pending Review' | 'Reviewed';
}

export type AdminRole =
  | 'super_admin'
  | 'editor'
  | 'content_manager'
  | 'map_manager'
  | 'Super Admin'
  | 'Editor'
  | 'Content Manager'
  | 'Map Manager';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
}
