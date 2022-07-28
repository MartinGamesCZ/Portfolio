import Header from "../Header/Header";

interface Props {
  children: any;
}

const PageContainer = ({ children }: Props) => {
  return (
    <div className="page-container">
      <Header />
      <div className="page">{children}</div>
    </div>
  );
};

export default PageContainer;
