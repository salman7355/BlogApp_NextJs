import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="w-full h-[250px] relative">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
            fill={true}
            className="object-cover grayscale-[100%]"
          />
          <div className="absolute bottom-5 left-5 font-semibold bg-[#53c28b] p-1 text-white">
            <p className="text-4xl">Digital Storytellers</p>
            <p className="text-3xl">
              HandCrafting award winning digital experiences
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-24 mt-5 ">
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-4xl">Who are we?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
            blanditiis natus perspiciatis. Eos quae omnis nulla quas? Doloremque
            animi magni veritatis ipsam, labore soluta id ratione, natus
            exercitationem perferendis, beatae dignissimos sint iure! Quis
            corporis, similique vero suscipit, unde culpa, dolores nemo ab
            voluptatem laborum velit beatae nobis quisquam.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-4xl">What We Do?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            tempora eum voluptate tenetur dolor officiis quos voluptas
            doloremque iure accusamus. Sequi, quibusdam! Ex explicabo laudantium
            repudiandae provident doloribus delectus dolorem.
          </p>
          <p>- creative illustration</p>
          <p>- Dynamic Websites </p>
          <p>- Fast and handy mobile apps</p>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
