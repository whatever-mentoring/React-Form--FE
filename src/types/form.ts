export interface FormHeaderSectionType {
  title: string;
  description: string;
}

export interface FormBodyOptionType {
  id: number;
  value: string;
}

export interface FormBodySectionType {
  title: string;
  type: 'input' | 'radio' | 'checkbox';
  options: FormBodyOptionType[];
}

export interface FormRequestType {
  uuid: string;
  headerSection: {
      title: string;
      description: string;
  };
  bodySections: FormBodySectionType[];
}

export interface FormResponseType extends FormRequestType {
  id: number;
}

