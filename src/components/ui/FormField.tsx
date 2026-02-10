import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  children: ReactNode;
}

export function FormField({ label, name, required, error, helpText, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {helpText && !error && (
        <p className="text-xs text-slate-500">{helpText}</p>
      )}
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, className = '', ...props }: InputProps) {
  return (
    <input
      className={`
        w-full px-3 py-2 border rounded-lg text-slate-900 placeholder-slate-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
        ${error ? 'border-red-300' : 'border-slate-300'}
        ${className}
      `}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export function Select({ error, className = '', children, ...props }: SelectProps) {
  return (
    <select
      className={`
        w-full px-3 py-2 border rounded-lg text-slate-900
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
        ${error ? 'border-red-300' : 'border-slate-300'}
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error, className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`
        w-full px-3 py-2 border rounded-lg text-slate-900 placeholder-slate-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
        ${error ? 'border-red-300' : 'border-slate-300'}
        ${className}
      `}
      {...props}
    />
  );
}
