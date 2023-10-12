import NavBar from "../navbar/navbar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-36 max-w-[960px] mx-auto">
        <div className="min-h-[75vh] flex justify-between">
          <div className="h-96 w-96 bg-white ack rounded-xl shadow-xl"></div>
          <div className="w-[50%] flex flex-col gap-6">
            <h1 className="text-3xl font-bold">OUR STORY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dignissimos mollitia asperiores unde, suscipit repudiandae eos
              repellat delectus officiis ab aperiam aut nesciunt ut voluptas
              placeat voluptatum sit quos nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dignissimos mollitia asperiores unde, suscipit repudiandae eos
              repellat delectus officiis ab aperiam aut nesciunt ut voluptas
              placeat voluptatum sit quos nam?
            </p>
          </div>
        </div>
        <div className="min-h-[80vh] flex justify-between">
          <div className="w-[50%] flex flex-col gap-6">
            <h1 className="text-3xl font-bold">OUR STORY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dignissimos mollitia asperiores unde, suscipit repudiandae eos
              repellat delectus officiis ab aperiam aut nesciunt ut voluptas
              placeat voluptatum sit quos nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dignissimos mollitia asperiores unde, suscipit repudiandae eos
              repellat delectus officiis ab aperiam aut nesciunt ut voluptas
              placeat voluptatum sit quos nam?
            </p>
          </div>
          <div className="h-96 w-96 bg-white ack rounded-xl shadow-xl"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
