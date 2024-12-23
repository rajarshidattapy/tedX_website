import React from "react";
//images
import logobg from "../../resources/images/logos/insightx/logo-insightx-nobg.webp";

const HomePage = () => {
  return (
    <div className="">
      {/* Banner Start */}
      <section className=" lg:border-b-4 border-white flex flex-col">
        <div className=" h-[80vh] lg:h-[75vh] items-center mx-4 lg:mx-32 flex lg:mb-14">
          <img
            className=""
            src={logobg}
            alt="insightx logo"
            width={1500}
            height={182}
          />
        </div>

        {/* <p className="text-center text-normal [font-stretch:normal]">
          Scroll
        </p> */}
        {/* <FontAwesomeIcon
          className="m-2 h-[2rem]"
          icon={faChevronDown}
          style={{ color: "white" }}
        /> */}
      </section>
      {/* Banner End */}

      {/*Content Start  */}
      <div className="mt-20 ml-gutter mr-[6vw] lg:mx-gutterbig">
        {/* What is TEDX Start */}
        <section className="lg:grid lg:grid-cols-2 lg:gap-x-[5vw] lg:items-center my-12">
          <h1 className="lg:text-left lg:my-0 lg:order-1 lg:mb-16">
            What <span className="lg:text-5xl">is</span>
            <br />
            <span className="text-ted underline lg:text-8xl text-6xls">
              <a href="https://www.ted.com/tedx">TEDx</a>
            </span>
            ?
          </h1>
          <p className="">
            In the spirit of ideas worth spreading, TED has created a program
            called <span className="text-ted">TEDx</span>.{" "}
            <span className="text-ted">TEDx </span> is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. Our event is called TEDxBitBangalore, where
            <br />
            <span className="text-ted">x</span> = independently organized TED
            event. At our <span className="text-ted">TEDxBitBangalore</span>{" "}
            event INSIGHTX, TED Talks video and live speakers will combine to
            spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the{" "}
            <span className="text-ted">TEDx </span> program, but individual{" "}
            <span className="text-ted">TEDx </span> events, including ours, are
            self-organized.
          </p>
        </section>
        {/* What is TEDX End */}
        {/* About Start */}
        <section className="lg:grid lg:grid-cols-2 lg:gap-x-[5vw] my-12">
          <h1 className="lg:text-left lg:my-0 lg:order-1 ">
            About
            <br />
            <span className="text-ted">
              TEDx
              <br />
              <span className="lg:text-5xl text-4.5xls">BITBangalore</span>
            </span>
          </h1>
          <p className="">
            <span className="text-ted">TEDxBITBangalore </span> is a channel to
            propagate ideas globally through a local platform. We hold a{" "}
            <u>university-level license</u> from TED to organise an independent
            <span className="text-ted">
              <sup>x</sup>
            </span>{" "}
            TED event to effectuate the same. It was initiated by a humble group
            of young visionaries dedicated to bringing together{" "}
            <i>ideas worth spreading</i>.
          </p>
        </section>
        {/* About End */}
        {/* Location Start */}
        {/* <div className=" my-20 ">
          <img
            className="hover:opacity-50 w-full"
            src={img_bit}
            alt="pic of bangalore city"
          />
        </div> */}
        {/* Location End */}
        
      </div>
      {/*Content End  */}
    </div>
  );
};

export default HomePage;
