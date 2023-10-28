export const scrollToSection = (sectionID: string) => {
  const section = document.getElementById(sectionID);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
