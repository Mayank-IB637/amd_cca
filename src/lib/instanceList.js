import { telemetryTypes } from "@/redux/features/Telemetry/telemetry.slice";
import awslogo from "@/assets/logo/awslogo.svg"
import azurelogo from "@/assets/logo/azurelogo.svg"
import gcplogo from "@/assets/logo/googlelogo.svg"
import datadog from "@/assets/logo/datadog.svg"
import insightslogs from "@/assets/logo/azureInsights.svg"
import cloudlogo from "@/assets/logo/cloudWatch.svg"
import prometheuslogo from "@/assets/logo/prometheus.svg"

export const instanceList = [
  // AWS
  {
    id: 1,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-1",
    instanceType: "a1.2xlarge",
  },
  {
    id: 2,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-1",
    instanceType: "a1.4xlarge",
  },
  {
    id: 3,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-1",
    instanceType: "a1.large",
  },
  {
    id: 4,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-1",
    instanceType: "a1.medium",
  },
  {
    id: 5,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-1",
    instanceType: "a1.metal",
  },
  {
    id: 6,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-2",
    instanceType: "c4.2xlarge",
  },
  {
    id: 7,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-2",
    instanceType: "c4.4xlarge",
  },
  {
    id: 8,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-2",
    instanceType: "c4.8xlarge",
  },
  {
    id: 9,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-2",
    instanceType: "c4.large",
  },
  {
    id: 10,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-2",
    instanceType: "c4.xlarge",
  },
  {
    id: 11,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-3",
    instanceType: "c4.2xlarge",
  },
  {
    id: 12,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-3",
    instanceType: "c4.4xlarge",
  },
  {
    id: 13,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-3",
    instanceType: "c4.8xlarge",
  },
  {
    id: 14,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-3",
    instanceType: "c4.large",
  },
  {
    id: 15,
    type: "cloud",
    name: "AWS",
    region: "ap-northeast-3",
    instanceType: "c4.xlarge",
  },
  //  AZURE
  {
    id: 16,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral",
    instanceType: "standard_a1_v2",
  },
  {
    id: 17,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral",
    instanceType: "standard_a2_v2",
  },
  {
    id: 18,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral",
    instanceType: "standard_a2m_v2",
  },
  {
    id: 19,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral",
    instanceType: "standard_a4_v2",
  },
  {
    id: 20,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral",
    instanceType: "standard_a4m_v2",
  },
  {
    id: 21,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral2",
    instanceType: "standard_a1_v2",
  },
  {
    id: 22,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral2",
    instanceType: "standard_a2_v2",
  },
  {
    id: 23,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral2",
    instanceType: "standard_a2m_v2",
  },
  {
    id: 24,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral2",
    instanceType: "standard_a4_v2",
  },
  {
    id: 25,
    type: "cloud",
    name: "AZURE",
    region: "australiacentral2",
    instanceType: "standard_a4m_v2",
  },
  {
    id: 26,
    type: "cloud",
    name: "AZURE",
    region: "australiaeast",
    instanceType: "standard_a1_v2",
  },
  {
    id: 27,
    type: "cloud",
    name: "AZURE",
    region: "australiaeast",
    instanceType: "standard_a2_v2",
  },
  {
    id: 28,
    type: "cloud",
    name: "AZURE",
    region: "australiaeast",
    instanceType: "standard_a2m_v2",
  },
  {
    id: 29,
    type: "cloud",
    name: "AZURE",
    region: "australiaeast",
    instanceType: "standard_a4_v2",
  },
  {
    id: 30,
    type: "cloud",
    name: "AZURE",
    region: "australiaeast",
    instanceType: "standard_a4m_v2",
  },
  {
    id: 31,
    type: "cloud",
    name: "AZURE",
    region: "australiasoutheast",
    instanceType: "standard_a1_v2",
  },
  {
    id: 32,
    type: "cloud",
    name: "AZURE",
    region: "australiasoutheast",
    instanceType: "standard_a2_v2",
  },
  {
    id: 33,
    type: "cloud",
    name: "AZURE",
    region: "australiasoutheast",
    instanceType: "standard_a2m_v2",
  },
  {
    id: 34,
    type: "cloud",
    name: "AZURE",
    region: "australiasoutheast",
    instanceType: "standard_a4_v2",
  },
  {
    id: 35,
    type: "cloud",
    name: "AZURE",
    region: "australiasoutheast",
    instanceType: "standard_a4m_v2",
  },
  {
    id: 36,
    type: "cloud",
    name: "AZURE",
    region: "brazilsouth",
    instanceType: "standard_a1_v2",
  },
  {
    id: 37,
    type: "cloud",
    name: "AZURE",
    region: "brazilsouth",
    instanceType: "standard_a2_v2",
  },
  {
    id: 38,
    type: "cloud",
    name: "AZURE",
    region: "brazilsouth",
    instanceType: "standard_a2m_v2",
  },
  {
    id: 39,
    type: "cloud",
    name: "AZURE",
    region: "brazilsouth",
    instanceType: "standard_a4_v2",
  },
  {
    id: 40,
    type: "cloud",
    name: "AZURE",
    region: "brazilsouth",
    instanceType: "standard_a4m_v2",
  },
  // GCP
  {
    id: 41,
    type: "cloud",
    name: "GCP",
    region: "africa-south1",
    instanceType: "c4-highmem-16",
  },
  {
    id: 42,
    type: "cloud",
    name: "GCP",
    region: "africa-south1",
    instanceType: "c4-highmem-192",
  },
  {
    id: 43,
    type: "cloud",
    name: "GCP",
    region: "africa-south1",
    instanceType: "c4-highmem-2",
  },
  {
    id: 44,
    type: "cloud",
    name: "GCP",
    region: "africa-south1",
    instanceType: "c4-highmem-32",
  },
  {
    id: 45,
    type: "cloud",
    name: "GCP",
    region: "africa-south1",
    instanceType: "c4-highmem-4",
  },
  {
    id: 46,
    type: "cloud",
    name: "GCP",
    region: "asia-east1",
    instanceType: "a3-highgpu-1g",
  },
  {
    id: 47,
    type: "cloud",
    name: "GCP",
    region: "asia-east1",
    instanceType: "a3-highgpu-2g",
  },
  {
    id: 48,
    type: "cloud",
    name: "GCP",
    region: "asia-east1",
    instanceType: "a3-highgpu-4g",
  },
  {
    id: 49,
    type: "cloud",
    name: "GCP",
    region: "asia-east1",
    instanceType: "a3-highgpu-8g",
  },
  {
    id: 50,
    type: "cloud",
    name: "GCP",
    region: "asia-east1",
    instanceType: "a3-megagpu-8g",
  },
  {
    id: 51,
    type: "cloud",
    name: "GCP",
    region: "asia-east2",
    instanceType: "c2-standard-16",
  },
  {
    id: 52,
    type: "cloud",
    name: "GCP",
    region: "asia-east2",
    instanceType: "c2-standard-30",
  },
  {
    id: 53,
    type: "cloud",
    name: "GCP",
    region: "asia-east2",
    instanceType: "c2-standard-4",
  },
  {
    id: 54,
    type: "cloud",
    name: "GCP",
    region: "asia-east2",
    instanceType: "c2-standard-60",
  },
  {
    id: 55,
    type: "cloud",
    name: "GCP",
    region: "asia-east2",
    instanceType: "c2-standard-8",
  },
  {
    id: 56,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast1",
    instanceType: "a2-highgpu-1g",
  },
  {
    id: 57,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast1",
    instanceType: "a2-highgpu-2g",
  },
  {
    id: 58,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast1",
    instanceType: "a2-highgpu-4g",
  },
  {
    id: 59,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast1",
    instanceType: "a2-highgpu-8g",
  },
  {
    id: 60,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast1",
    instanceType: "a3-edgegpu-8g",
  },
  {
    id: 61,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast2",
    instanceType: "c2-standard-16",
  },
  {
    id: 62,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast2",
    instanceType: "c2-standard-30",
  },
  {
    id: 63,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast2",
    instanceType: "c2-standard-4",
  },
  {
    id: 64,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast2",
    instanceType: "c2-standard-60",
  },
  {
    id: 65,
    type: "cloud",
    name: "GCP",
    region: "asia-northeast2",
    instanceType: "c2-standard-8",
  },

  // Datadog
  {
    id: 66,
    type: "telemetry",
    name: "Datadog",
    region: "us-central1",
    instanceType: "us-east1",
  },
  {
    id: 67,
    type: "telemetry",
    name: "Datadog",
    region: "us-central1",
    instanceType: "us-west1",
  },
  {
    id: 68,
    type: "telemetry",
    name: "Datadog",
    region: "us-central1",
    instanceType: "us-east4",
  },
  {
    id: 69,
    type: "telemetry",
    name: "Datadog",
    region: "us-central1",
    instanceType: "us-west2",
  },
  {
    id: 70,
    type: "telemetry",
    name: "Datadog",
    region: "europe-west1",
    instanceType: "europe-west2",
  },
  {
    id: 71,
    type: "telemetry",
    name: "Datadog",
    region: "europe-west1",
    instanceType: "europe-west3",
  },
  {
    id: 72,
    type: "telemetry",
    name: "Datadog",
    region: "europe-west1",
    instanceType: "europe-west4",
  },
  {
    id: 73,
    type: "telemetry",
    name: "Datadog",
    region: "asia-east1",
    instanceType: "asia-northeast1",
  },
  {
    id: 74,
    type: "telemetry",
    name: "Datadog",
    region: "asia-east1",
    instanceType: "asia-southeast1",
  },
  {
    id: 75,
    type: "telemetry",
    name: "Datadog",
    region: "asia-east1",
    instanceType: "asia-south1",
  },

  // AWS CloudWatch
  {
    id: 76,
    type: "telemetry",
    name: "AWS CloudWatch",
    region: "af-south-1",
    instanceType: "standard_a1_v2",
  },
  // {
  //   id: 77,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral",
  //   instanceType: "standard_a2_v2",
  // },
  // {
  //   id: 78,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral",
  //   instanceType: "standard_a2m_v2",
  // },
  // {
  //   id: 79,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral",
  //   instanceType: "standard_a4_v2",
  // },
  // {
  //   id: 80,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral",
  //   instanceType: "standard_a4m_v2",
  // },
  {
    id: 81,
    type: "telemetry",
    name: "AWS CloudWatch",
    region: "ap-northeast-1",
    instanceType: "standard_a1_v2",
  },
  // {
  //   id: 82,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral2",
  //   instanceType: "standard_a2_v2",
  // },
  // {
  //   id: 83,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral2",
  //   instanceType: "standard_a2m_v2",
  // },
  // {
  //   id: 84,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral2",
  //   instanceType: "standard_a4_v2",
  // },
  // {
  //   id: 85,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiacentral2",
  //   instanceType: "standard_a4m_v2",
  // },
  {
    id: 86,
    type: "telemetry",
    name: "AWS CloudWatch",
    region: "ap-northeast-2",
    instanceType: "standard_a1_v2",
  },
  // {
  //   id: 87,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiaeast",
  //   instanceType: "standard_a2_v2",
  // },
  // {
  //   id: 88,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiaeast",
  //   instanceType: "standard_a2m_v2",
  // },
  // {
  //   id: 89,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiaeast",
  //   instanceType: "standard_a4_v2",
  // },
  // {
  //   id: 90,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiaeast",
  //   instanceType: "standard_a4m_v2",
  // },
  {
    id: 26,
    type: "telemetry",
    name: "AWS CloudWatch",
    region: "ap-northeast-3",
    instanceType: "standard_a1_v2",
  },
  // {
  //   id: 91,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiasoutheast",
  //   instanceType: "standard_a2_v2",
  // },
  // {
  //   id: 92,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiasoutheast",
  //   instanceType: "standard_a2m_v2",
  // },
  // {
  //   id: 93,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiasoutheast",
  //   instanceType: "standard_a4_v2",
  // },
  // {
  //   id: 94,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "australiasoutheast",
  //   instanceType: "standard_a4m_v2",
  // },
  {
    id: 95,
    type: "telemetry",
    name: "AWS CloudWatch",
    region: "ap-south-1",
    instanceType: "standard_a1_v2",
  },
  // {
  //   id: 96,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "brazilsouth",
  //   instanceType: "standard_a2_v2",
  // },
  // {
  //   id: 97,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "brazilsouth",
  //   instanceType: "standard_a2m_v2",
  // },
  // {
  //   id: 98,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "brazilsouth",
  //   instanceType: "standard_a4_v2",
  // },
  // {
  //   id: 99,
  //   type: "telemetry",
  //   name: "AWS CloudWatch",
  //   region: "brazilsouth",
  //   instanceType: "standard_a4m_v2",
  // },

  // Azure App Insights 
  {
    id: 100,
    type: "telemetry",
    name: "Azure App Insights",
    region: "australiacentral1",
    instanceType: "us-east1",
  },
  // {
  //   id: 101,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "us-central1",
  //   instanceType: "us-west1",
  // },
  // {
  //   id: 102,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "us-central1",
  //   instanceType: "us-east4",
  // },
  // {
  //   id: 103,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "us-central1",
  //   instanceType: "us-west2",
  // },
  {
    id: 104,
    type: "telemetry",
    name: "Azure App Insights",
    region: "australiacentral2",
    instanceType: "europe-west2",
  },
  // {
  //   id: 105,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "europe-west1",
  //   instanceType: "europe-west3",
  // },
  // {
  //   id: 106,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "europe-west1",
  //   instanceType: "europe-west4",
  // },
  {
    id: 107,
    type: "telemetry",
    name: "Azure App Insights",
    region: "australiaeast",
    instanceType: "asia-northeast1",
  },
  // {
  //   id: 108,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "asia-east1",
  //   instanceType: "asia-southeast1",
  // },
  // {
  //   id: 108,
  //   type: "telemetry",
  //   name: "Azure App Insights",
  //   region: "asia-east1",
  //   instanceType: "asia-south1",
  // },
//GCP
  {
    id: 109,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-south1",
  },
  {
    id: 110,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "europe-west1",
    instanceType: "europe-west2",
  },
  {
    id: 111,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "europe-west1",
    instanceType: "europe-west3",
  },
  {
    id: 112,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "europe-west1",
    instanceType: "europe-west4",
  },
  {
    id: 113,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-northeast1",
  },
  {
    id: 114,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-southeast1",
  },
  {
    id: 115,
    type: "telemetry",
    name: telemetryTypes.GOOGLE_CLOUD_OPS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-south1",
  },
 //prometheous
  {
    id: 116,
    type: "telemetry",
    name: telemetryTypes.PROMETHEUS,
    // cloud: CLOUD_TYPES.GCP,
    region: "europe-west1",
    instanceType: "europe-west3",
  },
  {
    id: 117,
    type: "telemetry",
    name: telemetryTypes.PROMETHEUS,
    // cloud: CLOUD_TYPES.GCP,
    region: "europe-west1",
    instanceType: "europe-west4",
  },
  {
    id: 118,
    type: "telemetry",
    name: telemetryTypes.PROMETHEUS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-northeast1",
  },
  {
    id: 119,
    type: "telemetry",
    name: telemetryTypes.PROMETHEUS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-southeast1",
  },
  {
    id: 120,
    type: "telemetry",
    name: telemetryTypes.PROMETHEUS,
    // cloud: CLOUD_TYPES.GCP,
    region: "asia-east1",
    instanceType: "asia-south1",
  },
];



export const providerList = [
  {
    cloud: {
      id: 1,
      type: "cloud",
      name: "AWS",
      logo: awslogo,
    },
    telemetry: {
      id: 5,
      type: "telemetry",
      name: telemetryTypes.DATA_DOG,
      logo: datadog,
    },
  },
  {
    cloud: {
      id: 2,
      type: "cloud",
      name: "AZURE",
      logo: azurelogo,
    },
    telemetry: {
      id: 6,
      type: "telemetry",
      name: telemetryTypes.AWS_CLOUDWATCH,
      logo: cloudlogo,
    },
  },
  {
    cloud: {
      id: 3,
      type: "cloud",
      name: "GCP",
      logo: gcplogo,
    },
    telemetry: {
      id: 7,
      type: "telemetry",
      name: telemetryTypes.AZURE_INSIGHTS,
      logo: insightslogs,
    },
  },
   {
    cloud: null,
    telemetry: {
      id: 8,
      type: "telemetry",
      name: telemetryTypes.GOOGLE_CLOUD_OPS,
      logo: gcplogo,
    },
  },
  {
    cloud: null,
    telemetry: {
      id: 9,
      type: "telemetry",
      name: telemetryTypes.PROMETHEUS,
      logo: prometheuslogo,
    },
  },
];
