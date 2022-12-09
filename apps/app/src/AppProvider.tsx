import { lazy, Suspense } from "react";
import { MantineProvider, Button } from '@mantine/core';

const App = lazy(() => import('./App'));

function AppProvider() {
    return (
        <MantineProvider theme={{ fontFamily: 'Open Sans' }} withCSSVariables withGlobalStyles withNormalizeCSS>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </MantineProvider>
    )
}

export default AppProvider