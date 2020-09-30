import React from "react";

const ErrorStateContext = React.createContext();
const ErrorDispatchContext = React.createContext();

const errorReducer = (state, action) => {
  switch (action.type) {
    case "setError": {
      return { ...state, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const ErrorProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(errorReducer, {
    error: {},
  });
  return (
    <ErrorStateContext.Provider value={state}>
      <ErrorDispatchContext.Provider value={dispatch}>
        {children}
      </ErrorDispatchContext.Provider>
    </ErrorStateContext.Provider>
  );
}

const useErrorState = () => {
  const context = React.useContext(ErrorStateContext);
  if (context === undefined) {
    throw new Error("useErrorState must be used within a ErrorProvider");
  }
  return context;
}

const useErrorDispatch = () => {
  const context = React.useContext(ErrorDispatchContext);
  if (context === undefined) {
    throw new Error("useErrorDispatch must be used within a ErrorProvider");
  }
  return context;
}

const withError = Component => ({ error }) => {
  return <ErrorProvider>
    <Component error={error} />
  </ErrorProvider>
}

export { ErrorProvider, useErrorState, useErrorDispatch, withError };
