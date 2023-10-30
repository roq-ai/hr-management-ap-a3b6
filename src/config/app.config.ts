interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'HR Staff', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read organization information'],
  ownerAbilities: ['Manage user information', 'Manage organization information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/9dbba8a7-d475-4c70-9f62-2733394ca2c6',
};
