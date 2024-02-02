import "./App.css";
import AppCard from "./components/AppCard";
import { SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <SimpleGrid columns={[2, null, null, 3]} spacing="40px">
      <AppCard
        title="Portainer"
        url="https://192.168.68.66:9443/#!/2/docker/containers"
        imgPath="/portainer.svg"
      />
      <AppCard
        title="Jellyfin"
        url="http://192.168.68.66:8096/web/index.html#!/home.html"
        imgPath="/jellyfin.svg"
      />
      <AppCard
        title="Transmission"
        url="http://192.168.68.66:9091/transmission/web"
        imgPath="/transmission.svg"
      />
      <AppCard
        title="Shoko Server"
        url="http://192.168.68.66:8111/webui/dashboard"
        imgPath="/shoko.svg"
      />
      <AppCard
        title="Home Assistant"
        url="http://192.168.68.66:8123/lovelace/0"
        imgPath="/home_assistant.svg"
      />
    </SimpleGrid>
  );
}

export default App;
