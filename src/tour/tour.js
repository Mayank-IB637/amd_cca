import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import steps from "./steps.tour";
import {
  handleElementAction,
  highlightElement,
  removeHighlight,
} from "./actionsHandlers";

let isMuted = false;

const speakText = (text, isMuted) => {
  if (isMuted || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
};
function generateButtons(step, currentStepIndex) {
  return [
   {
  text: isMuted
    ? '<i class="material-icons">volume_off</i>'
    : '<i class="material-icons">volume_up</i>',
  action: () => {
    isMuted = !isMuted;

    const synth = window.speechSynthesis;
    synth.cancel(); // Instantly stop any ongoing speech

    // If unmuting and a current step exists, speak its text
    const currentStep = tour.getCurrentStep();
    if (currentStep && !isMuted) {
      const stepData = allSteps[currentStepIndex];
      speakText(stepData.text, isMuted);
    }

    // Update buttons to reflect new icon
    if (currentStep) {
      currentStep.updateStepOptions({
        buttons: generateButtons(allSteps[currentStepIndex], currentStepIndex),
      });
    }
  },
},

    {
      text: "Skip All",
      action: () => {
        removeHighlight(step.attachTo.element);
        window.speechSynthesis.cancel();
        tour.complete();
      },
    },
   
    // {
    //   text: "Previous",
    //   disabled: step.isStart,
    //   secondary: step.isStart,
    //   action: () => {
    //     const currentLabel = allSteps[currentStepIndex].label;
    //     let prevLabelIndex = currentStepIndex - 1;
    //     while (
    //       prevLabelIndex >= 0 &&
    //       allSteps[prevLabelIndex].label === currentLabel
    //     ) {
    //       prevLabelIndex--;
    //     }

    //     if (prevLabelIndex >= 0) {
    //       const prevLabel = allSteps[prevLabelIndex].label;
    //       const firstOccurrence = allSteps.findIndex(
    //         (s) => s.label === prevLabel
    //       );
    //       if (firstOccurrence !== -1) {
    //         tour.show(firstOccurrence);
    //       }
    //     } else {
    //       tour.show(0);
    //     }
    //   },
    // },
    {
      text: step.isEnd ? "Finish" : "Next",
      action: async () => {
        const id = step.attachTo.element.replace("#", "");
        const el = document.getElementById(id);
        if (!el) {
          tour.next();
          return;
        }
        try {
          await handleElementAction(el, id);
        } catch (err) {
          alert(`Action failed for ${id}: ${err.message}`);
        } finally {
          if (step?.action?.next) step.action.next();
          step.isEnd ? tour.complete() : tour.next();
        }
      },
    },
  ];
}

const tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: { enabled: false },
    classes: "shepherd-theme-arrows",
    scrollTo: { behavior: "smooth", block: "center" },
  },
  useModalOverlay: true,
});
const allSteps = steps();
allSteps.forEach((step, currentStepIndex) => {
  tour.addStep({
    id: step.id,
    text: step.text,
    attachTo: step.attachTo,
    buttons: [],
    // showOn: () => {
    //     const el = document.querySelector(step.attachTo.element);
    //     return !!el;
    //   },
    beforeShowPromise: () =>
      new Promise((resolve) => {
        const speakIfNeeded = () => {
          
          if (step.text) speakText(step.text, isMuted);
        };

        const checkExist = setInterval(() => {
          const el = document.querySelector(step.attachTo.element);
          if (el) {
            clearInterval(checkExist);
            highlightElement(step.attachTo.element);
            speakIfNeeded();
             const currentStep = tour.getCurrentStep();
            if (currentStep) {
              currentStep.updateStepOptions({
                buttons: generateButtons(step, currentStepIndex),
              });
            }
            resolve();
          }
        }, 100);
      }),
    when: {
      hide: () => {
        removeHighlight(step.attachTo.element);
      },
    },
  });
});

tour.start();