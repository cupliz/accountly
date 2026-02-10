import { Check } from 'lucide-react';

interface Step {
  id: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center relative">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all
                    ${isCompleted ? 'bg-green-600' : ''}
                    ${isCurrent ? 'bg-blue-600' : ''}
                    ${isUpcoming ? 'bg-slate-200' : ''}
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span
                      className={`
                        ${isCurrent ? 'text-white' : ''}
                        ${isUpcoming ? 'text-slate-400' : ''}
                      `}
                    >
                      {index + 1}
                    </span>
                  )}
                </div>
                {/* Step Label */}
                <div className="absolute top-12 text-center whitespace-nowrap">
                  <span
                    className={`text-sm ${
                      isCurrent ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 sm:mx-4">
                  <div
                    className={`h-full transition-all ${
                      index < currentStep ? 'bg-green-600' : 'bg-slate-200'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
