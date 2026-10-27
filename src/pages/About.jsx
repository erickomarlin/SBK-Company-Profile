function About() {
  return (
    <div>
      {/* WHO WE ARE */}
      <div className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center min-h-110 p-6 md:px-8 md:pt-12 lg:flex lg:px-12">
        <div className="md:max-w-5xl lg:flex-2">
          <h1 className="text-5xl text-orange-900 font-bold">About Us</h1>

          <h2 className="text-2xl text-sky-900 font-bold mt-10">Who We Are</h2>

          <p className="mt-2 text-justify md:text-xl lg:text-xl">
            Founded in 2023 as a specialized civil and steel structure
            contractor, PT. Semesta Building Konstruksi has rapidly established
            a reputation grounded in client commitment and project excellence.{" "}
            <br />
            <br />
            Expanding from initial small-scale works, the company now delivers
            large-scale developments defined by strict timeline adherence,
            superior craftsmanship, and cost efficiency.
            <br />
            <br />
            Operating as a full-service general contractor, PT. Semesta Building
            Konstruksi provides end-to-end Design & Build solutions across
            civil, architectural, MEP (Mechanical, Electrical, & Plumbing), and
            infrastructure disciplines. Our diverse portfolio spans commercial
            offices, educational institutions, residential complexes, sports
            facilities, and industrial developments—all delivered with
            unwavering integrity and professionalism.
          </p>
        </div>
        <div className="lg:flex-1 lg:bg-[url(/src/assets/background2sketch.jpg)] lg:ml-12 lg:bg-cover lg:bg-no-repeat"></div>
      </div>

      {/* VISION AND MISSION */}
      <div
        id="vision-mission"
        className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center p-6 lg:text-right lg:pt-18 lg:px-12"
      >
        <h2 className="text-2xl text-sky-900 font-bold">Vision And Mission</h2>
        <div className="bg-linear-to-br from-orange-700 to-sky-900 mt-10  rounded-lg px-4 py-2 md:max-w-xl lg:ml-auto">
          <h3 className="text-white text-xl font-bold mb-3">Vision</h3>
          <p className="text-gray-100 text-md ">
            PT. Semesta Building Konstruksi strives to be a trusted company in
            construction industry, a preferred main contractor known with
            reputation of its good quality service and high customer
            satisfaction.
          </p>
        </div>
        <div className="bg-linear-to-br from-orange-700 to-sky-900 mt-10  rounded-lg px-4 py-4 md:max-w-xl lg:ml-auto">
          <h3 className="text-white text-xl font-bold mb-3">Mission</h3>
          <p className="text-gray-100 text-md ">
            Continuously creating improvement in quality and safety in
            delivering the best value service for the customer while at the same
            time providing job satisfaction and career opportunities for the
            proud employees, are the priorities of the company.
          </p>
        </div>
      </div>

      {/* VALUE AND CORE */}
      <div
        id="value-core"
        className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center p-6 pb-20 lg:pt-18 lg:px-12"
      >
        <h2 className="text-2xl text-sky-900 font-bold">Vision And Mission</h2>
        <div>
          <div className="mt-6">
            <p className="font-bold text-lg">
              <span className="text-3xl text-orange-900 font-bold mr-1">I</span>
              ntegrity
            </p>
            <p>
              Build trust with honesty, responsibility, as well as one word with
              deeds
            </p>
          </div>
          <div className="mt-4">
            <p className="font-bold text-lg">
              <span className="text-3xl text-orange-900 font-bold mr-1">C</span>
              ommitment
            </p>
            <p>
              Upholding agreed values, and take responsibility wholeheartedly
            </p>
          </div>
          <div className="mt-4">
            <p className="font-bold text-lg">
              <span className="text-3xl text-orange-900 font-bold mr-1">T</span>
              eamwork
            </p>
            <p>
              The spirit of mutual respect and honor, to achieve the ultimate
              results
            </p>
          </div>
          <div className="mt-4">
            <p className="font-bold text-lg">
              <span className="text-3xl text-orange-900 font-bold mr-1">L</span>
              eadership
            </p>
            <p>Guiding and motivating, to achieve the work targets</p>
          </div>
          <div className="mt-4">
            <p className="font-bold text-lg">
              <span className="text-3xl text-orange-900 font-bold mr-1">C</span>
              ontinous Improvement
            </p>
            <p>
              To be able to see the benefits of improvement, for ourselves, work
              units and companies
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[url(/src/assets/background7.JPG)] w-full h-70 bg-center"></div>
    </div>
  );
}

export default About;
