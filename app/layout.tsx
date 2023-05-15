import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "prompt-sharer",
  description: "Discover and Share AI Prompts",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
