import React from "react";
//imports
import { Link } from "react-router-dom";

//custom components
import PeopleTray from "../trays/PeopleTray";
import Counter from "../counters/Counter";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
//videos and images
import logobg from "../../resources/images/logos/insightx/logo-insightx-nobg.webp";
import videobg from "../../resources/videos/insightx-scaled-down.mp4";
import sponsorImages from "../../resources/images/sponsors/getSponsorImages";
import speakerImages from "../../resources/images/speakers/getSpeakerImages";

const EventsPage = () => {
  return (
    <div>
      {/* Start Theme Video Section */}
      {/* <div className="lg:h-[75vh] h-[10vh] mt-[8vh] items-center flex">
        <img className="w-[95vw]" src={logo} alt="Theme Video" />
      </div> */}
      {/* End Theme Video Section */}

      {/* Start Main Section */}
      <section className=" flex flex-col">
        <div className=" w-full lg:w-full items-center flex">
          {/* <img className="" src={logo} alt="insightx-logo" width={1500} height={182}/> */}
          <video
            className=""
            src={videobg}
            width={1700}
            height={1000}
            autoPlay
            muted
            loop
            poster={
              <div className=" lg:border-b-4 flex flex-col">
                <div className=" h-[80vh] lg:h-[75vh] items-center mx-4 lg:mx-32 flex lg:mb-14">
                  <img
                    className=""
                    alt="insightx logo"
                    width={1500}
                    height={182}
                  />
                </div>
              </div>
            }
          >
            <source src={videobg} />
          </video>
        </div>
        <div className="justify-center flex">
          <Link to={"/register"}>
            <u>Buy Tickets Now!</u>
          </Link>
          {/* <a
            href={
              "https://docs.google.com/forms/d/1woMBHckOJqNbIuXqa2UiJD4Q_6M5EKs0cGco6IJm-fM/edit"
            }
            rel="noreferrer"
            target="_blank"
            className="lg:m-5 lg:text-2xl "
          >
            <u>BUY TICKETS NOW!</u>
          </a> */}
        </div>
      </section>
      {/* End Main Section */}

      {/* Start About Section */}
      <section className="mx-gutter lg:mx-gutterbig my-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-[5vw] lg:my-12 lg:items-center">
          <div className="lg:order-1 lg:pb-20">
            <h2 className="text-left my-0 lg:text-8xl leading-1">
              {/* <span className="text-ted">INSIGHTX</span> */}
              <img
                src={logobg}
                alt="Insightx logo"
                className="w-[80vw]"
                width={640}
                height={100}
              />
            </h2>
            in
            <Counter date="11/25/2023" />
          </div>
          <p className="mt-4 lg:m-0">
            Within the tapestry of InsightX, the mundane fades into the
            backdrop, and the extraordinary takes center stage. InsightX takes
            the role of a lighthouse that shines light on the darkness covering
            ‘that’ hidden in plain sight. At its core, InsightX celebrates the
            pursuit of wisdom and the art of understanding. It nurtures the
            growth of a third eye, a metaphorical lens that grants individuals
            the ability to perceive the world with newfound clarity, see beyond
            the limits of the known and explore the unnoticed dimensions of
            knowledge and understanding.
          </p>
        </div>
        <div className="h-52 flex justify-center item-center flex flex-col">
          <p className="text-center lg:text-5xl text-3xls">
            Find us <span className="text-ted">At</span>
          </p>
          <p className="text-center"> Bangalore Institute of Technology,</p>
          <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
        </div>
      </section>
      {/* End About Section */}

      {/* Start Speaker Section */}
      <section>
        <PeopleTray imageArray={speakerImages} firstText="" secondText="">
          <h2 className="text-center text-ted">
            <span className="text-4xls lg:text-4xl text-main">The</span>
            <br /> Speakers
          </h2>
        </PeopleTray>
      </section>
      {/* End Speaker Section */}

      {/* Start Date and Venue Section */}
      <section className="flex flex-col lg:flex-row w-full justify-evenly">
        <div className="flex flex-col content-center item-center m-3">
          <FontAwesomeIcon
            icon={faClock}
            size="2xl"
            style={{ color: "#ff1414" }}
          />
          <p className="font-bold text-center">Date and Time</p>
          <p className="text-center"> November 25, 2023</p>
          <p className="text-center">Time</p>
        </div>
        <div className="flex flex-col content-center item-center mt-4">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="2xl"
            style={{ color: "#ff1414" }}
          />
          <p className="font-bold text-center">Venue</p>
          <p className="text-center"> Bangalore Institute of Technology,</p>
          <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
        </div>
      </section>
      {/* End Date and Venue Section */}

      {/* Start Sponsor Section */}
      {/* <div className=" my-10">
        <h1>
          Our <span className="text-ted ">Sponsors</span>
        </h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-20 place-content-center">
          {sponsorImages.map((img, index) => {
            return (
              <img
                width={300}
                height={300}
                key={index}
                src={img.path}
                alt={img.name}
              />
            );
          })}
        </div>
      </div> */}
      {/* End Sponsor Section */}

      {/* Start Slider Section */}
      <section class="w-full my-10">
        <h1 className="text-center">
          Our <span className="text-ted ">Sponsors</span>
        </h1>
        <div className="slider p-0">
          <div className="slide-track py-10 flex h-[35vh]">
            {sponsorImages.map((img, index) => {
              return (
                <img
                  className="w-full"
                  width={480}
                  height={200}
                  key={index}
                  src={img.path}
                  alt={img.name}
                />
              );
            })}
            <div className="ml-[30vw]" />
            {sponsorImages.map((img, index) => {
              return (
                <img
                  className="w-full"
                  width={480}
                  height={200}
                  key={index}
                  src={img.path}
                  alt={img.name}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* End Slider Section */}
    </div>
  );
};

export default EventsPage;
