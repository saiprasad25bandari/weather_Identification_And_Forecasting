import "./Contact.css";
export const Contact = () => {
  return (
    <>
     
        <div className="title1">
          <h1 >Contact us</h1>
        </div>
        <div className="add-content">
          <br />
          <i className="fa-solid fa-building">&nbsp; ADDRESS</i>
          <p>Keshav Memorial Institute of Technology</p>
          <p>Narayanaguda-500029</p>
          <p>Hyderabad,Telangana</p>
          <br />
          <i className="fa-solid fa-phone">&nbsp; 8125753400</i>
          <br />
          <br />
          <div className="Mail">
            <i className="fa-sharp fa-solid fa-envelope" />
            &nbsp; &nbsp;saiprasadbandari2003@gmail.com
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.304848661974!2d78.48804571444865!3d17.397151888072795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c44533324f%3A0x8aa5456a7d836bb5!2sKeshav%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1675616354692!5m2!1sen!2sin"
            width={400}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
     
    </>
  );
};
