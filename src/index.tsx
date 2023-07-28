import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

// React Query
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

// Toasts
import { Toaster } from "react-hot-toast";

// Styles
import "./scss/globals.scss";

import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <App />
          <ReactQueryDevtools />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              error: {
                duration: 8000,
                icon: "🚨",
              },
            }}
          />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
