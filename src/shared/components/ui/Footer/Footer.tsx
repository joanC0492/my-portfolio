export const Footer = () => {
  return (
    <footer className="text-sm py-4 bg-[#F7F8F9] dark:bg-black">
      <p className="text-center">
        © <time>{new Date().getFullYear()}</time>. Developed by Joan Cochachi
      </p>
    </footer>
  );
};
