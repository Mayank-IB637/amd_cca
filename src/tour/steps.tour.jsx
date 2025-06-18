import { openSidebar } from "@/redux/features/sidebar/sidebar.slice";
import { store } from "@/redux/store";

const steps = () => [
  {
    id: "step-1",
    text: "Click this button to view previous releases.",
    attachTo: {
      element: "#step-one-target",
      on: "bottom",
      offset: "0 10",
    },
  },
  {
    id: "step-2",
    text: "Click here to close the dialog box.",
    attachTo: {
      element: "#step-two-target",
      on: "top",
      offset: "0 20",
    },
    type: "wait",
  },
  {
    id: "step-3",
    text: "Click to open the support menu.",
    attachTo: {
      element: "#step-three-target",
      on: "right",
    },
    offset: "0 20",
  },
  {
    id: "step-4",
    text: "Access all support options here.",
    attachTo: {
      element: "#step-three-target",
      on: "right",
      offset: "0 20",
    },
  },
  {
    id: "step-5",
    text: "Click to open your user profile menu.",
    attachTo: {
      element: "#step-four-target",
      on: "right",
      offset: "0 20",
    },
  },
  {
    id: "step-6",
    text: "Manage your user profile settings here.",
    attachTo: {
      element: "#step-four-target",
      on: "right",
    },
  },
  {
    id: "step-7",
    text: "Click to open the download menu.",
    attachTo: {
      element: "#step-five-target",
      on: "bottom",
    },
    type: "wait",
  },
   {
    id: "step-8",
    text: "Enter a name for your portfolio. This will help identify it in the system.",
    attachTo: {
      element: "#portfolio-name",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-9",
    text: "Upload the instance file or updated template here. The Maximum limit is 20,000 records. Once uploaded, the data will auto-populate in the table below.",
    attachTo: {
      element: "#uploadInstances",
      on: "bottom",
    },
  },
    {
    id: "step-10",
    text: "Click Save to add this as a portfolio in the CCA application.",
    attachTo: {
      element: "#savePortfolio",
      on: "top",
    },
  },
  {
    id: "step-11",
    text: "Click to permanently delete the selected portfolio.",
    attachTo: {
      element: "#deletePortfolio",
      on: "top",
    },
    type: "wait",
  },
   {
    id: "step-12",
    text: "Click to cancel portfolio deletion.",
    attachTo: {
      element: "#cancelDeletePortfolio",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-13",
    text: "View AMD instance recommendations with cost comparisons and potential savings.",
    attachTo: {
      element: "#instanceAdvice",
      on: "top",
    },
    type: "wait",
  },
    {
    id: "step-14",
    text: "Select the Savings Type .",
    attachTo: {
      element: "#savings-type-label",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-15",
    text: "Click this to view input error explanations.",
    attachTo: {
      element: "#input-errors-explanation",
      on: "bottom",
      offset: "0 10",
    },
  },
   {
    id: "step-16",
    text: "Click this to close input error explanations.",
    attachTo: {
      element: "#input-errors-explanation-close",
      on: "bottom",
    },
  },
   {
    id: "step-17",
    text: "Click this to view EIA Recommendation.",
    attachTo: {
      element: "#eia-recommended",
      on: "bottom",
    },
  },
    {
    id: "step-18",
    text: "Click this to close input error explanations.",
    attachTo: {
      element: "#eia-recommended-dialog-close",
      on: "bottom",
    },
  },
    {
    id: "step-19",
    text: "Export cost advice as an Excel (.xlsx) file for offline use.",
    attachTo: {
      element: "#btn-cost-advice-export",
      on: "bottom",
    },
    type: "wait",
  },
    {
    id: "step-20",
    text: "Scroll through the cost advisory table.",
    attachTo: {
      element: "#instance-advice-table",
      on: "bottom",
    },
    type: "wait",
  },


  
  {
    id: "step-21",
    text: "Continue scrolling the cost advisory table.",
    attachTo: {
      element: "#instance-advice-table",
      on: "bottom",
    },
    type: "wait",
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [100, 10],
          },
        },
      ],
    },
  },
  {
    id: "step-22",
    text: "Click to close the cost advisory view.",
    attachTo: {
      element: "#close-instance-advice",
      on: "bottom",
    },

    type: "wait",
  },
  {
    id: "step-23",
    text: "Click to create a new portfolio.",
    attachTo: {
      element: "#btn-dashboard-createPortfolio",
      on: "bottom",
    },

    type: "wait",
  },
  {
    id: "step-24",
    text: "Enter a name for your new portfolio.",
    attachTo: {
      element: "#portfolio-name",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-24.1",
    text: "Manually input instance details. Complete all required fields marked with an asterisk (*).",
    attachTo: {
      element: "#formFields",
      on: "bottom",
    },
    type: "wait",
  },
   
  {
    id: "step-25",
    text: "Click to add a new VM entry using the provided inputs. Ensure all fields are complete.",
    attachTo: {
      element: "#addInstanceFormTarget",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-26",
    text: " Click to replace the selected VM entry with the new input values. First, select a row, update the fields, and then click Replace.",
    attachTo: {
      element: "#findAndReplace",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-27",
    text: "Select the current instance type you want to change.",
    attachTo: {
      element: "#instanceTypeTargetFrom",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-28",
    text: "Select the new instance type to apply.",
    attachTo: {
      element: "#instanceTypeTargetTo",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-29",
    text: "Click to replace the options.",
    attachTo: {
      element: "#ReplaceAllButton",
      on: "bottom",
    },
    type: "wait",
  },
  {
    id: "step-30",
    text: "Click to save the changes.",
    attachTo: {
      element: "#savePortfolio",
      on: "top",
    },
    type: "wait",
  },
  {
    id: "step-31",
    text: "Click to permanently delete the selected portfolio.",
    attachTo: {
      element: "#deletePortfolio",
      on: "top",
    },
    type: "wait",
  },
    {
    id: "step-32",
    text: "Click to cancel portfolio deletion.",
    attachTo: {
      element: "#cancelDeletePortfolio",
      on: "bottom",
    },
    type: "wait",
  },

  // {
  //   id: "step-32",
  //   text: "Click to see cloud usage reports.",
  //   attachTo: {
  //     element: "#manageportfolio-cusagereport-link",
  //     on: "bottom",
  //   },
  //   type: "wait",
  // },



  // {
  //   id: "step-33",
  //   text: "Click to update the edited value.",
  //   attachTo: {
  //     element: "#Aws-box",
  //     on: "bottom",
  //   },
  //   type: "wait",
  // },
  
];

export default steps;