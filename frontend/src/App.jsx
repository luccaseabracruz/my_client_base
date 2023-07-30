import { ContactProvider } from "./providers/ContactProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Reset } from "./styles/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <ContactProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Reset />
      <GlobalStyle />
      <RoutesMain />
    </ContactProvider>
  );
};
