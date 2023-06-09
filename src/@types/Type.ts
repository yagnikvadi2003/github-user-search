import { ToastContainerProps } from 'react-toastify';
import { ToastProps } from 'react-toastify/dist/types';
import {
  HTMLButtonTypeElement,
  HTMLClassNameAttribute,
  HTMLIdAttribute,
  HTMLInputTypeAttribute,
  HTMLOnChangeAttribute,
  HTMLOnClickAttribute,
  HTMLOnSubmitAttribute,
  Method,
  ToastPosition,
} from './UnionTypes';
import { AxiosError } from 'axios';

/*
 *
 * define Custom Elements Component type properties.
 * add any other custom props you want to use.
 *
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonId?: HTMLIdAttribute;
  buttonText?: string;
  className?: HTMLClassNameAttribute;
  IconId?: HTMLIdAttribute;
  type?: HTMLButtonTypeElement | 'button';
  onClick?: HTMLOnClickAttribute;
}

export interface IconProps {
  className?: HTMLClassNameAttribute;
  IconId?: HTMLIdAttribute;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  InputId?: HTMLIdAttribute;
  type?: HTMLInputTypeAttribute | 'text';
  value?: string | undefined;
  placeholder?: string | undefined;
  className?: HTMLClassNameAttribute;
  onChange?: HTMLOnChangeAttribute;
}

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined;
  alt: string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  className?: HTMLClassNameAttribute;
  ImageId?: HTMLIdAttribute;
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement | HTMLInputElement | HTMLButtonElement> {
  onSubmit?: HTMLOnSubmitAttribute;
  onChange?: HTMLOnChangeAttribute;
  FormId?: HTMLIdAttribute;
  value?: string | undefined;
  ButtonId?: HTMLIdAttribute;
  InputId?: HTMLIdAttribute;
  IconId?: HTMLIdAttribute;
  className?: HTMLClassNameAttribute;
}

export interface User {
  login: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
}

export interface AxiosProps {
  // Required property that represents the URL for the API request.
  url: string;
  // Optional property that represents the HTTP method for the API request.
  // Must be one of the four allowed values: 'get', 'post', 'put', or 'delete'.
  method?: Method | string;
  // Optional property that represents the payload data for the API request.
  data?: User[];
  // Optional property that represents the request headers for the API request.
  // The keys must be strings, and the values must be strings too.
  headers?: { [key: string]: string };
  // Optional callback function that will be called if the API request is successful.
  // The function takes one parameter, which is the response data.
  onSuccess?: (data: User[]) => void;
  // Optional callback function that will be called if the API request fails.
  // The function takes one parameter, which is the error object.
  onError?: (error: AxiosError) => void;
}

/*
 *
 * define Custom Toastify Component type properties.
 * add any other custom props you want to use.
 *
 */
export interface ToastifyProps extends ToastContainerProps {
  /**
   * Set the default position to use.
   * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
   * `Default: 'top-right'`
   **/
  position?: ToastPosition;
  /**
   * Set the delay in ms to close the toast automatically.
   * Use `false` to prevent the toast from closing.
   * `Default: 5000`
   **/
  autoClose?: number | false;
  /**
   * Hide or show the progress bar.
   * `Default: false`
   **/
  hideProgressBar?: boolean;
  /**
   * Whether or not to display the newest toast on top.
   * `Default: false`
   **/
  newestOnTop?: boolean;
  /**
   * Remove the toast when clicked.
   * `Default: true`
   **/
  closeOnClick?: boolean;
  /**
   * Support right to left display.
   * `Default: false`
   **/
  rtl?: boolean;
  /**
   * Pause the toast when the window loses focus.
   * `Default: true`
   **/
  pauseOnFocusLoss?: boolean;
  /**
   * Allow toast to be draggable
   * `Default: true`
   **/
  draggable?: boolean;
  /**
   * Pause the timer when the mouse hover the toast.
   * `Default: true`
   **/
  pauseOnHover?: boolean;
  /**
   * @INTERNAL
   **/
  props?: ToastProps;
}

/*
 *
 *   • `data`: An array of items of type `T` that the component will be iterating over.
 *   • `renderItem`: A function that takes an item of type `T` as an argument, and returns a
 *      React node that will be rendered for that item.
 *
 *   generic type parameter `T`, the `MapProps` interface allows you to define the
 *   type of the data that the component will be iterating over at runtime. This makes the
 *   component more flexible and reusable, as it can be used with different types of
 *   data without needing to be rewritten for each type.
 *
 *   • Define the props for the component using a generic type parameter `T`
 *
 */
export interface MapProps<T> {
  data: T[];
  renderItem: (element: T, index: number) => React.ReactNode;
}