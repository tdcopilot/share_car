interface DocMenuConfigOption {
  heading?: string,
  route: string,
  pages?: Array<DocMenuConfigOption>,
  sectionTitle?: string,
  svgIcon?: string,
  fontIcon?: string,
  sub?: Array<{
    heading: string,
    route: string,
  }>, 
}

const DocMenuConfig: Array<DocMenuConfigOption> = [];

export default DocMenuConfig;
