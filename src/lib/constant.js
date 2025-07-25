export const regionOptions = [
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-northeast-3",
  "ap-south-1",
  "ap-south-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-southeast-3",
  "ap-southeast-4",
  "ap-southeast-5",
  "ca-central-1",
  "eu-central-1",
  "eu-central-2",
  "eu-north-1",
];

export const instanceOptions = [
  "t2.nano",
  "m7a.12xLarge",
  "m7a.16xLarge",
  "c5.large",
  "c5.xlarge",
  "c5.2xlarge",
  "c5.4xlarge",
  "c5.9xlarge",
  "c5.12xlarge",
  "c5.18xlarge",
  "c5.24xlarge",
  "c5.metal",
  "c5a.large",
  "c5a.xlarge",
  "c5a.2xlarge",
  "c5a.4xlarge",
  "c5a.8xlarge",
  "c5a.12xlarge",
  "c5a.16xlarge",
  "c5a.24xlarge",
  "c5ad.large",
  "c5ad.xlarge",
];

export const pricingModelOptions = ["ondemand", "reserved", "spot"];

export const serviceProviderOptions = [
  {
    label: "Service Provider",
    options: [
      { label: "AWS", value: "AWS" },
      { label: "Azure", value: "azure" },
      { label: "GCP", value: "GCP" },
    ],
  },
  {
    label: "Telemetry Collector",
    options: [
      { label: "Datalog", value: "datalog" },
      { label: "AWS CloudWatch", value: "aws_cloudWatch" },
    ],
  },
];




export const FIELDS = [
  {
    name: "region",
    label: "Region*",
    type: "select", 
    tooltipMessage: "Select Region associated with CSP",
  },
  {
    name: "instanceType",
    label: "Size*",
    type: "select",
    tooltipMessage: "Select Instance associated with Region",
  },
  {
    name: "uuid",
    label: "UUID / Instance Name",
    tooltipMessage: "Enter UUID/Instance Name, For Ex: VM for AI/ML server",
  },
  { label: "Quantity*", name: "quantity", tooltipMessage: "Quantity" },
  {
    label: "Total Number of Hours per Month*",
    name: "noOfHours",
    tooltipMessage: "Max hours per month",
  },
  {
    label: "Pricing Model*",
    name: "pricingModel",
    type: 'select',
    tooltipMessage: "",
     type: "select"
  }

];

export const FIND_AND_REPLACE_FIELD_TYPES = [
  {
    key: "instanceType",
    label: "Instance Type",
    options: instanceOptions,
  },
  {
    key: "region",
    label: "Region",
    options: regionOptions,
  },
  {
    key: "pricingModel",
    label: "Pricing Model",
    options: pricingModelOptions,
  },
];

export const supportEmailSubject = "CCA - Support Ticket Request - Regarding manageAccounts Page";

export const supportEmailBody = `
Hi [Support Team/Specific Name],

I am writing to request support regarding EIA manageAccounts Page.

Description of the Issue:

[Provide a detailed explanation of the problem.]

Steps to Reproduce:

1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected Outcome:

[Describe what you expected to happen.]

Attachments:

[Include any relevant files or screenshots.]

Contact Information:

Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone Number]

Urgency Level:

Indicate urgency, e.g. [High, Medium, Low]

Thank you for your assistance!

Best regards,

[Your Name]
`;

export const supportMailtoLink = `mailto:support@example.com?subject=${encodeURIComponent(
  supportEmailSubject
)}&body=${encodeURIComponent(supportEmailBody)}`;
export const supportMobileNumber = `tel:+1 (502) 388-6228`;
