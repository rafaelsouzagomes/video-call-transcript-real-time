export interface Theme {
  primaryColor: string,
  secondaryColor: string;
  fontColor: string;
}

const defaultThemes: Theme = {
  primaryColor: '#111111',
  secondaryColor: '#000000',
  fontColor: '#fff'
};

export { defaultThemes, };