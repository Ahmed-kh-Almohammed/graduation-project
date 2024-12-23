import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAwardsSection extends Schema.Component {
  collectionName: 'components_about_us_awards_sections';
  info: {
    displayName: 'awardsSection';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    description: Attribute.Text;
    awards: Attribute.Component<'list.award', true>;
  };
}

export interface AboutUsFacts extends Schema.Component {
  collectionName: 'components_about_us_facts';
  info: {
    displayName: 'facts';
    icon: 'book';
  };
  attributes: {
    funfactList: Attribute.Component<'about-us.funfacts', true>;
  };
}

export interface AboutUsFunfacts extends Schema.Component {
  collectionName: 'components_about_us_funfacts';
  info: {
    displayName: 'funfacts';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Number: Attribute.String & Attribute.Required;
  };
}

export interface AboutUsGallerySection extends Schema.Component {
  collectionName: 'components_about_us_gallery_sections';
  info: {
    displayName: 'gallerySection';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface AboutUsHeroSection extends Schema.Component {
  collectionName: 'components_about_us_hero_sections';
  info: {
    displayName: 'heroSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    image: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface AboutUsOurDoctorSection extends Schema.Component {
  collectionName: 'components_about_us_our_doctor_sections';
  info: {
    displayName: 'ourDoctorSection';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    doctors: Attribute.Relation<
      'about-us.our-doctor-section',
      'oneToMany',
      'api::doctor.doctor'
    >;
  };
}

export interface AboutUsWhyChooseUsData extends Schema.Component {
  collectionName: 'components_about_us_why_choose_us_data';
  info: {
    displayName: 'WhyChooseUsData';
    icon: 'exit';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sideImage: Attribute.Media<'images', true> & Attribute.Required;
    Feature: Attribute.Component<'list.feature', true>;
  };
}

export interface ActionsMedicalTest extends Schema.Component {
  collectionName: 'components_actions_medical_tests';
  info: {
    displayName: 'medicalTest';
    icon: 'seed';
    description: '';
  };
  attributes: {
    testName: Attribute.String;
    description: Attribute.Text;
    date: Attribute.DateTime;
    theresulte: Attribute.Text;
  };
}

export interface ActionsPrescription extends Schema.Component {
  collectionName: 'components_actions_prescriptions';
  info: {
    displayName: 'prescription';
    icon: 'file';
  };
  attributes: {
    medicines: Attribute.Relation<
      'actions.prescription',
      'oneToMany',
      'api::medicine.medicine'
    >;
    state: Attribute.Boolean;
    date: Attribute.Date;
  };
}

export interface ActionsReview extends Schema.Component {
  collectionName: 'components_actions_reviews';
  info: {
    displayName: 'review';
    icon: 'stack';
  };
  attributes: {
    date: Attribute.DateTime;
    description: Attribute.Text;
    state: Attribute.Boolean;
  };
}

export interface ActionsSession extends Schema.Component {
  collectionName: 'components_actions_sessions';
  info: {
    displayName: 'session';
    icon: 'cup';
    description: '';
  };
  attributes: {
    Date: Attribute.Date;
    Arrivedtime: Attribute.Time;
    leavveTime: Attribute.Time;
    diagnoses: Attribute.Text;
    review: Attribute.Component<'actions.review', true>;
    description: Attribute.Text;
  };
}

export interface BlogingToolParagraph extends Schema.Component {
  collectionName: 'components_bloging_tool_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface HomeAboutUsSection extends Schema.Component {
  collectionName: 'components_home_about_us_sections';
  info: {
    displayName: 'aboutUsSection';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    subtitle: Attribute.Text;
    image: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface HomeBlogsSection extends Schema.Component {
  collectionName: 'components_home_blogs_sections';
  info: {
    displayName: 'blogsSection';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    blogs: Attribute.Relation<
      'home.blogs-section',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface HomeBrandsSection extends Schema.Component {
  collectionName: 'components_home_brands_sections';
  info: {
    displayName: 'brandsSection';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
  };
}

export interface HomeFaQsData extends Schema.Component {
  collectionName: 'components_home_fa_qs_data';
  info: {
    displayName: 'FAQsData';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
  };
}

export interface HomeHeroData extends Schema.Component {
  collectionName: 'components_home_hero_data';
  info: {
    displayName: 'HeroData';
    icon: 'book';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos', true>;
    youtubeLink: Attribute.String;
    funfactList: Attribute.Component<'list.funfact-list', true>;
  };
}

export interface HomePromotingData extends Schema.Component {
  collectionName: 'components_home_promoting_data';
  info: {
    displayName: 'PromotingData';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    image: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface HomeServicesSection extends Schema.Component {
  collectionName: 'components_home_services_sections';
  info: {
    displayName: 'servicesSection';
    icon: 'brush';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    services: Attribute.Relation<
      'home.services-section',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface HomeTestimonialSection extends Schema.Component {
  collectionName: 'components_home_testimonial_sections';
  info: {
    displayName: 'testimonialSection';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    testimonials: Attribute.Component<'list.testimonial-item', true>;
  };
}

export interface HomeWorkStepsSection extends Schema.Component {
  collectionName: 'components_home_work_steps_sections';
  info: {
    displayName: 'workStepsSection';
    icon: 'archive';
  };
  attributes: {
    WorkStep: Attribute.Component<'list.work-step', true>;
  };
}

export interface InsuranceFaqsSection extends Schema.Component {
  collectionName: 'components_insurance_faqs_sections';
  info: {
    displayName: 'faqsSection';
    icon: 'cloud';
  };
  attributes: {
    title: Attribute.String;
    sidebarImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface InsuranceHeroSection extends Schema.Component {
  collectionName: 'components_insurance_hero_sections';
  info: {
    displayName: ' heroSection';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    funfact: Attribute.Component<'list.funfact-list', true>;
  };
}

export interface InsurancePlans extends Schema.Component {
  collectionName: 'components_insurance_plans';
  info: {
    displayName: 'plans';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'otherr.plan', true>;
  };
}

export interface ListAward extends Schema.Component {
  collectionName: 'components_list_awards';
  info: {
    displayName: 'Award';
    icon: 'car';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ListFeature extends Schema.Component {
  collectionName: 'components_list_features';
  info: {
    displayName: 'feature';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    icon: Attribute.Media<'images', true>;
  };
}

export interface ListFunfactList extends Schema.Component {
  collectionName: 'components_list_funfact_lists';
  info: {
    displayName: 'funfactList';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Value: Attribute.String & Attribute.Required;
  };
}

export interface ListService extends Schema.Component {
  collectionName: 'components_list_services';
  info: {
    displayName: 'service';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    images: Attribute.Media<'images', true>;
  };
}

export interface ListTestimonialItem extends Schema.Component {
  collectionName: 'components_list_testimonial_items';
  info: {
    displayName: 'TestimonialItem';
    icon: 'bold';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    rate: Attribute.Integer & Attribute.Required;
    avater: Attribute.Media<'images', true>;
    name: Attribute.String;
    designation: Attribute.Text;
  };
}

export interface ListTreatment extends Schema.Component {
  collectionName: 'components_list_treatments';
  info: {
    displayName: 'Treatment';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images', true> & Attribute.Required;
    blog: Attribute.Relation<'list.treatment', 'oneToOne', 'api::blog.blog'>;
  };
}

export interface ListWorkStep extends Schema.Component {
  collectionName: 'components_list_work_steps';
  info: {
    displayName: 'WorkStep';
    icon: 'car';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    icon: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface OtherrAddress extends Schema.Component {
  collectionName: 'components_otherr_addresses';
  info: {
    displayName: 'address';
    icon: 'collapse';
  };
  attributes: {
    address: Attribute.String;
    openTime: Attribute.Time;
    closeTime: Attribute.Time;
  };
}

export interface OtherrAuthor extends Schema.Component {
  collectionName: 'components_otherr_authors';
  info: {
    displayName: 'author';
    icon: 'cursor';
  };
  attributes: {
    Name: Attribute.String;
    description: Attribute.Text;
    profile: Attribute.Media<'images'>;
  };
}

export interface OtherrDates extends Schema.Component {
  collectionName: 'components_otherr_dates';
  info: {
    displayName: 'dates';
    icon: 'cup';
  };
  attributes: {
    from: Attribute.Date;
    TO: Attribute.Date;
  };
}

export interface OtherrPlan extends Schema.Component {
  collectionName: 'components_otherr_plans';
  info: {
    displayName: 'plan';
    icon: 'calendar';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    price: Attribute.Integer;
    period: Attribute.String;
    featureList: Attribute.JSON &
      Attribute.CustomField<'plugin::tagsinput.tags'>;
    btnText: Attribute.String;
    btnUrl: Attribute.String;
    popular: Attribute.Boolean;
  };
}

export interface OtherrSeo extends Schema.Component {
  collectionName: 'components_otherr_seos';
  info: {
    displayName: 'SEO';
    icon: 'cube';
    description: '';
  };
  attributes: {
    DocumentTitle: Attribute.String & Attribute.Required;
    ogTitle: Attribute.Text;
    gImage: Attribute.Media<'images', true> & Attribute.Required;
    keywords: Attribute.JSON & Attribute.CustomField<'plugin::tagsinput.tags'>;
    ogDescription: Attribute.Text;
  };
}

export interface OtherrSlider extends Schema.Component {
  collectionName: 'components_otherr_sliders';
  info: {
    displayName: 'slider';
    icon: 'eye';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
    content: Attribute.RichText;
  };
}

export interface OtherrTheauthor extends Schema.Component {
  collectionName: 'components_otherr_theauthors';
  info: {
    displayName: 'theauthor';
    icon: 'arrowDown';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    profile: Attribute.Media<'images', true>;
  };
}

export interface OtherrVideoSection extends Schema.Component {
  collectionName: 'components_otherr_video_sections';
  info: {
    displayName: 'videoSection';
    icon: 'crop';
  };
  attributes: {
    title: Attribute.String;
    youtubeVideoID: Attribute.String;
    thumbnail: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface SocialMedia extends Schema.Component {
  collectionName: 'components_social_media';
  info: {
    displayName: 'media';
    icon: 'cup';
  };
  attributes: {
    facebook: Attribute.String;
    linkedin: Attribute.String;
    twitter: Attribute.String;
    instagram: Attribute.String;
  };
}

export interface SocialSocialMedia extends Schema.Component {
  collectionName: 'components_social_social_medias';
  info: {
    displayName: 'socialMedia';
    icon: 'earth';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images', true> & Attribute.Required;
    Url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.awards-section': AboutUsAwardsSection;
      'about-us.facts': AboutUsFacts;
      'about-us.funfacts': AboutUsFunfacts;
      'about-us.gallery-section': AboutUsGallerySection;
      'about-us.hero-section': AboutUsHeroSection;
      'about-us.our-doctor-section': AboutUsOurDoctorSection;
      'about-us.why-choose-us-data': AboutUsWhyChooseUsData;
      'actions.medical-test': ActionsMedicalTest;
      'actions.prescription': ActionsPrescription;
      'actions.review': ActionsReview;
      'actions.session': ActionsSession;
      'bloging-tool.paragraph': BlogingToolParagraph;
      'home.about-us-section': HomeAboutUsSection;
      'home.blogs-section': HomeBlogsSection;
      'home.brands-section': HomeBrandsSection;
      'home.fa-qs-data': HomeFaQsData;
      'home.hero-data': HomeHeroData;
      'home.promoting-data': HomePromotingData;
      'home.services-section': HomeServicesSection;
      'home.testimonial-section': HomeTestimonialSection;
      'home.work-steps-section': HomeWorkStepsSection;
      'insurance.faqs-section': InsuranceFaqsSection;
      'insurance.hero-section': InsuranceHeroSection;
      'insurance.plans': InsurancePlans;
      'list.award': ListAward;
      'list.feature': ListFeature;
      'list.funfact-list': ListFunfactList;
      'list.service': ListService;
      'list.testimonial-item': ListTestimonialItem;
      'list.treatment': ListTreatment;
      'list.work-step': ListWorkStep;
      'otherr.address': OtherrAddress;
      'otherr.author': OtherrAuthor;
      'otherr.dates': OtherrDates;
      'otherr.plan': OtherrPlan;
      'otherr.seo': OtherrSeo;
      'otherr.slider': OtherrSlider;
      'otherr.theauthor': OtherrTheauthor;
      'otherr.video-section': OtherrVideoSection;
      'social.media': SocialMedia;
      'social.social-media': SocialSocialMedia;
    }
  }
}
