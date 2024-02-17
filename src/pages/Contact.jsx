import SectionHeader from "../Components/SectionHeader";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container mx-auto p-20">
        <SectionHeader heading="Contact Us" />
        <div className="mt-8">
          <p className="text-2xl">
            We welcome your questions, feedback, and inquiries! Contact us using
            the information provided below. Your input matters to us, and we're
            here to assist you.
          </p>
          <div className="mt-5">
            <p className="text-xl">Email: pazzlers_interior@fashion.com</p>
            <p className="text-xl">Phone: +01234567890</p>
            <p className="text-xl">
              Address: Henry Hernandez
                Notting Estate
                123 Notting Lane
                Nottingham
                NG1 1AJ
                England 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;