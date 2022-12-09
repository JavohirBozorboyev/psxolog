import AppLayout from "../Layouts/AppLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import "../styles/globals.css";
import useSWR from "swr";
import { RouterTransition } from "../components/RouterTransition";
import { MantineProvider } from "@mantine/core";
import { SWRConfig } from "swr";
import axios from "axios";
import { NotificationsProvider } from "@mantine/notifications";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RouterTransition />
      <SWRConfig value={fetcher}>
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
