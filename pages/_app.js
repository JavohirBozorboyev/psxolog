import AppLayout from "../Layouts/AppLayout";
import "../styles/globals.css";
import { RouterTransition } from "../components/RouterTransition";
import { SWRConfig } from "swr";
import axios from "axios";
import { NotificationsProvider } from "@mantine/notifications";

axios.defaults.baseURL = "https://backend.tibbiypsihologiya.uz";

const fetcher = (url) => axios.get(url).then((res) => res.data);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <RouterTransition />
      <SWRConfig value={{ fetcher }}>
        <NotificationsProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </NotificationsProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
