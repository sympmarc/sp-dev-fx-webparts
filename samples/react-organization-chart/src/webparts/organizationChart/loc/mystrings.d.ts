declare interface IOrganizationChartWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  TitleFieldLabel: string;
  startFromUserLabel: string;
  showactionsLabel:string;
  showAllManagers:string;
  showGuestUsers:string;
}

declare module 'OrganizationChartWebPartStrings' {
  const strings: IOrganizationChartWebPartStrings;
  export = strings;
}
