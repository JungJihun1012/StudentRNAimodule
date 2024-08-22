import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import RootNavigation from "./src/navigation/RootNavigation";

function App() {

  const queryClient = new QueryClient();

  return(
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App;