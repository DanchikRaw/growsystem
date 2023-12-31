import ThemeProvider from './theme-provider';
import Layout from "@/app/components/Layout/Layout";

export const metadata = {
    title: 'GROWSYSTEM - Automatic farm control system',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <ThemeProvider>
                    <Layout>{children}</Layout>
                </ThemeProvider>
            </body>
        </html>
    );
}
