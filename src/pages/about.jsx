import SectionHeader from "../Components/SectionHeader";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1358910/pexels-photo-1358910.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="mx-auto p-20">
        <SectionHeader heading="About Us" />
        <div></div>
        <div>
          <h2 className="text-3xl test-bold text-cyan-600 pt-10 pl-10">Bedroom Interior Design Ideas To Help You Get Inspired</h2>
          <p className="text-lg leading-relaxed">Browse through this section and you will find an update on the latest and modern bedroom designs. And we know that a bedroom is a place where sizzles begin, children play, and a safe haven for all the single souls who love Netflix and chill. So DesignCafe have a bunch of blogs on bedroom interior design ideas for all sorts of snoozers and snorers that will make your relationship with your bedroom a long-lasting one. If you are looking to have a personalised bedroom for you, check out the latest design ideas or talk to our bedroom design experts.
          </p>
          <p className="text-lg mt-5 leading-relaxed">
            AWant a peaceful vibe at home? Then green is one of the best colour combinations for your hall. The colour green is said to represent tranquillity growth and represents peace. Take a look at this living room that is painted in a mint or pastel green. See how it blends beautifully with the white walls? Green is said to be a refreshing colour which evokes a feeling of abundance and security. So if you want to feel secure and be at peace with the four walls at home, green is the colour to choose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;