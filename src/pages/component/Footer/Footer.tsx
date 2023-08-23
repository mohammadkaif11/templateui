interface FooterProps {
  Name: string;
}

const Footer: React.FC<FooterProps> = ({ Name }) => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 text-center">
            &copy; 2023 ${Name}, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;