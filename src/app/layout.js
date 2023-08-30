import ThemeProvider from './theme-provider';

export const metadata = {
    title: 'GROWSYSTEM - Automatic farm control system',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html>
        <body>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>
    );
}
