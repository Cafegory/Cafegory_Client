import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageRoutes from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageRoutes />
    </QueryClientProvider>
  );
}

export default App;
