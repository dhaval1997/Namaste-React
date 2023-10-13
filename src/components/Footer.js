// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/dhaval-prajapati1997"
          target="_blank"
          title="Dhaval Prajapati's Linkedin Profile"
        >
          Dhaval Prajapati
        </a>
        <i className="fa-solid fa-copyright"></i>
          {year}
          <strong>
            Namaste<span>Food</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;